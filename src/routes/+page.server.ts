import { Buffer } from 'node:buffer';
import vaesOtmJson from '$lib/assets/vl-ja.otm.json';
export const prerender = false;

export const load = async () => {
    const date = 'test';
    
    const encoded = Buffer.from(date);
    const hash = await crypto.subtle.digest('SHA-256', encoded);
    const rand = new Uint32Array(hash, 0, 1)[0];
    const length = vaesOtmJson.words.length;
    const word = vaesOtmJson.words[rand % length];

    return { word };
};