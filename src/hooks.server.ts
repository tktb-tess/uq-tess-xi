import type { HandleServerError, ServerInit } from '@sveltejs/kit';

export const init: ServerInit = async () => {};

export const handleError: HandleServerError = async ({ error }) => {
  console.error(error);
};
