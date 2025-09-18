import { error, json } from '@sveltejs/kit';
import { htmlToMd } from '$lib/modules/md-html';

const headers = {
  'Content-Type': 'application/json',
} as const;

export const GET = async ({ url, fetch: svFetch }) => {
  console.log(`received GET request at /to-md`);
  const fetchUrls = url.searchParams.getAll('value');

  const tasks = fetchUrls.map(async (url) => {
    const resp = await svFetch(url, { method: 'GET' });
    if (!resp.ok) {
      console.error(resp.url, resp.status, resp.statusText);
      error(404, { message: `failed to fetch` });
    }

    const text = await resp.text();

    return htmlToMd(text);
  });

  const mds = await Promise.allSettled(tasks);

  return json(mds, { headers });
};
