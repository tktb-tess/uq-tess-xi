import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';
import type { ZpDICAPIResponseWord } from '$lib/modules/zpdic';
import { error, json } from '@sveltejs/kit';

type Equivalents = ZpDICAPIResponseWord['equivalents'];

export type WordData =
	| {
			is_success: true;
			word: string;
			translations: Equivalents;
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
		const word = today_word.name;
		const translations = today_word.equivalents;

		const size = (() => {
			const len = today_word.name.length;
			return len < 10 ? 'text-5xl' : 'text-4xl';
		})();

		const body: Readonly<WordData> = {
			is_success: true,
			word,
			translations,
			dic_url,
			pron,
			size
		};

		return json(body, { headers });
	} catch (e: unknown) {
		console.error(e);
		if (e instanceof Error) {
			error(500, e);
		} else if (e instanceof Response) {
			error(e.status, { message: e.statusText });
		} else {
			error(500, { message: `${e}` });
		}
	}
};
