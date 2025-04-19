import { createClient } from "redis";
import { REDIS_URL } from "$env/static/private";
import type { ZpDICAPIResponseWord } from "$lib/modules/zpdic";

export const prerender = false;

type WordData = {
	is_success: true;
	today_word: ZpDICAPIResponseWord;
	dic_url: string;
	pron: string;
	size: 'text-5xl' | 'text-4xl';
} | {
	is_success: false;
	error: string;
};


export const load = async (): Promise<Readonly<WordData>> => {
	try {
		const redis = await createClient({ url: REDIS_URL }).connect();
		const today_word = await redis.json.get('today-word') as ZpDICAPIResponseWord;
		const query = `?kind=exact&number=${today_word.number}`;
		const dic_url = `https://zpdic.ziphil.com/dictionary/633${query}`;
	
		const pron = today_word.pronunciation;
	
		const size = (() => {
			const len = today_word.name.length;
			return len < 10 ? 'text-5xl' : 'text-4xl';
		})();
		
		return { is_success: true, today_word, dic_url, pron, size } as const;
	} catch (e: unknown) {
		console.error(e);
		if (e instanceof Error) {
			return { is_success: false, error: e.message } as const;
		} else if (e instanceof Response) {
			return { is_success: false, error: `${e.status}: ${e.statusText}` } as const;
		} else {
			return { is_success: false, error: `${e}` } as const;
		}
	}
};
