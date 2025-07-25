import { error, json } from '@sveltejs/kit';
import { getRandPrimeByRange } from '$lib/modules/util.js';

export type Primes = {
	p: string;
	q: string;
};

export const GET = async ({ url }) => {
	const params = url.searchParams;
	const LIMIT = 1n << 64n;

	const min = (() => {
		const pre = params.get('min');
		if (!pre) error(400);
		const min = BigInt(pre);
		if (min < 0n || min > LIMIT) error(400);
		return min;
	})();

	const max = (() => {
		const pre = params.get('max');
		if (!pre) error(400);
		const max = BigInt(pre);
		if (max < 0n || max > LIMIT) error(400);
		return max;
	})();

	try {
		const p = getRandPrimeByRange(min, max);
		const q = getRandPrimeByRange(min, max);
		const headers = {
			'Content-Type': 'application/json'
		} as const;

		const body: Primes = {
			p: p.toString(),
			q: q.toString()
		};

		return json(body, { headers });
	} catch (e) {
		if (e instanceof Error) {
			error(500, { message: e.stack || `${e}` });
		} else {
			error(500);
		}
	}
};
