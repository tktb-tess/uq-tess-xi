import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';
import type { ZpDICAPIResponseWord } from '$lib/modules/zpdic';
import { error, json } from '@sveltejs/kit';

export type WordData =
	| {
			is_success: true;
			today_word: ZpDICAPIResponseWord;
			dic_url: string;
			pron: string;
			size: 'text-5xl' | 'text-4xl';
	  }
	| {
			is_success: false;
			status: number;
			message: string;
	  };

const headers = {
	'Content-Type': 'application/json'
} as const;

export const GET = async () => {
	console.log('received GET request at /today-word');
	try {
		const redis = await createClient({ url: REDIS_URL }).connect();
		const today_word = (await redis.json.get('today-word')) as ZpDICAPIResponseWord;
		const query = `?kind=exact&number=${today_word.number}`;
		const dic_url = `https://zpdic.ziphil.com/dictionary/633${query}`;

		const pron = today_word.pronunciation;

		const size = (() => {
			const len = today_word.name.length;
			return len < 10 ? 'text-5xl' : 'text-4xl';
		})();

		const body: Readonly<WordData> = {
			is_success: true,
			today_word,
			dic_url,
			pron,
			size
		};

		return json(body, { headers });
	} catch (e: unknown) {
		// console.error(e);
		if (e instanceof Error) {
			error(500, e);
		} else if (e instanceof Response) {
			error(e.status, { message: e.statusText });
		} else {
			error(500, { message: 'unidentified error' });
		}
	}
};
