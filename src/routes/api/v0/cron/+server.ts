import { error, isHttpError, json } from '@sveltejs/kit';
import { ZPDIC_API_KEY, REDIS_URL, CRON_SECRET } from '$env/static/private';
import { redisKeys } from '$lib/types/decl';
import { getRndInt } from '@tktb-tess/util-fns';
import { ZpDIC } from '@tktb-tess/my-zod-schema';
import { createClient } from 'redis';

type ZpDICQuery = {
  readonly text: string;
  readonly skip?: number;
  readonly limit?: number;
};

export const GET = async ({ request: req, fetch }) => {
  const zpdicApiRt = `https://zpdic.ziphil.com/api/v0/dictionary/633/words`;

  const zpdicReqHeaders = {
    'X-Api-Key': ZPDIC_API_KEY,
  } as const;

  const fetchZpDICAPI = async (params: ZpDICQuery): Promise<ZpDIC.MWWEResponse> => {
    const pa = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      switch (typeof value) {
        case 'string': {
          pa.set(key, value);
          break;
        }
        case 'number': {
          pa.set(key, value.toString());
          break;
        }
        default: {
          break;
        }
      }
    }

    const resp = await fetch(`${zpdicApiRt}?${pa.toString()}`, {
      method: 'GET',
      headers: zpdicReqHeaders,
    });

    if (!resp.ok) {
      error(500, { name: 'FetchError', message: 'cannot access ZpDIC API' });
    }

    return resp.json().then((j: unknown) => ZpDIC.mwweResponseSchema.parse(j));
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

  // authorization
  if (req.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) {
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
      await client.set(redisKeys.swadeshVae, '');
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
      if (!json) error(404, { name: 'NotFoundError', message: `'${value}' was not found` });
      return [key, JSON.parse(json) as unknown] as const;
    });

    const stored = await Promise.all(tasks).then((entries) => Object.fromEntries(entries));

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
