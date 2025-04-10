import { createClient } from "redis";
import { REDIS_URL } from "$env/static/private";
import type { ZpDICAPIResponseWord } from "$lib/modules/zpdic";

export const prerender = false;

export const load = async () => {
	const redis = await createClient({ url: REDIS_URL }).connect();
	const today_word = await redis.json.get('today-word') as ZpDICAPIResponseWord;
	const query = `?kind=exact&number=${today_word.number}`;
	const dic_url = `https://zpdic.ziphil.com/dictionary/633${query}`;

	const pron = today_word.pronunciation;

	const size = (() => {
		const len = today_word.name.length;
		return len < 10 ? 'text-5xl' : 'text-4xl';
	})();
	console.log(today_word);
	return { today_word, dic_url, pron, size } as const;
};
