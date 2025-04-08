import otm_json from '../assets/vl-ja.otm.json';
import { ZPDIC_API_KEY } from '$env/static/private';
import { getRndInt } from './util';

export type ZpDICWord = typeof otm_json.words[0];
export type ZpDICExample = typeof otm_json.examples[0];
export type ZpDICConf = typeof otm_json.zpdicOnline;
export type ZpDICOTM = typeof otm_json;

type Catalog = 
    | 'zpdicDaily'
    | 'appleAlpha'
    | 'appleBeta'
    | 'appleGamma'
    | 'survival'
    | 'weaving';

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
    }
};

export type ZpDICAPIWordsResponse = {
    words: ZpDICAPIResponseWord[];
    total: number;
};

const api_url = `http://zpdic.ziphil.com/api/v0/dictionary/633/words`;

const fetchZpDIC = async (url: string) => {
    const headers = {
        'X-Api-Key': ZPDIC_API_KEY,
    };

    const options = {
        headers,
    };

    const response = await fetch(url, options);

    if (!response.ok) throw Error(`failed to fetch\nstatus: ${response.status}`);

    return response.json() as Promise<ZpDICAPIWordsResponse>;
};

const getWordCount = async () => {
    const url = `${api_url}?text=`;

    const json = await fetchZpDIC(url);

    return json.total;
};

export const getWord = async () => {
    const total = await getWordCount();
    const rand = getRndInt(0, total);
    const url = `${api_url}?text=&skip=${rand}&limit=1`;
    const resp = await fetchZpDIC(url);
    return resp.words[0];
};


