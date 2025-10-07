import { mdToHtml } from '../src/lib/modules/md-html';
import { it } from 'vitest';

it('test1', async () => {
  const h = await mdToHtml(`# Hello, Markdown!`);
  console.log(h);
});
