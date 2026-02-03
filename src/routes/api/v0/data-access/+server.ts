import { REDIS_URL } from '$env/static/private';
import { redisKeys } from '$lib/types/decl';
import { error, isHttpError, json } from '@sveltejs/kit';
import { createClient } from 'redis';

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': 'https://www.tktb-tess.dev',
} as const;

export const GET = async () => {
  const client = createClient({ url: REDIS_URL });
  try {
    await client.connect();
    const tasks = Object.entries(redisKeys).map(async ([key, value]) => {
      const data = await client.get(value);
      if (!data) error(404);
      return [key, JSON.parse(data) as unknown] as const;
    });
    const body = await Promise.all(tasks).then((b) => Object.fromEntries(b));

    return json(body, { headers });
  } catch (e) {
    if (isHttpError(e)) {
      error(e.status, e.body);
    } else if (e instanceof Error) {
      error(500, { message: `${e.name}: ${e.message}` });
    } else {
      error(500, { message: 'Unidentified error' });
    }
  } finally {
    await client.close();
  }
};
