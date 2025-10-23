import { Result, ok, err, ResultAsync } from 'neverthrow';
import * as z from 'zod';

type NamedError<EName extends string | symbol, TCause = undefined> = {
  readonly name: EName;
  readonly message: string;
  readonly cause?: TCause;
};

const NamedError = {
  from<EName extends string | symbol, TCause = undefined>(
    name: EName,
    message: string = '',
    cause?: TCause,
  ): NamedError<EName, TCause> {
    return {
      name,
      message,
      cause,
    };
  },
};

export { NamedError };

export const JSONSafeParse: (
  text: string,
  reviver?: (this: unknown, key: string, value: unknown) => unknown,
) => Result<unknown, NamedError<'ParseError'>> = Result.fromThrowable(JSON.parse, (e) => {
  if (e instanceof Error) {
    return NamedError.from('ParseError', e.message);
  }
  return NamedError.from('ParseError', 'failed to parse');
});

export const parseAndValidate = <TSchema extends z.ZodType>(schema: TSchema, json: string) => {
  return JSONSafeParse(json).andThen(
    (obj): Result<z.infer<TSchema>, z.ZodError<z.infer<TSchema>>> => {
      const r = schema.safeParse(obj);

      return r.success ? ok(r.data) : err(r.error);
    },
  );
};

export const safeFetchJsonWithValidate = <TSchema extends z.ZodType>(
  input: RequestInfo | URL,
  schema: TSchema,
  init?: RequestInit,
) => {
  const ra1 = ResultAsync.fromPromise(fetch(input, init), (e) => {
    return NamedError.from('FetchError', e instanceof Error ? e.message : 'Failed to fetch');
  });

  const ra2 = ra1.andThen((res) => {
    if (!res.ok) {
      return err(NamedError.from('FetchError', `Failed to fetch: ${res.status} ${res.statusText}`));
    }
    return ok(res);
  });

  const ra3 = ra2
    .andThen((res) =>
      ResultAsync.fromPromise(res.json(), (e) => {
        return NamedError.from(
          'ParseError',
          e instanceof Error ? e.message : 'Failed to parse JSON',
        );
      }),
    )
    .andThen((obj) => {
      const r = schema.safeParse(obj);
      if (!r.success) {
        return err(r.error);
      }
      return ok(r.data);
    });
  return ra3;
};

export const safeFetchJson = (input: RequestInfo | URL, init?: RequestInit) => {
  return ResultAsync.fromPromise(fetch(input, init), (e) => {
    return NamedError.from('FetchError', e instanceof Error ? e.message : 'Failed to fetch');
  })
    .andThen((res) => {
      if (!res.ok) {
        return err(
          NamedError.from('FetchError', `Failed to fetch: ${res.status} ${res.statusText}`),
        );
      }
      return ok(res);
    })
    .andThen(
      (res): ResultAsync<unknown, NamedError<'ParseError'>> =>
        ResultAsync.fromPromise(res.json(), (e) => {
          return NamedError.from(
            'ParseError',
            e instanceof Error ? e.message : 'Failed to parse JSON',
          );
        }),
    );
};
