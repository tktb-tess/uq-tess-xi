import { writeFile } from 'node:fs/promises';

const paths: readonly string[] = [
	'/',
	'/conlang',
	'/conlang/vaes/',
	'/conlang/vaes/letter-et-pron',
	'/conlang/vaes/noun',
	'/conlang/vaes/numeral',
	'/conlang/vaes/phonology',
	'/conlang/vaes/swadesh-list',
	'/data',
	'/data/conlang-xcumon',
	'/data/OE-verb-conj-type',
	'others',
	'others/gregorian-chants',
	'others/ja-tibetan',
	'others/license',
	'others/license/Inter',
	'others/license/CharisSIL',
	'others/license/FONTLOG',
	'others/md-converter',
	'others/musik',
	'others/tools'
];

const generateXml = async () => {
	const lastmod = new Date().toISOString();

	const urls = paths.map(
		(p) => `<url>
    	<loc>${new URL(p, 'https://www.tktb-tess.dev').href}</loc>
    	<lastmod>${lastmod}</lastmod>
	</url>`
	);

	const text = `<?xml version="1.0" encoding="utf-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('\n')}
</urlset>`;

	await writeFile('./static/sitemap.xml', text);
	console.log('sitemap.xml was successfully generated');
};

generateXml();
