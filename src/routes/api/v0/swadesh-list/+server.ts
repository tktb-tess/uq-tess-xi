import { error, json } from '@sveltejs/kit';
import Papa from 'papaparse';

export type SwadeshList =
	| {
			success: true;
			value: string[][];
	  }
	| {
			success: false;
			status: number;
			message: string;
	  };

export type MaybePromise<T> = T | Promise<T>;

export const GET = async ({ fetch: svFetch }) => {
	console.log('received GET request at /swadesh-list');
	const url =
		'https://script.google.com/macros/s/AKfycbwAr_bYLJIm-nZlOdFl9y1V3ZipMMg_2XHFel-p0gqnLfiLnRwSMqbRn-h4RAEjClAK/exec';

	const resp = await svFetch(url, { method: 'GET' });
	if (!resp.ok) {
		error(resp.status);
	}

	const csvStr = await resp.text();

	const parsed = (() => {
		const pre = Papa.parse(csvStr, { header: false }).data as string[][];
		return pre.map((row) => {
			return row.map((s) => s.replace(/;/, ','));
		});
	})();

	const headers = {
		'Content-Type': 'application/json'
	} as const;

	const body: SwadeshList = {
		success: true,
		value: parsed
	};
	return json(body, { headers });
};
