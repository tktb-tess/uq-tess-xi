import type { HandleClientError, ClientInit } from '@sveltejs/kit';

export const init: ClientInit = async () => {};

export const handleError: HandleClientError = async ({ error, status, event, message }) => {
  console.error(status, message, error, event);
};
