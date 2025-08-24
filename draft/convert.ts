import { marked } from 'marked';
import { readFile, writeFile } from 'node:fs/promises';

const names = ['miller-rabin'] as const;

const main = async () => {
	const tasks = names.map(async (name) => {
		const file = await readFile(`draft/${name}.md`, { encoding: 'utf-8' });
		const htmlParsed = marked.parse(file, { breaks: true, async: false, gfm: true });
		await writeFile(`draft/out/${name}.html`, htmlParsed);
		console.log(`${name}: successfully finished`);
	});
	await Promise.all(tasks);
	console.log('all tasks are successfully finished');
};

main();
