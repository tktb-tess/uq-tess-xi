import { SvelteMap } from 'svelte/reactivity';

export type Toast = {
	message: string;
	type: string;
	timeout: number;
	timeoutID: NodeJS.Timeout;
};

type UUID = `${string}-${string}-${string}-${string}-${string}`;

export const toastStates = new SvelteMap<UUID, Toast>();

export const addToast = (message: string, type: string, timeout: number) => {
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
