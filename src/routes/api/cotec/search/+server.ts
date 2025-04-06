import { parseToJSON, type CotecContent } from "$lib/modules/fetching";
import { getRndInt } from "$lib/modules/util.js";
import { error, json } from "@sveltejs/kit";

const { contents } = await parseToJSON();

export const GET = async ({ url }) => {
    console.log('receive GET request');
    const index = Number.parseInt(url.searchParams.get('index') ?? '');

    let content: CotecContent | undefined;

    if (!Number.isFinite(index)) {
        content = contents[getRndInt(0, contents.length)];

    } else if (index >= 0 && index < contents.length) {
        content = contents[index];

    } else {
        error(404, { message: 'noLanguageFound' });
    }

    const headers = {
        'Content-Type': 'application/json',
    } as const;

    return json(content, { headers });
};


