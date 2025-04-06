import { Buffer } from 'node:buffer';
import { TZDate } from '@date-fns/tz';
import vaes_otm_json from '$lib/assets/vl-ja.otm.json';
export const prerender = false;

export const load = async () => {
    const date = TZDate.tz('Asia/Tokyo');
    const encoded = Buffer.from(date.toDateString());
    const hash = await crypto.subtle.digest('SHA-256', encoded);
    const rand = new Uint32Array(hash, 0, 1)[0];
    const length = vaes_otm_json.words.length;
    const word = vaes_otm_json.words[rand % length];

    const query = `?text=${encodeURI(word.entry.form)}&mode=name&type=exact`;
    const dic_url = `https://zpdic.ziphil.com/dictionary/vaessenzlaendiskj${query}`;

    const pron = word.contents.find((cont) => cont.title === 'Pronunciation')?.text;

    return { word, dic_url, pron };
};