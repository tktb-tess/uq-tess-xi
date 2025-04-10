import { error, json } from '@sveltejs/kit';
import { ZPDIC_API_KEY, REDIS_URL, CRON_SECRET } from '$env/static/private';
import type { ZpDICAPIWordsResponse } from '$lib/modules/zpdic.js';
import { getRndInt } from '$lib/modules/util';
import { createClient } from 'redis';

const api_rt = `https://zpdic.ziphil.com/api/v0/dictionary/633/words`;
const headers = {
    'X-Api-Key': ZPDIC_API_KEY
} as const;

const fetchZpDICAPI = async (query: string) => {
    const resp = await fetch(api_rt + query, { method: 'GET', headers });
    if (!resp.ok) {
        throw resp;
    }
    return resp.json() as Promise<ZpDICAPIWordsResponse>;
};

const getTotal = async () => {
    const query = `?text=`;
    const json = await fetchZpDICAPI(query);
    return json.total;
};

const getWord = async (index: number) => {
    const query = `?text=&limit=1&skip=${index}`;
    return fetchZpDICAPI(query);
};


export const GET = async ({ request }) => {
    /** authorization */
    if (request.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) {
        error(401, { message: 'Unauthorized' });
    }

    /** connect to Redis */
    const redis = await createClient({ url: REDIS_URL }).connect();

    try {
        const total = await getTotal();
        const today_word = (await getWord(getRndInt(0, total))).words[0];
        await redis.json.set('today-word', '$', today_word);

        /** check */
        const stored = await redis.json.get('today-word');
        console.log(stored);
        return json(today_word);

    } catch (e: unknown) {
        if (e instanceof Response) {
            error(e.status);
        } else if (e instanceof Error) {
            error(500, { message: e.message });;
        } else {
            error(500);
        }
    }
};