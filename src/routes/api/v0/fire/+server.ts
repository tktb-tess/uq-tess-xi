import { getRandPrime } from '$lib/modules/util.js';
import { json } from '@sveltejs/kit';
import { Buffer } from 'node:buffer';

const getPrimeB64 = (bit_len: number) => {
	const p = (() => {
		const p = getRandPrime(bit_len).toString(16);
		return (p.length & 1) ? `0${p}` : p;
	})();

	return Buffer.from(p, 'hex').toString('base64');
};

export const GET = ({ url }) => {
	console.log('receive GET request at /fire');

	const bit_len = (() => {
		const bit_len = Number.parseInt(url.searchParams.get('length') ?? '');
		const cond = bit_len >= 2 && bit_len < 257;
		return cond ? bit_len : 32;
	})();

	const num = (() => {
		const num = Number.parseInt(url.searchParams.get('number') ?? '');
		const cond = num >= 1 && num < 51;
		return cond ? num : 1;
	})();

	const res: string[] = [];

	for (let i = 0; i < num; i++) {
		res.push(getPrimeB64(bit_len));
	}

	const headers = {
		'Content-Type': 'application/json'
	} as const;

	return json(res, { headers });
};
