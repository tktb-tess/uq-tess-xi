import { error, text } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";


export const GET = async ({ params, fetch: f }: RequestEvent) => {
    const headers = {
        'Content-Type': 'text/plain; charset=utf-8',
    };

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
                error(404, { message: 'requested font name was not found' });
            }
        }
    })();

    const resp = await f(path);
    if (!resp.ok) error(resp.status);
    const body = await resp.text();

    return text(body, { headers });
};