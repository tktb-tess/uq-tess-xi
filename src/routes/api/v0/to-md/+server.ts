import { json } from '@sveltejs/kit';
import { htmlToMd } from '$lib/modules/htom';
import { NamedError } from '$lib/modules/util';

const headers = {
  'Content-Type': 'application/json',
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
      error: NamedError<'FetchError'>;
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
          error: NamedError.from('FetchError', `${status} ${statusText}`),
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
      return {
        success: false,
        url,
        error: NamedError.from('FetchError', e instanceof Error ? e.message : 'failed to fetch'),
      };
    }
  });

  const mds = await Promise.all(tasks);

  return json(mds, { headers });
};
