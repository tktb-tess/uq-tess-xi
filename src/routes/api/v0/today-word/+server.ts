import { json } from '@sveltejs/kit';
import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';
import type { WordData } from '$lib/types/decl';
import { ZpDIC } from '@tktb-tess/my-zod-schema';
import { redisKeys } from '$lib/types/decl';
import * as z from 'zod';
import { err, ResultAsync } from 'neverthrow';
import { NamedError, parseAndValidate } from '$lib/modules/util';

export const GET = async () => {
  const client = createClient({ url: REDIS_URL });
  try {
    const result = await ResultAsync.fromPromise(client.connect(), (e) => {
      if (e instanceof Error) {
        return NamedError.from('RedisError', e.message);
      }
      return NamedError.from('RedisError', 'cannot connect to database');
    })
      .andThen(() =>
        ResultAsync.fromPromise(client.get(redisKeys.todayWord), (e) => {
          if (e instanceof Error) {
            return NamedError.from('RedisError', e.message);
          }
          return NamedError.from('RedisError', 'failed to load today-word from redis');
        }),
      )
      .andThen((word) => {
        if (!word) {
          return err(NamedError.from('RedisError', 'failed to load today-word from redis'));
        }
        return parseAndValidate(ZpDIC.wordSchema, word);
      });

    if (result.isErr()) {
      const e = result.error;

      if (e instanceof z.ZodError) {
        const err = {
          name: e.name,
          message: z.prettifyError(e),
          cause: e.issues,
        };
        return json(err, { status: 500 });
      } else {
        const { name, message } = e;
        const err = {
          name,
          message,
        };
        return json(err, { status: 500 });
      }
    }

    const todayWord = result.value;

    const query = `?kind=exact&number=${todayWord.number}`;
    const dicUrl = `https://zpdic.ziphil.com/dictionary/633${query}`;

    const size = (() => {
      const len = todayWord.name.length;
      return len < 10 ? 'text-5xl' : 'text-4xl';
    })();

    const body: WordData = {
      word: todayWord.name,
      translations: todayWord.equivalents,
      dicUrl,
      pron: todayWord.pronunciation,
      size,
    };

    return json(body);
  } finally {
    await client.close();
  }
};
