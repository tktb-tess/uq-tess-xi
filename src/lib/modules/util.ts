import { Result, ok, err, ResultAsync, okAsync, errAsync } from 'neverthrow';
import { NamedError } from '@tktb-tess/util-fns';
import * as z from 'zod';

const defaultMsgs = {
  parseError: 'Failed to parse JSON',
  fetchError: 'Failed to fetch',
} as const;

export const createErrHandler = <T extends string>(errName: T, fallbackMsg: string) => {
  return (e: unknown) => {
    const msg = e instanceof Error ? e.message : fallbackMsg;
    return new NamedError(errName, msg, { cause: e });
  };
};

export const safeJSONParse: (
  text: string,
  reviver?: (this: unknown, key: string, value: unknown) => unknown,
) => Result<unknown, NamedError<'ParseError'>> = Result.fromThrowable(
  JSON.parse,
  createErrHandler('ParseError', defaultMsgs.parseError),
);

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
  return ResultAsync.fromPromise(
    fetch(input, init),
    createErrHandler('FetchError', defaultMsgs.fetchError),
  ).andThen((resp) => {
    if (!resp.ok) {
      const m = `Failed to fetch: ${resp.status} ${resp.statusText}`;
      return errAsync(new NamedError('FetchError', m, { cause: resp }));
    }
    return okAsync(resp);
  });
};

export const safeFetchJson = (
  input: RequestInfo | URL,
  init?: RequestInit,
): ResultAsync<unknown, NamedError<'ParseError'> | NamedError<'FetchError'>> => {
  return safeFetch(input, init).andThen((res) => {
    return ResultAsync.fromPromise(
      res.json(),
      createErrHandler('ParseError', defaultMsgs.parseError),
    );
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
