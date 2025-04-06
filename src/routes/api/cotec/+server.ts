import { parseToJSON, type CotecContent } from '$lib/modules/fetching';
import { json, text, error } from '@sveltejs/kit';
import Papa from 'papaparse';

type CtcStrgfd = {
	[key in keyof CotecContent]: string | null;
}

export const GET = async ({ url }) => {
	console.log('receive GET request at /cotec');
	
	const { metadata, contents } = await parseToJSON();

	const fb = url.searchParams.get('forbidden') === 'true';
	if (fb) error(403);

	const isCsv = url.searchParams.get('csv') === 'true';
	
	if (isCsv) {
		const body = toCSV(contents);
		const headers = {
			'Content-Type': 'text/plain; charset=utf-8',
		} as const;
		return text(body, { headers });
	} else {
		const body = { metadata, contents };
		const headers = {
			'Content-Type': 'application/json',
		} as const;

		return json(body, { headers });
	}
	
};

const toCSV = (contents: CotecContent[]) => {
	const arr: CtcStrgfd[] = [];

	contents.forEach((content) => {
		const messier = content.messier;
		const name = content.name.join(';');
		const kanji = content.kanji.join(';');
		const desc = content.desc.join(';');
		const creator = content.creator.join(';');
		const period = content.period;
		const site = (() => 
			content.site.map((site) => 
				site.name ? `${site.name}:[${site.url}]` : `[${site.url}]`
			).join(';')
		)();


		const twitter = content.twitter.join(';');
		const dict = content.dict.join(';');
		const grammar = content.grammar.join(';');
		const world = content.world.join(';');
		const moyune = content.moyune.join('/');
		const category = (() => 
			content.category.map((cat) => 
				cat.content ? `${cat.name}: ${cat.content}` : cat.name
			).join(';')
		)();

		const clav3 = (() => {
			if (content.clav3) {
				const { dialect, language, family, creator } = content.clav3;
				return `${dialect}_${language}_${family}_${creator}`;
			} else {
				return null;
			}
		})();

		const part = content.part;
		const example = content.example.join(';');
		const script = content.script.join(';');

		const res: CtcStrgfd = {
			messier,
			name,
			kanji,
			desc,
			creator,
			period,
			site,
			twitter,
			dict,
			grammar,
			world,
			category,
			moyune,
			clav3,
			part,
			example,
			script,
		};
		arr.push(res);
	});

	return Papa.unparse(arr);
};
