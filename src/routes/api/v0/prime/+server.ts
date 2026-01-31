import { getRandPrimeByRange } from '@tktb-tess/util-fns';
import { error, isHttpError, json } from '@sveltejs/kit';
import * as z from 'zod';

export type Primes = {
  p: string;
  q: string;
};

const LIMIT = 1n << 64n;

const paramSchema = z.coerce.bigint().gte(0n).lte(LIMIT);

export const GET = async ({ url }) => {
  const params = url.searchParams;

  try {
    const min = (() => {
      const pre = params.get('min');
      return paramSchema.parse(pre);
    })();

    const max = (() => {
      const pre = params.get('max');
      return paramSchema.parse(pre);
    })();
    const p = getRandPrimeByRange(min, max);
    const q = getRandPrimeByRange(min, max);

    const body: Primes = {
      p: p.toString(),
      q: q.toString(),
    };

    return json(body);
  } catch (e) {
    if (isHttpError(e)) {
      error(e.status, e.body);
    } else if (e instanceof z.ZodError) {
      const { name, issues } = e;
      const message = z.prettifyError(e);
      const err = {
        name,
        issues,
        message,
      } as const;
      return json(err, { status: 400 });
    } else if (e instanceof Error) {
      console.error(e.name, e.message);
      error(500, { message: `${e.name}: ${e.message}` });
    } else {
      error(500, { message: 'Unidentified error' });
    }
  }
};
