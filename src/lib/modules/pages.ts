export type PageData = {
  readonly title: string;
  readonly path: string;
  readonly longTitle?: string;
  readonly description?: string;
  readonly private?: boolean;
};

const pages: PageData[] = [
  {
    title: '悠久肆方体',
    path: '/',
    description: '斗琴庭暁響のサイト',
  },
  {
    title: '創作言語',
    path: '/conlang',
    description: 'こんらんぐ！',
  },
  {
    title: '葦語 概説',
    longTitle: 'Vessenzlendisç 概説',
    description: 'がいせーつ',
    path: '/conlang/vaes',
  },

  {
    title: '葦語 文字と発音',
    longTitle: 'Vessenzlendisç 文字と発音',
    description: 'もじのよみかたとか！',
    path: '/conlang/vaes/letter-et-pron',
  },
  {
    title: '葦語 名詞',
    longTitle: 'Vessenzlendisç 名詞',
    description: 'めーし！',
    path: '/conlang/vaes/noun',
    private: true,
  },
  {
    title: '葦語 動詞',
    longTitle: 'Vessenzlendisç 動詞',
    description: 'どーし！',
    path: '/conlang/vaes/verb',
    private: true,
  },
  {
    title: '葦語 形容詞',
    longTitle: 'Vessenzlendisç 形容詞',
    description: 'けーよーし！',
    path: '/conlang/vaes/adjective',
    private: true,
  },
  {
    title: '葦語 数詞',
    longTitle: 'Vessenzlendisç 数詞',
    description: 'かずのかぞえかた！',
    path: '/conlang/vaes/numeral',
  },
  {
    title: '葦語 音韻論',
    longTitle: 'Vessenzlendisç 音韻論',
    description: 'おにんろん！',
    path: '/conlang/vaes/phonology',
  },
  {
    title: '葦語 りんご文',
    longTitle: 'Vessenzlendisç りんご文',
    description: 'りんごだいすき！',
    path: '/conlang/vaes/ringo-bunn',
  },
  {
    title: '葦語 Swadesh List',
    longTitle: 'Vessenzlendisç Swadesh List',
    description: 'すわでしゅ！',
    path: '/conlang/vaes/swadesh-list',
  },

  {
    title: 'データ',
    description: '色々なデータ',
    path: '/data',
  },
  {
    title: '古英語 動詞活用一覧',
    longTitle: 'Ænglisċ 動詞活用一覧',
    path: '/data/OE-verb-conj-type',
    private: true,
  },
  {
    title: '斗琴庭暁響に100の質問',
    path: '/data/conlang-xcumon',
  },
  {
    title: '表示するだけでなんかすごいハッカーみたいなことやってるように見えるページ',
    description: 'なんなんすかねこれ',
    path: '/like-programmer',
  },
  {
    title: 'その他',
    path: '/others',
  },
  {
    title: '???',
    path: '/others/crown-jewels',
    private: true,
  },
  {
    title: 'グレゴリオ聖歌について',
    path: '/others/gregorian-chants',
  },
  {
    title: '日本語 チベット文字表記',
    path: '/others/ja-tibetan',
  },
  {
    title: 'ライセンス',
    path: '/others/license',
  },
  {
    title: 'HTMLからMarkdownへ変換',
    path: '/others/md-converter',
  },
  {
    title: 'Miller-Rabin 確率的素数判定法',
    path: '/others/miller-rabin',
  },
  {
    title: '音楽',
    description: '作曲は楽しい',
    path: '/others/musik',
  },
  {
    title: '???',
    path: '/others/polytope',
  },
  {
    title: '???',
    path: '/others/tools',
  },
  {
    title: '???',
    path: '/others/xen',
  },
];

export default pages;
