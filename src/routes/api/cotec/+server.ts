import { parseToJSON } from "$lib/modules/fetching";

const allowed_origins = [
    'https://conlang-gacha.vercel.app',
    'http://localhost:5173',
] as const;

export const GET = async ({ url, request, setHeaders }) => {
    console.log('receive GET request at /cotec');

    const origin = request.headers.get('Origin');

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
