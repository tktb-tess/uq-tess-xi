import type { HandleClientError, ClientInit } from '@sveltejs/kit';

export const init: ClientInit = async () => {};

export const handleError: HandleClientError = async ({ error }) => {
  console.error(error);
};
