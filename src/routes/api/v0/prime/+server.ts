import { error, json } from '@sveltejs/kit';
import { getRandPrime } from '$lib/modules/util.js';

export type Primes =
	| {
			success: true;
			p: string;
			q: string;
	  }
	| {
			success: false;
			status: number;
			message: string;
	  };

export const GET = async ({ url }) => {
	const params = url.searchParams;
	const LIMIT = 1n << 64n;
	
	const min = (() => {
		const pre = params.get('min');
		if (!pre) error(400);
		const min = BigInt(pre);
		if (min < 0n || min >= LIMIT) error(400, { message: 'outOfRange' });
		return min;
	})();

	const max = (() => {
		const pre = params.get('max');
		if (!pre) error(400);
		const max = BigInt(pre);
		if (max < 2n || max >= LIMIT) error(400, { message: 'outOfRange' });
		return max;
	})();

	const p = getRandPrime(min, max);
	const q = getRandPrime(min, max);
	const headers = {
		'Content-Type': 'application/json'
	} as const;

	const body: Primes = {
		success: true,
		p: p.toString(),
		q: q.toString()
	};

	return json(body, { headers });
};
