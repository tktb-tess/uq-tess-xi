import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';
import type { WordData, Result } from '$lib/types/decl';
import { zpdicWordSchema } from '$lib/types/zpdic-api';
import { redisKeys } from '$lib/types/decl';
import z from 'zod';

export const prerender = false;

export const load = async (): Promise<Result<WordData>> => {
  const client = await createClient({ url: REDIS_URL }).connect();
  try {
    const result = await client.get(redisKeys.todayWord).then((word) => {
      if (!word) throw Error('failed to load today-word from redis');

      return zpdicWordSchema.safeParse(JSON.parse(word));
    });

    if (!result.success) {
      return {
        name: result.error.name,
        success: false,
        message: z.prettifyError(result.error),
        cause: result.error.issues,
      };
    }

    const todayWord = result.data;

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
  } catch (e) {
    if (e instanceof Error) {
      return {
        success: false,
        name: e.name,
        message: e.message,
        stack: e.stack,
      };
    } else {
      return {
        success: false,
        name: 'UnidentifiedError',
        message: 'unidentified error',
        cause: e,
      };
    }
  } finally {
    await client.close();
  }
};
