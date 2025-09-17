import { mdToHtml } from '$lib/modules/md-html';
import type { Result } from '$lib/types/decl';
import { isHttpError } from '@sveltejs/kit';
export const prerender = true;

export type ReturnT = Promise<Result<string>>;

export const load = async ({ fetch: svFetch }): ReturnT => {
  const resp = await svFetch('/markdown/miller-rabin.md').then((r) => r.text());

  try {
    const ht = await mdToHtml(resp);
    return {
      success: true,
      result: ht,
    };
  } catch (e) {
    if (isHttpError(e)) {
      return {
        success: false,
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
