import { Result, ok, err } from 'neverthrow';
import z from 'zod';

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

export const safeResultParse = <TSchema extends z.ZodType>(schema: TSchema, json: string) => {
  return JSONSafeParse(json).andThen(
    (obj): Result<z.infer<TSchema>, z.ZodError<z.infer<TSchema>>> => {
      const r = schema.safeParse(obj);

      return r.success ? ok(r.data) : err(r.error);
    },
  );
};
