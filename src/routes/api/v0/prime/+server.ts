import { getRandPrimeByRange } from '@tktb-tess/util-fns';
import { error, json } from '@sveltejs/kit';

export type Primes = {
	p: string;
	q: string;
};
const LIMIT = 1n << 64n;
export const GET = async ({ url }) => {
	const params = url.searchParams;

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
			error(500, { message: `${e.name}: ${e.message}` });
		} else {
			error(500);
		}
	}
};
