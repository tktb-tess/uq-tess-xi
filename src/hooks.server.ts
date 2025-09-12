import type { HandleServerError, ServerInit } from '@sveltejs/kit';

export const init: ServerInit = async () => {};

export const handleError: HandleServerError = async ({ error, status, event, message }) => {
  console.error(status, message, error, event);
};
