import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';
import type { WordData, LoadResult } from '$lib/types/decl';
import { zpdicWordSchema } from '$lib/types/zpdic-api';
import { redisKeys } from '$lib/types/decl';
import z from 'zod';
import { err, ResultAsync } from 'neverthrow';
import { NamedError, parseAndValidate } from '$lib/modules/util';

export const prerender = false;

export const load = async (): Promise<LoadResult<WordData>> => {
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
        return parseAndValidate(zpdicWordSchema, word);
      });

    if (result.isErr()) {
      const e = result.error;

      if (e instanceof z.ZodError) {
        return {
          name: e.name,
          success: false,
          message: z.prettifyError(e),
          cause: e.issues,
        };
      } else {
        const { name, message } = e;
        return {
          name,
          success: false,
          message,
        };
      }
    }

    const todayWord = result.value;

    const query = `?kind=exact&number=${todayWord.number}`;
    const dicUrl = `https://zpdic.ziphil.com/dictionary/633${query}`;

    const size = (() => {
      const len = todayWord.name.length;
      return len < 10 ? 'text-5xl' : 'text-4xl';
    })();

    return {
      success: true,
      result: {
        word: todayWord.name,
        translations: todayWord.equivalents,
        dicUrl,
        pron: todayWord.pronunciation,
        size,
      },
    };
  } finally {
    await client.close();
  }
};
