import { parseToJSON } from "$lib/fetching";


export const GET = async () => {
    console.log('receive GET request');
    const [metadata, contents] = await parseToJSON();
    
    const ctc = {
        metadata,
        contents,
    }

    const body = new Blob([JSON.stringify(ctc)], { type: 'application/json' });

    return new Response(body);
};