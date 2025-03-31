import { parseToJSON } from "$lib/fetching";
const [metadata, contents] = await parseToJSON();

export const GET = async ({ url }) => {
    console.log('receive GET request');

    const headers = new Headers({
        'Access-Control-Allow-Origin': 'https://conlang-gacha.vercel.app, http://localhost:5173',
    });

    const err = url.searchParams.get('forbidden');

    if (err) return new Response('!', { headers, status: 403 });

    const body = new Blob([JSON.stringify({ metadata, contents })], { type: 'application/json' });
    
    return new Response(body, { headers });
};