import { error, text } from '@sveltejs/kit';

export const GET = async ({ params, fetch: svFetch }) => {
	const headers = {
		'Content-Type': 'text/plain; charset=utf-8'
	} as const;

	const path = (() => {
		switch (params.fontName) {
			case 'Inter': {
				return '/woff2/OFL_Inter.txt';
			}
			case 'CharisSIL': {
				return '/woff2/OFL_CharisSIL.txt';
			}
			case 'FONTLOG': {
				return '/woff2/FONTLOG.txt';
			}
			default: {
				error(404, { message: 'FileNotFound' });
			}
		}
	})();

	const resp = await svFetch(path);
	if (!resp.ok) error(resp.status);
	const body = await resp.text();

	return text(body, { headers });
};
