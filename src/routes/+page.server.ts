import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';
import type { ZpDICAPIResponseWord, WordData, Result } from '$lib/types/decl';
import { redisKeys } from '$lib/types/decl';

export const prerender = false;

export const load = async (): Promise<Result<WordData>> => {
	try {
		const client = await createClient({ url: REDIS_URL }).connect();

		const todayWord = await client.get(redisKeys.todayWord).then((word) => {
			if (!word) throw Error('failed to load today-word from redis');

			return JSON.parse(word) as ZpDICAPIResponseWord;
		});

		const query = `?kind=exact&number=${todayWord.number}`;
		const dicUrl = `https://zpdic.ziphil.com/dictionary/633${query}`;

		const size = (() => {
			const len = todayWord.name.length;
			return len < 10 ? 'text-5xl' : 'text-4xl';
		})();

		return {
			success: true,
			result: {
				word: todayWord.name,
				translations: todayWord.equivalents,
				dicUrl,
				pron: todayWord.pronunciation,
				size
			}
		};
	} catch (e) {
		if (e instanceof Error) {
			return {
				success: false,
				message: e.message,
				stack: e.stack
			};
		} else {
			return {
				success: false,
				message: 'unidentified error'
			};
		}
	}
};
