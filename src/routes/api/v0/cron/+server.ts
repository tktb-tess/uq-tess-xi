import { error, isHttpError, json } from '@sveltejs/kit';
import { ZPDIC_API_KEY, REDIS_URL, CRON_SECRET } from '$env/static/private';
import { redisKeys, type ZpDICAPIWordsResponse } from '$lib/types/decl';
import { getRndInt } from '$lib/modules/util';
import { createClient } from 'redis';
import Papa from 'papaparse';
import { dev } from '$app/environment';
import RSA from '$lib/modules/rsa.js';

export const GET = async ({ request, fetch: svFetch }) => {
	const zpdicApiRt = `https://zpdic.ziphil.com/api/v0/dictionary/633/words`;
	const vaeSwadeshUrl =
		'https://script.google.com/macros/s/AKfycbwAr_bYLJIm-nZlOdFl9y1V3ZipMMg_2XHFel-p0gqnLfiLnRwSMqbRn-h4RAEjClAK/exec';
	const zpdicReqHeaders = {
		'X-Api-Key': ZPDIC_API_KEY
	} as const;

	const fetchZpDICAPI = async (query: string): Promise<ZpDICAPIWordsResponse> => {
		const resp = await svFetch(zpdicApiRt + query, { method: 'GET', headers: zpdicReqHeaders });
		if (!resp.ok) {
			error(404, { message: 'cannotAccessZpdicApi' });
		}
		return resp.json();
	};

	const getTotal = async () => {
		const query = `?text=`;
		const json = await fetchZpDICAPI(query);
		return json.total;
	};

	const getWord = async (index: number) => {
		const query = `?text=&limit=1&skip=${index}`;
		return fetchZpDICAPI(query);
	};

	const getTodayWord = async () => {
		const total = await getTotal();
		return (await getWord(getRndInt(0, total))).words[0];
	};

	const getSwadeshListVae = async () => {
		const resp = await svFetch(vaeSwadeshUrl, { method: 'GET' });
		if (!resp.ok) {
			error(404, { message: 'cannotAccessSwadeshListVae' });
		}

		const pre = await resp
			.text()
			.then((csvStr) => Papa.parse<string[]>(csvStr, { header: false }).data);

		return pre.map((row) => {
			return row.map((s) => s.replace(/;/, ',').trim());
		});
	};

	const genRsaKey = async () => {
		return RSA.generate();
	};

	// authorization
	if (!dev && request.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) {
		error(401);
	}

	// connect to Redis
	const client = await createClient({ url: REDIS_URL }).connect();

	try {
		const [todayWord, swadeshListVae, rsaKey] = await Promise.all([
			getTodayWord(),
			getSwadeshListVae(),
			genRsaKey()
		]);

		await Promise.all([
			client.set(redisKeys.todayWord, JSON.stringify(todayWord)),
			client.set(redisKeys.swadeshVae, JSON.stringify(swadeshListVae)),
			client.set(redisKeys.rsaKey, JSON.stringify(rsaKey)),
			client.set(redisKeys.lastUpdate, JSON.stringify({ value: new Date() }))
		]);

		// check
		const stored = await Promise.all(
			Object.entries(redisKeys).map(async ([key, value]) => {
				const json = await client.get(value);
				if (!json) error(404, { message: 'dataNotFound' });
				return [key, JSON.parse(json) as object] as const;
			})
		).then((entries) => Object.fromEntries(entries));

		console.log(...Object.values(stored));
		return json(stored, { headers: { 'Content-Type': 'application/json' } });
	} catch (e: unknown) {
		if (isHttpError(e)) {
			error(e.status, { message: e.body.message });
		} else if (e instanceof Error) {
			error(500, { message: `${e.name}: ${e.message}` });
		} else {
			error(500, { message: 'unidentifiedError' });
		}
	} finally {
		await client.close();
	}
};
