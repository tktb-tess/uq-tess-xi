import { SvelteMap } from 'svelte/reactivity';

export type ToastType = 'info' | 'warning' | 'hint';

export type Toast = {
  readonly message: string;
  readonly type: ToastType;
  readonly timeout: number;
  readonly timeoutID: NodeJS.Timeout;
};

type Key = { __proto__: null };

export const toastStates = new SvelteMap<Key, Toast>();

export const addToast = (message: string, type: ToastType, timeout: number) => {
  const key = { __proto__: null };

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
