import { marked } from 'marked';
import { readFile, writeFile } from 'node:fs/promises';

const main = async () => {
	const names = ['miller-rabin'] as const;

	const readProms = names.map(async (name) => {
		const file = await readFile(`draft/${name}.md`, { encoding: 'utf-8' });
        const htmlParsed = marked.parse(file, { breaks: true, async: false, gfm: true });
        await writeFile(`draft/out/${name}.html`, htmlParsed);
        console.log(`${name}: successfully finished`);
	});
    await Promise.all(readProms);
    console.log('all tasks are successfully finished');
};

main();

