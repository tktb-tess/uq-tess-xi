import { Result, ok, err, ResultAsync, okAsync, errAsync } from 'neverthrow';
import * as z from 'zod';

type NamedError<EName extends string | symbol> = {
  readonly name: EName;
  readonly message: string;
  readonly stack?: string;
  readonly cause?: unknown;
};

const NamedError = {
  from<EName extends string | symbol>(
    name: EName,
    message: string = '',
    cause?: unknown,
  ): NamedError<EName> {
    return {
      name,
      message,
      cause,
    };
  },
};

const msgs = {
  parseError: 'Failed to parse JSON',
  fetchError: 'Failed to fetch',
} as const;

export { NamedError };

export const safeJSONParse: (
  text: string,
  reviver?: (this: unknown, key: string, value: unknown) => unknown,
) => Result<unknown, NamedError<'ParseError'>> = Result.fromThrowable(JSON.parse, (e) => {
  const message = e instanceof Error ? e.message : msgs.parseError;
  return NamedError.from('ParseError', message);
});

export const safeValidate = <TSchema extends z.ZodType>(
  schema: TSchema,
  data: unknown,
): Result<z.infer<TSchema>, z.ZodError<z.infer<TSchema>>> => {
  const result = schema.safeParse(data);
  return result.success ? ok(result.data) : err(result.error);
};

export const safeFetch = (
  input: RequestInfo | URL,
  init?: RequestInit,
): ResultAsync<Response, NamedError<'FetchError'>> => {
  return ResultAsync.fromPromise(fetch(input, init), (e) => {
    const m = e instanceof Error ? e.message : msgs.fetchError;
    return NamedError.from('FetchError', m);
  }).andThen((resp) => {
    if (!resp.ok) {
      const m = `Failed to fetch: ${resp.status} ${resp.statusText}`;
      return errAsync(NamedError.from('FetchError', m));
    }
    return okAsync(resp);
  });
};

export const safeFetchJson = (
  input: RequestInfo | URL,
  init?: RequestInit,
): ResultAsync<unknown, NamedError<'ParseError'> | NamedError<'FetchError'>> => {
  return safeFetch(input, init).andThen((res) => {
    return ResultAsync.fromPromise(res.json(), (e) => {
      const m = e instanceof Error ? e.message : msgs.parseError;
      return NamedError.from('ParseError', m);
    });
  });
};

export const safeParseAndValidate = <TSchema extends z.ZodType>(schema: TSchema, json: string) => {
  return safeJSONParse(json).andThen((data) => safeValidate(schema, data));
};

export const safeFetchJsonAndValidate = <TSchema extends z.ZodType>(
  input: RequestInfo | URL,
  schema: TSchema,
  init?: RequestInit,
) => {
  return safeFetchJson(input, init).andThen((data) => safeValidate(schema, data));
};
