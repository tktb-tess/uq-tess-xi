import { mdToHtml } from '$lib/modules/mtoh';
import { readFile } from 'node:fs/promises';
export const prerender = true;

export const load = async () => {
  const url = './src/routes/(layout1)/others/miller-rabin/test.md';
  const resp = await readFile(url, { encoding: 'utf-8' });
  const rawHTML = await mdToHtml(resp);

  return {
    rawHTML,
  } as const;
};
