import { SvelteMap } from 'svelte/reactivity';

export type ToastType = 'info' | 'warning' | 'hint';

export type Toast = {
	message: string;
	type: ToastType;
	timeout: number;
	timeoutID: NodeJS.Timeout;
};

type UUID = ReturnType<typeof crypto.randomUUID>;

export const toastStates = new SvelteMap<UUID, Toast>();

export const addToast = (message: string, type: ToastType, timeout: number) => {
	const key = crypto.randomUUID();

	const timeoutID = setTimeout(() => {
		dismissToast(key);
	}, timeout);

	toastStates.set(key, { message, type, timeout, timeoutID });
};

export const dismissToast = (key: UUID) => {
	if (toastStates.has(key)) {
		toastStates.delete(key);
	}
};
