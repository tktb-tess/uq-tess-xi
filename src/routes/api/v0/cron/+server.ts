import { error, isHttpError, json } from '@sveltejs/kit';
import { ZPDIC_API_KEY, REDIS_URL, CRON_SECRET } from '$env/static/private';
import { redisKeys } from '$lib/types/decl';
import { getRndInt } from '@tktb-tess/util-fns/random';
import { getRandPrimeByBitLength } from '@tktb-tess/util-fns/baillie_psw';
import * as ZpDIC from '@tktb-tess/my-zod-schema/zpdic';
import { createClient } from 'redis';

export const GET = async ({ request: req, fetch }) => {
  const zpdicApiRt = `https://zpdic.ziphil.com/api/v0/dictionary/633/words`;

  const zpdicReqHeaders = {
    'X-Api-Key': ZPDIC_API_KEY,
  } as const;

  const fetchZpDICAPI = async (
    text: string,
    skip?: number,
    limit?: number,
  ): Promise<ZpDIC.MWWEResponse> => {
    const prms = new URLSearchParams();

    prms.set('text', text);
    if (skip != null) prms.set('skip', skip.toString());
    if (limit != null) prms.set('limit', limit.toString());

    const resp = await fetch(`${zpdicApiRt}?${prms.toString()}`, {
      method: 'GET',
      headers: zpdicReqHeaders,
    });

    if (!resp.ok) {
      error(500, { name: 'FetchError', message: 'cannot access ZpDIC API' });
    }

    return resp.json().then((j: unknown) => ZpDIC.mwweResponseSchema.parse(j));
  };

  const getTotal = async () => {
    const json = await fetchZpDICAPI('', 0, 1);
    return json.total;
  };

  const getWord = async (index: number) => {
    return fetchZpDICAPI('', index, 1);
  };

  const _getTodayWord = async () => {
    const total = await getTotal();
    console.log('total: ', total);
    const idx = getRndInt(0, total);
    console.log('index: ', idx);
    const todayWord = (await getWord(idx)).words.at(0);

    if (todayWord == null) {
      throw TypeError('`todayWord` is undefined');
    }

    return todayWord;
  };

  // authorization
  if (req.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) {
    error(401);
  }

  const client = createClient({ url: REDIS_URL });

  try {
    // connect to Redis
    await client.connect();

    const getTodayWord = async () => {
      const result = await _getTodayWord();
      return JSON.stringify(result);
    };

    const getTodayPRP = async () => {
      await new Promise<void>((res) => setTimeout(() => res(), 0));
      const prime = getRandPrimeByBitLength(256, true);
      return JSON.stringify(prime.toString());
    };

    const getLastUpdate = async () => {
      return JSON.stringify(new Date().toISOString());
    };

    await Promise.all([getTodayWord(), getTodayPRP(), getLastUpdate()]).then(
      async ([word, prp, lastUpdate]) => {
        await client.set(redisKeys.todayWord, word);
        await client.set(redisKeys.todayPRP, prp);
        await client.set(redisKeys.lastUpdate, lastUpdate);
      },
    );

    // check
    const tasks = Object.entries(redisKeys).map(async ([key, value]) => {
      const json = await client.get(value);
      if (!json) error(404, { name: 'NotFoundError', message: `'${value}' was not found` });
      return [key, JSON.parse(json) as unknown] as const;
    });

    const stored = Object.fromEntries(await Promise.all(tasks));

    console.log(stored);

    return json(stored);
  } catch (e) {
    if (isHttpError(e)) {
      error(e.status, { name: 'HttpError', message: e.body.message });
    } else if (e instanceof Error) {
      const { name, message } = e;
      const cause = `${e.cause}` || undefined;
      error(500, { name, message, cause });
    } else {
      error(500, { name: 'UnidentifiedError', message: 'unidentified error' });
    }
  } finally {
    await client.close();
  }
};
