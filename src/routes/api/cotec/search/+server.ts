import { parseToJSON, type CotecContent } from "$lib/fetching";
import { getRndInt } from "$lib/util.js";
import { error } from "@sveltejs/kit";

const [, contents] = await parseToJSON();

export const GET = async ({ url }) => {
    console.log('receive GET request');
    const index = Number.parseInt(url.searchParams.get('index') ?? '');

    let content: CotecContent | undefined;

    if (!Number.isFinite(index)) {
        content = contents[getRndInt(0, contents.length)];
    } else if (index >= 0 && index < contents.length) {
        content = contents[index];
    } else {
        console.log('404 not found');
        error(404, { message: 'no langs found' });
    }

    const body = new Blob([JSON.stringify(content)], { type: 'application/json' });

    return new Response(body);
};