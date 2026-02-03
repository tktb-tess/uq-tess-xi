import { writeFileSync, globSync } from 'node:fs';

const paths: readonly string[] = (() => {
  const gl_ = globSync(`./src/routes/**/+page.svelte`);
  const paths = gl_.map((p) => {
    const pa = p
      .split('/')
      .slice(2, -1)
      .filter((s) => !/\([^)]+\)/.test(s));
    return '/' + pa.join('/');
  });
  return paths.sort();
})();

console.log('paths:\n', paths);

const lastmod = new Date().toISOString();
const urls = paths.map(
  (p) => `  <url>
    <loc>${new URL(p, 'https://www.tktb-tess.dev').href}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? 1 : 0.8}</priority>
  </url>`,
);

const text = `<?xml version="1.0" encoding="utf-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

writeFileSync('./static/sitemap.xml', text);
console.log('sitemap.xml was successfully generated');
