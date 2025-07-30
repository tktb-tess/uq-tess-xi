import { error, json } from '@sveltejs/kit';
import TurndownService from '@joplin/turndown';
import { gfm } from '@joplin/turndown-plugin-gfm';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

const service = new TurndownService({
    headingStyle: 'atx',
    emDelimiter: '*',
    bulletListMarker: '-',
    hr: '---',
});
service.use(gfm);
const win = new JSDOM('').window;
const purifier = DOMPurify(win);
const headers = {
    'Content-Type': 'application/json',
} as const;

export const GET = async ({ url, fetch: svFetch }) => {
    console.log(`received GET request at /to-md`);
    const fetchUrls = url.searchParams.getAll('value');
    const decoded = fetchUrls.map((u) => decodeURIComponent(u));
    
    const tasks = decoded.map(async (url) => {
        const resp = await svFetch(url, { method: 'GET' });
        if (!resp.ok) {
            error(resp.status);
        }
        const html = await resp.text().then((t) => purifier.sanitize(t));
        const markdown = service.turndown(html);
        return markdown;
    });

    const mds = await Promise.all(tasks);
    
    return json(mds, { headers });
}