import type { ServerInit } from '@sveltejs/kit';
import { initWasm } from '@tktb-tess/util-fns';

export const init: ServerInit = async () => {
  await initWasm();
};
