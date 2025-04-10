import { Buffer } from 'node:buffer';
import { TZDate } from '@date-fns/tz';
import vaes_otm_json from '$lib/assets/vl-ja.otm.json';

export const prerender = false;

export const load = async () => {
	const date = TZDate.tz('Asia/Tokyo');
	const encoded = Buffer.from(date.toDateString());
	const rand = new Uint32Array(await crypto.subtle.digest('SHA-256', encoded), 0, 1)[0];
	const length = vaes_otm_json.words.length;
	const today_word = vaes_otm_json.words[rand % length];

	const query = `?kind=exact&number=${today_word.entry.id}`;
	const dic_url = `https://zpdic.ziphil.com/dictionary/633${query}`;

	const pron = today_word.contents.find((cont) => cont.title === 'Pronunciation')?.text;

	const size = (() => {
		const len = today_word.entry.form.length;
		return len < 10 ? 'text-5xl' : 'text-4xl';
	})();

	return { today_word, dic_url, pron, size } as const;
};
