import { SvelteMap } from 'svelte/reactivity';

export type ToastType = 'info' | 'warning' | 'hint';

export type Toast = {
  readonly message: string;
  readonly type: ToastType;
  readonly timeout: number;
  readonly timeoutID: ReturnType<typeof setTimeout>;
};

const count = new BigUint64Array(1);
declare const __KEY_BRAND__: unique symbol;
type Key = string & { readonly [__KEY_BRAND__]: unknown };

const getKey = () => {
  const key = `${count[0]!++}`;
  return key as Key;
};

export const toastStates = new SvelteMap<Key, Toast>();

export const addToast = (message: string, type: ToastType, timeout: number) => {
  const key = getKey();

  const timeoutID = setTimeout(() => {
    dismissToast(key);
  }, timeout);

  toastStates.set(key, { message, type, timeout, timeoutID });
};

export const dismissToast = (key: Key) => {
  if (toastStates.has(key)) {
    toastStates.delete(key);
  }
};
