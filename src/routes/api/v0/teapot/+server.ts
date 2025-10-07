import { htmlToMd } from '$lib/modules/md-html.js';
import { error, text } from '@sveltejs/kit';

export const GET = async ({ fetch: svFetch }) => {
  const resp = await svFetch(`https://en.wikipedia.org/wiki/Teapot`);

  if (!resp.ok) {
    error(500);
  }

  const html = await resp.text();
  const md = await htmlToMd(html);

  const headers = {
    'Content-Type': 'text/plain; charset=utf-8',
  } as const;

  return text(md, { status: 418, headers });
};
