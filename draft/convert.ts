import { mdToHtml } from '../src/lib/modules/md-html';
import { readFileSync, writeFileSync } from 'node:fs';

const urls = ['miller-rabin', 'test', 'xen'] as const;

const main = async () => {
  const tasks = urls.map(async (url) => {
    const md = readFileSync(`./draft/${url}.md`, { encoding: 'utf8' });
    const html = await mdToHtml(md);
    writeFileSync(`./draft/out/${url}.html`, html);
    console.log(url, 'success');
  });

  await Promise.all(tasks);

  console.log('all converting were succeeded');
};

main();
