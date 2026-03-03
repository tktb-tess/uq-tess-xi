import { readFile } from 'node:fs/promises';
import { mdToHtml } from '$lib/modules/mtoh';

export const load = async () => {
  const md = await readFile('src/routes/(layout1)/others/xen/xen.md', { encoding: 'utf-8' });
  const rawHTML = await mdToHtml(md);
  return {
    rawHTML,
  } as const;
};
