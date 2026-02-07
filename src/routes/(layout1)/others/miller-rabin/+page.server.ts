import { mdToHtml } from '$lib/modules/md-html';
import { readFile } from 'node:fs/promises';
export const prerender = true;

export const load = async () => {
  const resp = await readFile('./src/routes/(layout1)/others/miller-rabin/test.md', {
    encoding: 'utf-8',
  });

  const rawHTML = await mdToHtml(resp);

  return {
    rawHTML,
  } as const;
};
