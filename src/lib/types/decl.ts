import otm_json from '../assets/vl-ja.otm.json';
import type { Equivalent } from './zpdic-api';

export type ZpDICWord = (typeof otm_json.words)[0];
export type ZpDICExample = (typeof otm_json.examples)[0];
export type ZpDICConf = typeof otm_json.zpdicOnline;
export type ZpDICOTM = typeof otm_json;

export type SwadeshList = {
  readonly value: ReadonlyArray<ReadonlyArray<string>>;
};

export type Result<T> =
  | {
      readonly success: true;
      readonly result: T;
    }
  | {
      readonly success: false;
      readonly status?: number;
      readonly message: string;
      readonly stack?: string;
      readonly cause?: unknown;
      readonly name?: string;
    };

export type WordData = {
  readonly word: string;
  readonly translations: readonly Readonly<Equivalent>[];
  readonly dicUrl: string;
  readonly pron: string;
  readonly size: 'text-5xl' | 'text-4xl';
};

export type PromiseState = 'pending' | 'fulfilled' | 'rejected';

export const redisKeys = {
  todayWord: 'today-word',
  swadeshVae: 'swadesh-list-vae',
  rsaKey: 'rsa-key',
  lastUpdate: 'last-update',
} as const;

export type RedisKeys = typeof redisKeys;
