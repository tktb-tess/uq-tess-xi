<script>
  import UnderConstruction from '$lib/components/UnderConstruction.svelte';
  import XTable from '$lib/components/XTable.svelte';

  const {} = $props();
</script>

<p>ヴェッセンズラン語の数詞は概ね10進法である。</p>
<section aria-labelledby="cardinal">
  <h2 id="cardinal">基数詞 (Kardinalraiman)</h2>
  <h3>0 〜 19</h3>
  <XTable
    class="[&_:where(td:nth-child(odd))]:text-end
      [&_:where(td:nth-child(even))]:text-start
      [&_td:nth-child(odd)]:font-feat-['tnum']"
    data={[
      ['0', 'zéro', '10', 'tųj'],
      ['1', 'an', '11', 'ęlęv'],
      ['2', 'tvęģ', '12', 'tvelf'],
      ['3', 'ðrao', '13', 'ðraotųj'],
      ['4', 'fewr', '14', 'fewrtųj'],
      ['5', 'fajf', '15', 'fajftųj'],
      ['6', 'six', '16', 'sightųj'],
      ['7', 'sœvon', '17', 'sœftųj'],
      ['8', 'aght', '18', 'aghtdųj'],
      ['9', 'nięw', '19', 'newntųj'],
    ]}
  />
  <p>19までの数詞は上のようになる。0はフランス語由来の <i>zéro</i> である。</p>
  <p>
    それ以外は、11, 12が独自の単語で13以降が「1の位 +
    10」になる所など、他のゲルマン諸語と似たようなものとなっている。ただし15&ndash;19は若干変則的なので注意。
  </p>
  <p>
    1 <i>an</i> は不定冠詞 <i>an</i>
    と共通で、修飾する名詞の性・格に合わせて変化する。しかし、後ろに他の数詞が来るときは名詞の性にかかわらず主格形
    <i>an</i> が使われる。
  </p>
  <p>物を数えるときなど、単独で使う場合も <i>an</i> を使う。</p>
  <p>変化表は以下。</p>
  <XTable
    headCols={1}
    headRows={1}
    data={[
      ['＼', '男性', '中性', '女性'],
      ['主格', ['an', { cols: 3 }]],
      ['属格', ['anes', { cols: 2 }], 'anr'],
      ['与格', ['anum', { cols: 2 }], 'anr'],
      ['対格', 'en', 'an', 'en'],
      ['具格※', ['en', { cols: 2 }], 'anr'],
    ]}
  />

  <p class="text-sm">※具格は通常使われず、代わりに与格が使われる</p>
  <p>
    また、2 <i>tvęģ</i> は性によって変化する。
  </p>

  <p>変化表は以下。</p>
  <XTable
    headRows={1}
    data={[
      ['男性', '中性', '女性'],
      ['tvęģ', 'taw', 'tva'],
    ]}
  />

  <p>ただし、後ろに他の数詞が来るときは名詞の性にかかわらず中性形の <i>taw</i> が使用される。</p>
  <p>単独で使う場合は男性形 <i>tvęģ</i> を使う。</p>
  <p>
    例. <i>Inr bylding sind taw ðawzend hunde.</i> &#8213; その建物の中には2000匹の犬がいる。
  </p>
  <p>
    例2. <i>Inr bylding sind ðawzend tvęģ hundas.</i> &#8213; その建物の中には1002匹の犬がいる。
  </p>

  <h3>20 〜 999</h3>
  <XTable
    class="[&_:where(td:nth-child(odd))]:text-end
      [&_:where(td:nth-child(even))]:text-start
      [&_td:nth-child(odd)]:font-feat-['tnum']"
    data={[
      ['20', 'tvintaģ', '30', 'ðraitaģ', '40', 'fewrtaģ'],
      ['21', 'an-and-tvintaģ', '31', 'an-and-ðraitaģ', '50', 'fajftaģ'],
      ['22', 'taw-and-tvintaģ', '32', 'taw-and-ðraitaģ', '60', 'sightaģ'],
      ['23', 'ðrao-and-tvintaģ', '33', 'ðrao-and-ðraitaģ', '70', 'sœftaģ'],
      ['24', 'fewr-and-tvintaģ', '34', 'fewr-and-ðraitaģ', '80', 'aghtdaģ'],
      ['25', 'fajf-and-tvintaģ', '35', 'fajf-and-ðraitaģ', '90', 'newntaģ'],
      ['26', 'six-and-tvintaģ', '36', 'six-and-ðraitaģ', '100', '(an-)hundred'],
      ['27', 'sœvon-and-tvintaģ', '37', 'sœvon-and-ðraitaģ', '110', 'enlftaģ'],
      ['28', 'aght-and-tvintaģ', '38', 'aght-and-ðraitaģ', '120', 'tvelftaģ'],
      ['29', 'nięw-and-tvintaģ', '39', 'nięw-and-ðraitaģ', '-', '-'],
    ]}
  />

  <p>
    21 〜 99、<strong>および110 〜 129</strong>は、「(1の位)-<i>and</i
    >-(10の位)」とハイフンで繋いで書く。
  </p>
  <p>
    110&ndash;129が特殊なので注意（20&ndash;99と同様に、「(1の位)-<i>and</i>-(<i>änlftaģ</i> or
    <i>tvälftaģ</i>)」という風に書く。）
  </p>
  <p>
    101&ndash;109、および130以降は 245 <i>taw-hundred-faif-and-fewrtaģ</i> のように「(100の位)-<i
      >hundred</i
    >-(1&ndash;99の数詞)」と繋げて書く。ただし、100の位が1のとき、<i>an</i> は省略できる。
  </p>
  <p>
    10の位の数詞は概ね対応する1の位の数詞に <i>-taģ</i> をつけたものであるが、ほとんどは1の位の数詞と微妙に異なるので注意。
  </p>
  <p>
    つまり上記のことを踏まえると、105は <i>(an-)hundred-faif,</i> 115は <i>faif-and-änlftaģ,</i>
    125は <i>faif-and-tvälftaģ,</i> 135は <i>(an-)hundred-faif-and-ðraitaģ</i> となる。
  </p>
  <p>
    20以上の数詞が名詞を修飾する場合、<strong>その名詞は複数属格になる</strong
    >ので注意。ただし元の格が主格や直接目的語を表す対格の時に限る。前置詞句や間接目的語などの場合は、元の格が優先される。
  </p>
  <p>2語以上からなる数詞の場合、名詞の直前に来る数詞のルールが適応される。</p>
  <p>
    例. <i>Inr bylding sind taw ðawzend apble.</i>（直前が1000 <i>ðawzend</i> なので複数属格）
  </p>
  <p>
    例2. <i>Inr bylding sind ðawzend tvęģ apblas.</i>（直前が2 <i>tvęģ</i> なので複数主格）
  </p>
  <h3>1000 〜</h3>
  <XTable
    class="[&_:where(td:nth-child(odd))]:text-end
      [&_:where(td:nth-child(even))]:text-start
      [&_td:nth-child(odd)]:font-feat-['tnum']"
    data={[
      ['1,000', '(an) ðawzend'],
      ['10,000', 'taw ðawzend'],
      ['100,000', '(an-)hundred ðawzend'],
      ['10^6', '(an) miljœn'],
      ['10^7', 'taw milljonan'],
      ['10^8', '(an)hundred miljonnan'],
      ['10^9', '(an) miliard'],
      ['10^10', 'taw miljardan'],
      ['10^12', 'biljœn'],
      ['10^15', 'biliard'],
      ['10^18', 'triljœn'],
      ['10^21', 'triliard'],
      ['・・・', '・・・'],
    ]}
  />

  <p>1,000以降の数詞は、他のヨーロッパ言語と同じように1,000毎に新たな数詞が用いられる。</p>
  <p>
    ヴェッセンズラン語の数詞はいわゆる “long scale” であり（ドイツ語やフランス語と同じ方式）、10<sup
      >6</sup
    >
    以降の数詞では 10<sup>6</sup> 倍毎に <i>-ljœn</i> 系の数詞が使われ、10<sup>3</sup> 倍は
    <i>-ljœn</i> を <i>-liard</i> で置き換えた数詞で表される。
  </p>
  <p><i>ðawzend</i> や <i>-ljœn, -liard</i> 系の数詞の前後にはスペースを入れる。</p>
  <p>
    <i>-ljœn, -liard</i> 系の数詞は名詞として扱われ、数・格に応じて変化する。共に弱変化であり、変化表は以下。
  </p>
  <p>被修飾名詞は複数属格になるが、数詞自体は元の格になるので注意。</p>
  <div class="grid grid-cols-auto-fill-55 gap-2">
    <XTable
      caption="-ljœn"
      class="[&_:where(td)]:text-start"
      headCols={1}
      headRows={1}
      data={[
        ['＼', '単数', '複数'],
        ['主格', '-ljœn', '-ljonan'],
        ['属格', '-ljonan', '-ljonne'],
        ['与格', '-ljonan', '-ljonum'],
        ['対格', '-ljonan', '-ljonan'],
      ]}
    />
    <XTable
      caption="-liard"
      class="[&_:where(td)]:text-start"
      headCols={1}
      headRows={1}
      data={[
        ['＼', '単数', '複数'],
        ['主格', '-liard', '-liardan'],
        ['属格', '-liardan', '-liardne'],
        ['与格', '-liardan', '-liardum'],
        ['対格', '-liardan', '-liardan'],
      ]}
    />
  </div>

  <p class="text-black/10">
    1,145,141,919,810<br />
    <i>
      an biljœn an-hundred-faif-and-fewrtaģ miliardan an-hundred-an-and-fewrtaģ miljonan
      nięw-hundred-newntųj ðawzend aght-hundred-tųj
    </i>
  </p>
</section>
<section aria-labelledby="ordinal">
  <h2 id="ordinal">序数詞 (Embyrdlajçrajman)</h2>
  <XTable
    class="[&_:where(td:nth-child(odd))]:text-end 
      [&_:where(td:nth-child(even))]:text-start 
      [&_:where(td:nth-child(odd))]:font-feat-['tnum']"
    data={[
      ['0.', 'zéroðe', '10.', 'tųjðe'],
      ['1.', 'fyrest', '11.', 'ęlęfte'],
      ['2.', 'óðer', '12.', 'tvelfte'],
      ['3.', 'ðritde', '13.', 'ðraotųjðe'],
      ['4.', 'fewrðe', '14.', 'fewrtųjðe'],
      ['5.', 'fajfte', '15.', 'fajftųjðe'],
      ['6.', 'sighte', '16.', 'sightųjðe'],
      ['7.', 'sœvonðe', '17.', 'sœftųjðe'],
      ['8.', 'aghtðe', '18.', 'aghtdųjðe'],
      ['9.', 'nięwðe', '19.', 'newntųjðe'],
    ]}
  />

  <p>
    序数詞は1&ndash;3は特殊な語形で、4以降は基数詞に <i>-ðe</i> をつける。ただし、 <i>-f, -v</i>
    で終わる 5. 11. 12. は
    <i>-fte</i>
    になり、6.は
    <i>sighte</i> と例外的に変化するので注意。
  </p>
  <p>8. <i>aghtðe</i> の <i>t</i> は読まなくてもよい。</p>
  <p>序数詞を形容詞として使うときは、<i>fyrest, óðer</i> を除き弱変化のみとなる。</p>
</section>

<UnderConstruction />
