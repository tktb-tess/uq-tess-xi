export interface PageData {
  readonly title: string;
  readonly longTitle?: string;
  readonly description?: string;
  readonly private?: boolean;
}

const pages: ReadonlyMap<string, PageData> = new Map([
  ['/', { title: '悠久肆方体', description: '斗琴庭暁響のサイト' }],
  ['/conlang', { title: '創作言語', description: 'こんらんぐ！' }],
  ['/conlang/vaes', { title: '葦語', longTitle: 'Vessenzlendisç', description: 'げんご①' }],
  [
    '/conlang/vaes/letter-et-pron',
    {
      title: '葦語 文字と発音',
      longTitle: 'Vessenzlendisç 文字と発音',
      description: 'もじのよみかたとか！',
    },
  ],
  [
    '/conlang/vaes/noun',
    {
      title: '葦語 名詞',
      longTitle: 'Vessenzlendisç 名詞',
      description: 'めーし！',
      private: true,
    },
  ],
  [
    '/conlang/vaes/verb',
    {
      title: '葦語 動詞',
      longTitle: 'Vessenzlendisç 動詞',
      description: 'どーし！',
      private: true,
    },
  ],
  [
    '/conlang/vaes/adjective',
    {
      title: '葦語 形容詞',
      longTitle: 'Vessenzlendisç 形容詞',
      description: 'けーよーし！',
      private: true,
    },
  ],
  [
    '/conlang/vaes/numeral',
    { title: '葦語 数詞', longTitle: 'Vessenzlendisç 数詞', description: 'かずのかぞえかた！' },
  ],
  [
    '/conlang/vaes/phonology',
    { title: '葦語 音韻論', longTitle: 'Vessenzlendisç 音韻論', description: 'おにんろん！' },
  ],
  [
    '/conlang/vaes/ringo-bunn',
    {
      title: '葦語 りんご文',
      longTitle: 'Vessenzlendisç りんご文',
      description: 'りんごだいすき！',
    },
  ],
  [
    '/conlang/vaes/swadesh-list',
    {
      title: '葦語 Swadesh List',
      longTitle: 'Vessenzlendisç Swadesh List',
      description: 'すわでしゅ！',
    },
  ],
  ['/data', { title: 'データ', description: '色々なデータ' }],
  [
    '/data/OE-verb-conj-type',
    { title: '古英語 動詞活用一覧', longTitle: 'Ænglisċ 動詞活用一覧', private: true },
  ],
  ['/data/conlang-xcumon', { title: '人工言語作者にに50の質問' }],
  [
    '/like-programmer',
    {
      title: '表示するだけでなんかすごいハッカーみたいなことやってるように見えるページ',
      description: 'なんなんすかねこれ',
    },
  ],
  ['/others', { title: 'その他' }],
  ['/others/crown-jewels', { title: 'Crown Jewels の命名案', private: true }],
  ['/others/gregorian-chants', { title: 'グレゴリオ聖歌について' }],
  ['/others/ja-tibetan', { title: '日本語 チベット文字表記' }],
  ['/others/license', { title: 'ライセンス' }],
  ['/others/miller-rabin', { title: 'Miller-Rabin 確率的素数判定法' }],
  ['/others/musik', { title: '音楽', description: '作曲は楽しい' }],
  ['/others/polytope', { title: 'ポリトープの命名案' }],
  ['/others/tools', { title: 'ツール', description: 'つーる♡' }],
  ['/others/xen', { title: '微分音理論における諸概念' }],
]);

export default pages;
