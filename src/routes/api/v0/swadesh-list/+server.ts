import { error, isHttpError, json } from '@sveltejs/kit';
import Papa from 'papaparse';
import type { SwadeshList } from '$lib/types/decl';

export const GET = async ({ fetch: svFetch }) => {
	console.log('received GET request at /swadesh-list');

	try {
		const url =
			'https://script.google.com/macros/s/AKfycbwAr_bYLJIm-nZlOdFl9y1V3ZipMMg_2XHFel-p0gqnLfiLnRwSMqbRn-h4RAEjClAK/exec';
		
		const headers = {
			'Content-Type': 'application/json'
		} as const;

		const controller = new AbortController();
		const respPromise = svFetch(url, { method: 'GET', signal: controller.signal });
		const timeoutFunc = setTimeout(() => controller.abort(), 10000);
		const resp = await respPromise;
		clearTimeout(timeoutFunc);

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

		const body: SwadeshList = {
			value: parsed
		};
		return json(body, { headers });
	} catch (e) {
		console.log(e);
		if (isHttpError(e)) {
			error(e.status);
		} else if (e instanceof DOMException && e.name === 'AbortError') {
			error(504);
		} else error(500);
	}
};
