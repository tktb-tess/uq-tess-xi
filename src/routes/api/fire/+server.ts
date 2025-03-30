import { getRandPrime } from '$lib/util.js';
import { Buffer } from 'node:buffer';

const getPrimeB64 = (bit_len: number) => {

    let p = getRandPrime(bit_len).toString(16);
    if (p.length & 1) p = '0' + p;

    return Buffer.from(p, 'hex').toString('base64');

};

export const GET = ({ url }) => {
    console.log('receive GET request at fire');

    const headers = new Headers({
        'Access-Control-Allow-Origin': '*',
    });

    const bit_len = (() => {
        const bit_len = Number.parseInt(url.searchParams.get('length') ?? '');
        const cond = bit_len >= 2 && bit_len < 257;
        return cond ? bit_len : 32;
    })();

    const num = (() => {
        const num = Number.parseInt(url.searchParams.get('number') ?? '');
        const cond = num >= 1 && num < 51;
        return cond ? num : 1;
    })();

    const res: string[] = [];

    for (let i = 0; i < num; i++) {
        res.push(getPrimeB64(bit_len));
    }

    const body = new Blob([JSON.stringify({ primes: res })], { type: 'application/json' });
    
    return new Response(body, { headers });
};