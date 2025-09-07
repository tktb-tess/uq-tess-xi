import type { HandleServerError, ServerInit } from '@sveltejs/kit';
import { initWasm } from '@tktb-tess/util-fns';

export const init: ServerInit = async () => {
  await initWasm();
};

export const handleError: HandleServerError = async ({ error, status, event, message }) => {
  console.error(status, message, error, event);
};
