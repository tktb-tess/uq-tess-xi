import { error, json } from '@sveltejs/kit';
import Papa from 'papaparse';

export type SwadeshList = [string, string, string, string][];

export const GET = async ({ fetch: svFetch }) => {
    console.log('received GET request at /swadesh-list');
	const url =
		'https://script.google.com/macros/s/AKfycbwAr_bYLJIm-nZlOdFl9y1V3ZipMMg_2XHFel-p0gqnLfiLnRwSMqbRn-h4RAEjClAK/exec';

    const resp = await svFetch(url, { method: 'GET' });
    if (!resp.ok) {
        error(resp.status, { message: resp.statusText });
    }

    const csvStr = await resp.text();
    const parsed_ = Papa.parse(csvStr, { header: false }).data as SwadeshList;
    const parsed = parsed_.map((row) => {
        return row.map((s) => s.replace(/;/, ','));
    });

    const headers = {
        'Content-Type': 'application/json'
    } as const;

    return json(parsed, { headers });
};
