import { parseToJSON } from "$lib/fetching";
const [metadata, contents] = await parseToJSON();

export const GET = async () => {
    console.log('receive GET request');

    const body = new Blob([JSON.stringify({ metadata, contents })], { type: 'application/json' });

    return new Response(body);
};