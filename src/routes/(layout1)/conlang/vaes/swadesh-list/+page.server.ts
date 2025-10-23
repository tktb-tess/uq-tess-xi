import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';
import { redisKeys, type LoadResult, type SwadeshList } from '$lib/types/decl';
import * as z from 'zod';
import { err, ResultAsync } from 'neverthrow';
import { parseAndValidate, NamedError } from '$lib/modules/util';
export const prerender = false;

const listSchema = z.string().array().array();

export const load = async (): Promise<LoadResult<SwadeshList>> => {
  const client = createClient({ url: REDIS_URL });
  try {
    const result = await ResultAsync.fromPromise(client.connect(), (e) => {
      if (e instanceof Error) {
        return NamedError.from('RedisError', e.message);
      }
      return NamedError.from('RedisError', 'failed to load swadeshlist-vae from redis');
    })
      .andThen(() =>
        ResultAsync.fromPromise(client.get(redisKeys.swadeshVae), (e) => {
          if (e instanceof Error) {
            return NamedError.from('RedisError', e.message);
          }
          return NamedError.from('RedisError', 'failed to load swadeshlist-vae from redis');
        }),
      )
      .andThen((swa) => {
        if (!swa) {
          return err(NamedError.from('RedisError', 'failed to load swadeshlist-vae from redis'));
        }

        return parseAndValidate(listSchema, swa);
      });

    if (result.isErr()) {
      const e = result.error;

      if (e instanceof z.ZodError) {
        return {
          success: false,
          name: e.name,
          message: z.prettifyError(e),
          cause: e.issues,
        };
      } else {
        const { name, message } = e;
        return {
          success: false,
          name,
          message,
        };
      }
    }

    const { value } = result;

    return {
      success: true,
      result: {
        value,
      },
    };
  } finally {
    await client.close();
  }
};
