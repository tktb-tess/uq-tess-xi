import RSA from "$lib/rsa";

export const GET = ({ url }) => {

    const bit_len = Number.parseInt(url.searchParams.get('bits') ?? '') | 0;
    const cond = bit_len > 0 && bit_len < 1025;

    const rsa = new RSA(cond ? bit_len : 256);

    const body = new Blob([JSON.stringify(rsa)], { type: 'application/json' });
    
    return new Response(body);
};