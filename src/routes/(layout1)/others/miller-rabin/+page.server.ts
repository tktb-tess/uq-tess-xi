import { mdToHtml } from '$lib/modules/md-html';
import type { LoadResult } from '$lib/types/decl';
import { isHttpError } from '@sveltejs/kit';
import { readFile } from 'node:fs/promises';
export const prerender = true;

export const load = async (): Promise<LoadResult<string>> => {
  try {
    const resp = await readFile('./src/routes/(layout1)/others/miller-rabin/test.md', {
      encoding: 'utf-8',
    });

    const ht = await mdToHtml(resp);

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
