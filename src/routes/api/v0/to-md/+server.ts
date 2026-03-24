import { json } from '@sveltejs/kit';
import { htmlToMd } from '$lib/modules/htom';

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
} as const;

export type MdResult =
  | {
      success: true;
      url: string;
      md: string;
    }
  | {
      success: false;
      url: string;
      error: App.Error;
    };

export const GET = async ({ url, fetch: svFetch }) => {
  console.log(`received GET request at /to-md`);
  const fetchUrls = url.searchParams.getAll('value');

  const tasks = fetchUrls.map(async (url): Promise<MdResult> => {
    try {
      const resp = await svFetch(url, { method: 'GET' });

      if (!resp.ok) {
        const { status, statusText } = resp;
        return {
          success: false,
          url,
          error: {
            name: 'FetchError',
            message: `Failed to fetch: ${status} ${statusText}`,
            cause: [status, statusText],
          },
        };
      }
      const html = await resp.text();
      const md = await htmlToMd(html);
      return {
        success: true,
        url,
        md,
      };
    } catch (e) {
      const message = e instanceof Error ? e.message : 'failed to fetch';
      const cause = e instanceof Error ? `${e.cause}` || undefined : undefined;
      const stack = e instanceof Error ? e.stack : undefined;
      return {
        success: false,
        url,
        error: {
          message,
          name: 'FetchError',
          cause,
          stack,
        },
      };
    }
  });

  const mds = await Promise.all(tasks);

  return json(mds, { headers });
};
