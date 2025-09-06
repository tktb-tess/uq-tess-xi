import type { ServerInit } from '@sveltejs/kit';
import { initWasm, Queue } from '@tktb-tess/util-fns';

export const init: ServerInit = async () => {
  await initWasm();
  Object.defineProperty(window, 'Queue', {
    value: Queue,
    enumerable: true,
  });
};
