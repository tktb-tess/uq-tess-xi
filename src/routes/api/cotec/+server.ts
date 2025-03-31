import { parseToJSON } from "$lib/fetching";


const allowed_origins = [
    'https://conlang-gacha.vercel.app',
    'http://localhost:5173',
    'https://www.google.com',
] as const;

export const GET = async ({ url, request, setHeaders }) => {
    console.log('receive GET request');

    const origin = request.headers.get('Origin')!;

    allowed_origins.forEach((allowed) => {
        if (allowed === origin) {
            setHeaders({
                'Access-Control-Allow-Origin': origin,
            });
        }
    });

    const [metadata, contents] = await parseToJSON();

    const err = url.searchParams.get('forbidden');

    if (err) return new Response('!', { status: 403 });

    const body = new Blob([JSON.stringify({ metadata, contents })], { type: 'application/json' });
    
    return new Response(body);
};