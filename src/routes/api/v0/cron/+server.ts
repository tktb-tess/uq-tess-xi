import { error, isHttpError, json } from '@sveltejs/kit';
import { ZPDIC_API_KEY, REDIS_URL, CRON_SECRET } from '$env/static/private';
import { redisKeys } from '$lib/types/decl';
import { getRndInt } from '@tktb-tess/util-fns';
import { ZpDIC } from '@tktb-tess/my-zod-schema';
import { createClient } from 'redis';
import Papa from 'papaparse';

type ZpDICQuery = {
  readonly text: string;
  readonly skip?: number;
  readonly limit?: number;
};

export const GET = async ({ request, fetch: svFetch }) => {
  const zpdicApiRt = `https://zpdic.ziphil.com/api/v0/dictionary/633/words`;
  const vaeSwadeshUrl =
    'https://script.google.com/macros/s/AKfycbwAr_bYLJIm-nZlOdFl9y1V3ZipMMg_2XHFel-p0gqnLfiLnRwSMqbRn-h4RAEjClAK/exec';
  const zpdicReqHeaders = {
    'X-Api-Key': ZPDIC_API_KEY,
  } as const;

  const fetchZpDICAPI = async (params: ZpDICQuery): Promise<ZpDIC.MWWEResponse> => {
    const pa = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      if (typeof value === 'string') {
        pa.set(key, value);
      } else if (typeof value === 'number') {
        pa.set(key, value.toString());
      }
    }

    const resp = await svFetch(`${zpdicApiRt}?${pa.toString()}`, {
      method: 'GET',
      headers: zpdicReqHeaders,
    });

    if (!resp.ok) {
      error(404, { message: 'cannotAccessZpdicApi' });
    }

    return resp.json().then((j) => ZpDIC.mwweResponseSchema.parse(j));
  };

  const getTotal = async () => {
    const query = {
      text: '',
    };
    const json = await fetchZpDICAPI(query);
    return json.total;
  };

  const getWord = async (index: number) => {
    const query: ZpDICQuery = {
      text: '',
      limit: 1,
      skip: index,
    };
    return fetchZpDICAPI(query);
  };

  const getTodayWord = async () => {
    const total = await getTotal();
    return (await getWord(getRndInt(0, total))).words.at(0);
  };

  const getSwadeshListVae = async () => {
    const controller = new AbortController();

    const id = setTimeout(() => controller.abort(), 20000);

    const resp = await svFetch(vaeSwadeshUrl, { method: 'GET', signal: controller.signal });

    clearTimeout(id);

    if (!resp.ok) {
      throw Error('cannotAccessSwadeshListVae');
    }

    const pre = await resp
      .text()
      .then((csvStr) => Papa.parse<string[]>(csvStr, { header: false }).data);

    return pre.map((row) => {
      return row.map((s) => s.replaceAll(';', ',').trim());
    });
  };

  // authorization
  if (request.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) {
    error(401);
  }

  const client = createClient({ url: REDIS_URL });

  try {
    // connect to Redis
    await client.connect();

    const taskTodayWord = async () => {
      const result = await getTodayWord();
      if (!result) throw Error('todayWord is undefined');
      await client.set(redisKeys.todayWord, JSON.stringify(result));
    };

    const taskSwadeshVae = async () => {
      const result = await getSwadeshListVae();
      await client.set(redisKeys.swadeshVae, JSON.stringify(result));
    };

    const taskLastUpdate = async () => {
      const result = new Date().toISOString();
      await client.set(redisKeys.lastUpdate, JSON.stringify(result));
    };

    await Promise.allSettled([taskTodayWord(), taskSwadeshVae(), taskLastUpdate()]).then((res) => {
      res.filter((r) => r.status === 'rejected').forEach((r) => console.error(r.reason));
    });

    // check
    const tasks = Object.entries(redisKeys).map(async ([key, value]) => {
      const json = await client.get(value);
      if (!json) error(404, { message: 'dataNotFound' });
      return [key, JSON.parse(json) as unknown] as const;
    });

    const stored = await Promise.all(tasks).then((entries) => Object.fromEntries(entries));

    console.log(stored);

    return json(stored);
  } catch (e) {
    if (isHttpError(e)) {
      error(e.status, { message: e.body.message });
    } else if (e instanceof Error) {
      error(500, { message: `${e.name}: ${e.message}` });
    } else {
      error(500, { message: 'unidentifiedError' });
    }
  } finally {
    await client.close();
  }
};
