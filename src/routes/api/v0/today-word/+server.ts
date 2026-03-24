import { json } from '@sveltejs/kit';
import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';
import type { WordData } from '$lib/types/decl';
import { ZpDIC } from '@tktb-tess/my-zod-schema';
import { redisKeys } from '$lib/types/decl';
import * as z from 'zod';
import { err, ResultAsync } from 'neverthrow';
import { safeParseAndValidate, createErrHandler } from '$lib/modules/util';
import { NamedError } from '@tktb-tess/util-fns';

export const GET = async () => {
  const client = createClient({ url: REDIS_URL });
  try {
    await client.connect();

    const result = await ResultAsync.fromPromise(
      client.get(redisKeys.todayWord),
      createErrHandler('RedisError', 'failed to load today-word from redis'),
    ).andThen((word) => {
      if (!word) {
        return err(new NamedError('RedisError', 'failed to load today-word from redis'));
      }
      return safeParseAndValidate(ZpDIC.wordSchema, word);
    });

    if (result.isErr()) {
      const e = result.error;

      if (e instanceof z.ZodError) {
        const err: App.Error = {
          name: e.name,
          message: z.prettifyError(e),
          cause: z.flattenError(e),
        };
        return json(err, { status: 500 });
      } else {
        const { name, message } = e;
        const err: App.Error = {
          name,
          message,
        };
        return json(err, { status: 500 });
      }
    }

    const todayWord = result.value;

    // const query = `?kind=exact&number=${todayWord.number}`;
    const query = new URLSearchParams({
      kind: 'exact',
      number: `${todayWord.number}`,
    });

    const dicUrl = `https://zpdic.ziphil.com/dictionary/633?${query}`;

    const isLarge = (() => {
      const len = todayWord.name.length;
      return len < 10;
    })();

    const body: WordData = {
      word: todayWord.name,
      translations: todayWord.equivalents,
      dicUrl,
      pron: todayWord.pronunciation,
      isLarge,
    };

    return json(body);
  } finally {
    await client.close();
  }
};
