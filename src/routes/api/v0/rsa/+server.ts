import { REDIS_URL } from '$env/static/private';
import RSA from '$lib/modules/rsa';
import { redisKeys } from '$lib/types/decl.js';
import { error, isHttpError, json } from '@sveltejs/kit';
import { createClient } from 'redis';

const headers = {
  'Content-Type': 'application/json',
} as const;

export const POST = async ({ request }) => {
  const client = await createClient({ url: REDIS_URL }).connect();
  try {
    const input = await request.text();
    if (!input) {
      error(400);
    }

    const rsa = await client.get(redisKeys.rsaKey).then((d) => {
      if (!d) error(404);
      return RSA.parse(d);
    });
    const encrypted = rsa.encrypt(input);

    const body = {
      input,
      encrypted,
    } as const;

    return json(body, { headers });
  } catch (e) {
    if (isHttpError(e)) {
      error(e.status, e.body);
    } else if (e instanceof Error) {
      const { message, name } = e;
      error(500, { message: `${name}: ${message}` });
    } else {
      error(500, { message: 'unidentifiedError' });
    }
  } finally {
    await client.close();
  }
};
