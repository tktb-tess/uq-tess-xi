import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';
import type { ZpDICAPIResponseWord, WordData } from '$lib/types/decl';
import { isHttpError, json, error } from '@sveltejs/kit';

const headers = {
	'Content-Type': 'application/json'
} as const;

export const GET = async () => {
	console.log('received GET request at /today-word');

	try {
		const redis = await createClient({ url: REDIS_URL }).connect();
		const today_word = (await redis.json.get('today-word')) as ZpDICAPIResponseWord;
		const query = `?kind=exact&number=${today_word.number}`;
		const dicUrl = `https://zpdic.ziphil.com/dictionary/633${query}`;

		const size = (() => {
			const len = today_word.name.length;
			return len < 10 ? 'text-5xl' : 'text-4xl';
		})();

		const body: Readonly<WordData> = {
			word: today_word.name,
			translations: today_word.equivalents,
			dicUrl,
			pron: today_word.pronunciation,
			size
		};

		return json(body, { headers });

	} catch (e) {
		console.log(e);
		if (isHttpError(e)) {
			error(e.status);
		} else {
			error(500);
		}
	}
};
