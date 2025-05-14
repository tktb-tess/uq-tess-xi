import type { Cotec } from '$lib/modules/fetching';
import { getRndInt } from '$lib/modules/util.js';
import { error, json } from '@sveltejs/kit';

export const GET = async ({ url, fetch: svFetch }) => {
	console.log('receive GET request');
	const fetch_url = `https://tktb-tess.github.io/cotec-json-data/parsed-from-conlinguistics-wiki-list.ctc.json`;
	const resp = await svFetch(fetch_url);
	if (!resp.ok) error(resp.status);
	const { contents } = (await resp.json()) as Cotec;
	const index = Number.parseInt(url.searchParams.get('index') ?? '');

	const content = (() => {
		if (!Number.isFinite(index)) {
			return contents[getRndInt(0, contents.length)];
		} else if (index >= 0 && index < contents.length) {
			return contents[index];
		} else {
			error(404, { message: 'noLanguageFound' });
		}
	})();

	const headers = {
		'Content-Type': 'application/json'
	} as const;

	return json(content, { headers });
};
