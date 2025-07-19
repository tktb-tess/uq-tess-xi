import { error, isHttpError, json } from '@sveltejs/kit';
import { ZPDIC_API_KEY, REDIS_URL, CRON_SECRET } from '$env/static/private';
import type { ZpDICAPIWordsResponse } from '$lib/types/decl';
import { getRndInt } from '$lib/modules/util';
import { createClient } from 'redis';

export const GET = async ({ request, fetch: svFetch }) => {
	const api_rt = `https://zpdic.ziphil.com/api/v0/dictionary/633/words`;
	const headers = {
		'X-Api-Key': ZPDIC_API_KEY
	} as const;

	// authorization
	if (request.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) {
		error(401);
	}

	const fetchZpDICAPI = async (query: string): Promise<ZpDICAPIWordsResponse> => {
		const resp = await svFetch(api_rt + query, { method: 'GET', headers });
		if (!resp.ok) {
			throw resp;
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

	try {
		// connect to Redis
		const redis = await createClient({ url: REDIS_URL }).connect();

		const total = await getTotal();
		const today_word = (await getWord(getRndInt(0, total))).words[0];
		await redis.json.set('today-word', '$', today_word);

		// check
		const stored = await redis.json.get('today-word');
		console.log(stored);
		return json(stored);
	} catch (e: unknown) {
		if (isHttpError(e)) {
			error(e.status);
		} else {
			error(500);
		}
	}
};
