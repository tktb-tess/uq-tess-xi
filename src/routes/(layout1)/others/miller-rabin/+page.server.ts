import { mdToHtml } from '$lib/modules/md-html';
import type { LoadResult } from '$lib/types/decl';
import { isHttpError } from '@sveltejs/kit';
export const prerender = true;

export const load = async ({ fetch: svFetch }): Promise<LoadResult<string>> => {
  try {
    const resp = await svFetch('/markdown/miller-rabin.md');

    if (!resp.ok) {
      throw Error(`failed to fetch: ${resp.status} ${resp.statusText}`);
    }

    const ht = await resp.text().then((md) => mdToHtml(md));

    return {
      success: true,
      result: ht,
    };
  } catch (e) {
    if (isHttpError(e)) {
      return {
        success: false,
        name: 'HttpError',
        message: e.body.message,
        status: e.status,
      };
    } else if (e instanceof Error) {
      const { name, cause, message, stack } = e;
      return {
        success: false,
        name,
        message,
        cause,
        stack,
      };
    } else {
      return {
        success: false,
        name: 'UnidentifiedError',
        message: 'unidentified',
        cause: e,
      };
    }
  }
};
