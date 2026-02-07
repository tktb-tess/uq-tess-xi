import { ZpDIC } from '@tktb-tess/my-zod-schema';
import * as z from 'zod';

export type SwadeshList = {
  readonly value: ReadonlyArray<ReadonlyArray<string>>;
};

export type LoadResult<T> =
  | {
      readonly success: true;
      readonly result: T;
    }
  | {
      readonly success: false;
      readonly name: string;
      readonly message: string;
      readonly status?: number;
      readonly stack?: string;
      readonly cause?: unknown;
    };

export const wordDataSchema = z
  .object({
    word: z.string(),
    translations: ZpDIC.equivalentSchema.readonly().array().readonly(),
    dicUrl: z.string(),
    pron: z.string(),
    size: z.union([z.literal('text-4xl'), z.literal('text-5xl')]),
  })
  .readonly();

export type WordData = z.infer<typeof wordDataSchema>;

export type PromiseState = 'pending' | 'fulfilled' | 'rejected';

export const redisKeys = {
  todayWord: 'today-word',
  swadeshVae: 'swadesh-list-vae',
  lastUpdate: 'last-update',
} as const;

export type RedisKeys = typeof redisKeys;
