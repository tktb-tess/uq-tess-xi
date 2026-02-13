import { SvelteMap } from 'svelte/reactivity';

export type ToastType = 'info' | 'warning' | 'hint';

export type Toast = {
  readonly message: string;
  readonly type: ToastType;
  readonly timeout: number;
  readonly timeoutID: NodeJS.Timeout;
};

export const toastStates = new SvelteMap<symbol, Toast>();

export const addToast = (message: string, type: ToastType, timeout: number) => {
  const key = Symbol();

  const timeoutID = setTimeout(() => {
    dismissToast(key);
  }, timeout);

  toastStates.set(key, { message, type, timeout, timeoutID });
};

export const dismissToast = (key: symbol) => {
  if (toastStates.has(key)) {
    toastStates.delete(key);
  }
};
