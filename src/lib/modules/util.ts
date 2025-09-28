import { Result } from 'neverthrow';

const __brand_misc_err = Symbol();

type MiscError = {
  readonly name: string;
  readonly message: string;
  readonly cause?: unknown;
  readonly [__brand_misc_err]: typeof __brand_misc_err;
};

const MiscError = {
  from(name: string = 'MiscError', message: string = 'unidentified error', cause?: unknown) {
    return {
      name,
      message,
      cause,
    } as MiscError;
  },
};

export { MiscError };

export const JSONSafeParse: (
  text: string,
  reviver?: ((this: unknown, key: string, value: unknown) => unknown),
) => Result<unknown, MiscError> = Result.fromThrowable(JSON.parse, (e) => {
  return MiscError.from('ParseError', 'failed to parse', e);
});
