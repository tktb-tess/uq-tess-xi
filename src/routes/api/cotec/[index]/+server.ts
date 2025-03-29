import { parseToJSON } from "$lib/fetching";
import { getRndInt } from "$lib/util.js";
import { error } from "@sveltejs/kit";

const [, contents] = await parseToJSON();

export const GET = async ({ params }) => {
    console.log('receive GET request');

    if (params.index === 'random') {
        const rand = getRndInt(0, contents.length);
        const body = new Blob([JSON.stringify(contents[rand])], { type: 'application/json' });
        
        return new Response(body);
    } else {
        const index = Number.parseInt(params.index);
        if (index >= 0 && index < contents.length) {
            const body = new Blob([JSON.stringify(contents[index])], { type: 'application/json' });

            return new Response(body);
        } else {
            console.log('404 Not Found');
            error(404, { message: 'Not Found' });
        }
    }
};