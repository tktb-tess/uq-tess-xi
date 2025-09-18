import z from 'zod';
import { ok, err, Result } from 'neverthrow';

const parse_err_brand = Symbol('parse-error');

type ParseError = {
  readonly name: 'ParseError';
  readonly message: string;
  readonly cause: unknown;
  readonly [parse_err_brand]: typeof parse_err_brand;
};

const ParseError = {
  from(message: string, cause: unknown): ParseError {
    return {
      name: 'ParseError',
      message,
      cause,
    } as ParseError;
  },
};

export { ParseError };

export const safeResultParse = <TSchema extends z.ZodType>(schema: TSchema, json: string) => {
  const safeJSONParse = Result.fromThrowable(JSON.parse, (e) => {
    return ParseError.from('failed to parse', e);
  });

  return safeJSONParse(json).andThen(
    (obj): Result<z.infer<TSchema>, z.ZodError<z.infer<TSchema>>> => {
      const r = schema.safeParse(obj);

      return r.success ? ok(r.data) : err(r.error);
    },
  );
};
