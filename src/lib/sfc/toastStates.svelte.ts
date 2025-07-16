import { SvelteMap } from "svelte/reactivity";

export type Toast = {
    message: string;
    type: string;
    timeout: number;
};

export const toastStates = new SvelteMap<string, Toast>();

export const addToast = (message: string, type: string, timeout: number) => {
    const id = crypto.randomUUID();
    toastStates.set(id, { message, type, timeout });
    // console.log(toastStates);
    setTimeout(() => {
        dismissToast(id);
    }, timeout);
    
};

export const dismissToast = (id: string) => {
    if (toastStates.has(id)) {
        toastStates.delete(id);
    }
};

