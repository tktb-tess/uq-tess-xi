import otm_json from '../assets/vl-ja.otm.json';

export type ZpDICWord = (typeof otm_json.words)[0];
export type ZpDICExample = (typeof otm_json.examples)[0];
export type ZpDICConf = typeof otm_json.zpdicOnline;
export type ZpDICOTM = typeof otm_json;

type Catalog = 'zpdicDaily' | 'appleAlpha' | 'appleBeta' | 'appleGamma' | 'survival' | 'weaving';

export type ZpDICAPIResponseWord = {
	id: string;
	number: number;
	name: string;
	pronunciation: string;
	equivalents: {
		titles: string[];
		names: string[];
		nameString: string;
		ignoredPattern: string;
	}[];
	tags: string[];
	informations: {
		title: string;
		text: string;
	}[];
	variations: {
		title?: string;
		name: string;
	}[];
	relations: {
		titles?: string[];
		number: number;
		name?: string;
	}[];
	examples: {
		id: string;
		number: number;
		sentence: string;
		translation: string;
		supplement: string;
		tags: string[];
		words: {
			number: number;
		}[];
		offer: {
			catalog: Catalog;
			number: number;
		} | null;
	};
};

export type ZpDICAPIWordsResponse = {
	words: ZpDICAPIResponseWord[];
	total: number;
};

export type SwadeshList = {
	value: string[][];
};

export type Success<T extends object> =
	| (T & {
			success: true;
	  })
	| {
			success: false;
			status: number;
			message: string;
	  };

type Equivalents = ZpDICAPIResponseWord['equivalents'];

export type WordData = {
	word: string;
	translations: Equivalents;
	dic_url: string;
	pron: string;
	size: 'text-5xl' | 'text-4xl';
};

export type PromiseState = 'pending' | 'fulfilled' | 'rejected';
