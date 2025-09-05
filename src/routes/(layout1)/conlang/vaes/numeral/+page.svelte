<script lang="ts">
  import { PUBLIC_SITE_NAME } from '$env/static/public';

  const ogTitle = 'Vässenzländisķ 数詞',
    ogDesc = 'かず！';
</script>

<svelte:head>
  <meta name="description" content={ogDesc} />
  <!-- OGP -->
  <meta property="og:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
  <meta property="og:description" content={ogDesc} />
  <!-- twitter card -->
  <meta name="twitter:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
  <meta name="twitter:description" content={ogDesc} />
  <title>{ogTitle} | {PUBLIC_SITE_NAME}</title>
</svelte:head>

<h2 class="text-center my-8">数詞</h2>
<p>ヴェッセンズラン語の数詞は概ね10進法である。</p>
<section aria-labelledby="cardinal">
  <h2 id="cardinal" class="border-b-3 border-double ps-1">基数詞 (Kardinalraiman)</h2>
  <h3>0&ndash;19</h3>
  <div class="table-container">
    <table class="grid-cols-[repeat(4,auto)] [&_td:nth-child(odd)]:text-end">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">数詞</th>
          <th scope="col"></th>
          <th scope="col">数詞</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0</td>
          <td>zero</td>
          <td>10</td>
          <td>tųy</td>
        </tr>
        <tr>
          <td>1</td>
          <td>an</td>
          <td>11</td>
          <td>änlöv</td>
        </tr>
        <tr>
          <td>2</td>
          <td>tvęģ</td>
          <td>12</td>
          <td>tvälv</td>
        </tr>
        <tr>
          <td>3</td>
          <td>ðrau</td>
          <td>13</td>
          <td>ðrautųy</td>
        </tr>
        <tr>
          <td>4</td>
          <td>fewr</td>
          <td>14</td>
          <td>fewrtųy</td>
        </tr>
        <tr>
          <td>5</td>
          <td>faiv</td>
          <td>15</td>
          <td>faiftųy</td>
        </tr>
        <tr>
          <td>6</td>
          <td>six</td>
          <td>16</td>
          <td>sightųy</td>
        </tr>
        <tr>
          <td>7</td>
          <td>sövon</td>
          <td>17</td>
          <td>söftųy</td>
        </tr>
        <tr>
          <td>8</td>
          <td>aght</td>
          <td>18</td>
          <td>aghdtųy</td>
        </tr>
        <tr>
          <td>9</td>
          <td>nięw</td>
          <td>19</td>
          <td>newntųy</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>19までの数詞は上のようになる。0はフランス語由来の <em>zero</em> である。</p>
  <p>
    それ以外は、11, 12が独自の単語で13以降が「1の位 +
    10」になる所など、他のゲルマン諸語と似たようなものとなっている。ただし15&ndash;19は若干変則的なので注意。
  </p>
  <p>
    1 <em>an</em> は不定冠詞 <em>an</em>
    と共通で、修飾する名詞の性・格に合わせて変化する。しかし、後ろに他の数詞が来るときは名詞の性にかかわらず主格形
    <em>an</em> が使われる。
  </p>
  <p>物を数えるときなど、単独で使う場合も <em>an</em> を使う。</p>
  <p>変化表は以下。</p>

  <div class="table-container">
    <table class="grid-cols-[repeat(4,auto)]">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">男性</th>
          <th scope="col">中性</th>
          <th scope="col">女性</th>
        </tr>
      </thead>
      <tbody class="[&_td]:text-start">
        <tr>
          <th scope="row">主格</th>
          <td>an</td>
          <td>an</td>
          <td>an</td>
        </tr>
        <tr>
          <th scope="row">属格</th>
          <td>anes</td>
          <td>anes</td>
          <td>anr</td>
        </tr>
        <tr>
          <th scope="row">与格</th>
          <td>anum</td>
          <td>anum</td>
          <td>anr</td>
        </tr>
        <tr>
          <th scope="row">対格</th>
          <td>änn</td>
          <td>an</td>
          <td>änn</td>
        </tr>
        <tr>
          <th scope="row">具格<sup>※</sup></th>
          <td>änn</td>
          <td>änn</td>
          <td>anr</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="text-center text-[0.8rem]">※具格は通常使われず、代わりに与格が使われる</p>
  <p>
    また、2 <em>tvęģ</em> は性によって変化する。
  </p>

  <p>変化表は以下。</p>
  <div class="table-container">
    <table class="grid-cols-[repeat(3,auto)]">
      <thead>
        <tr>
          <th scope="col">男性</th>
          <th scope="col">中性</th>
          <th scope="col">女性</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>tvęģ</td>
          <td>taw</td>
          <td>tva</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>ただし、後ろに他の数詞が来るときは名詞の性にかかわらず中性形の <em>taw</em> が使用される。</p>
  <p>単独で使う場合は男性形 <em>tvęģ</em> を使う。</p>
  <p>
    例. <em>Inr bylding sind taw ðawzend hunde.</em> &#8213; その建物の中には2000匹の犬がいる。
  </p>
  <p>
    例2. <em>Inr bylding sind ðawzend tvęģ hundas.</em> &#8213; その建物の中には1002匹の犬がいる。
  </p>

  <h3>20&ndash;999</h3>

  <div class="table-container">
    <table class="grid-cols-[repeat(6,auto)] [&_td:nth-child(odd)]:text-end">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">数詞</th>
          <th scope="col"></th>
          <th scope="col">数詞</th>
          <th scope="col"></th>
          <th scope="col">数詞</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>20</td>
          <td>tvintaģ</td>
          <td>30</td>
          <td>ðraitaģ</td>
          <td>40</td>
          <td>fewrtaģ</td>
        </tr>
        <tr>
          <td>21</td>
          <td>an-and-tvintaģ</td>
          <td>31</td>
          <td>an-and-ðräitaģ</td>
          <td>50</td>
          <td>faiftaģ</td>
        </tr>
        <tr>
          <td>22</td>
          <td>taw-and-tvintaģ</td>
          <td>32</td>
          <td>taw-and-ðraitaģ</td>
          <td>60</td>
          <td>sightaģ</td>
        </tr>
        <tr>
          <td>23</td>
          <td>ðrau-and-tvintaģ</td>
          <td>33</td>
          <td>ðrau-and-ðraitaģ</td>
          <td>70</td>
          <td>söftaģ</td>
        </tr>
        <tr>
          <td>24</td>
          <td>fewr-and-tvintaģ</td>
          <td>34</td>
          <td>fewr-and-ðraitaģ</td>
          <td>80</td>
          <td>aghdtaģ</td>
        </tr>
        <tr>
          <td>25</td>
          <td>faiv-and-tvintaģ</td>
          <td>35</td>
          <td>faiv-and-ðraitaģ</td>
          <td>90</td>
          <td>newntaģ</td>
        </tr>
        <tr>
          <td>26</td>
          <td>siks-and-tvintaģ</td>
          <td>36</td>
          <td>siks-and-ðraitaģ</td>
          <td>100</td>
          <td>(an-)hundred</td>
        </tr>
        <tr>
          <td>27</td>
          <td>sövon-and-tvintaģ</td>
          <td>37</td>
          <td>sövon-and-ðraitaģ</td>
          <td>110</td>
          <td>änlftaģ</td>
        </tr>
        <tr>
          <td>28</td>
          <td>aght-and-tvintaģ</td>
          <td>38</td>
          <td>aght-and-ðraitaģ</td>
          <td>120</td>
          <td>tvälftaģ</td>
        </tr>
        <tr>
          <td>29</td>
          <td>nięw-and-tvintaģ</td>
          <td>39</td>
          <td>nięw-and-ðraitaģ</td>
          <td>&ndash;</td>
          <td>&ndash;</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    21&ndash;99、<strong>および110&ndash;129</strong>は、「(1の位)-<em>and</em
    >-(10の位)」とハイフンで繋いで書く。
  </p>
  <p>
    110&ndash;129が特殊なので注意（20&ndash;99と同様に、「(1の位)-<em>and</em>-(<em>änlftaģ</em> or
    <em>tvälftaģ</em>)」という風に書く。）
  </p>
  <p>
    101&ndash;109、および130以降は 245 <em>taw-hundred-faif-and-fewrtaģ</em> のように「(100の位)-<i
      >hundred</i
    >-(1&ndash;99の数詞)」と繋げて書く。ただし、100の位が1のとき、<em>an</em> は省略できる。
  </p>
  <p>
    10の位の数詞は概ね対応する1の位の数詞に <em>-taģ</em> をつけたものであるが、ほとんどは1の位の数詞と微妙に異なるので注意。
  </p>
  <p>
    つまり上記のことを踏まえると、105は <em>(an-)hundred-faiv,</em> 115は <em>faiv-and-änlftaģ,</em>
    125は <em>faiv-and-tvälftaģ,</em> 135は <em>(an-)hundred-faiv-and-ðraitaģ</em> となる。
  </p>
  <p>
    20以上の数詞が名詞を修飾する場合、<strong>その名詞は複数属格になる</strong
    >ので注意。ただし元の格が主格や直接目的語を表す対格の時に限る。前置詞句や間接目的語などの場合は、元の格が優先される。
  </p>
  <p>2語以上からなる数詞の場合、名詞の直前に来る数詞のルールが適応される。</p>
  <p>
    例. <em>Inr bylding sind taw ðawzend apble.</em>（直前が1000 <em>ðawzend</em> なので複数属格）
  </p>
  <p>
    例2. <em>Inr bylding sind ðawzend tvęģ apblas.</em>（直前が2 <em>tvęģ</em> なので複数主格）
  </p>
  <h3>1000&ndash;</h3>

  <div class="table-container">
    <table class="grid-cols-[repeat(2,auto)] [&_td:first-child]:text-end">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">数詞</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1,000</td>
          <td>(an) ðawzend</td>
        </tr>
        <tr>
          <td>10,000</td>
          <td>taw ðawzend</td>
        </tr>
        <tr>
          <td>100,000</td>
          <td>(an-)hundred ðawzend</td>
        </tr>
        <tr>
          <td>10<sup>6</sup></td>
          <td>(an) miljönn</td>
        </tr>
        <tr>
          <td>10<sup>7</sup></td>
          <td>taw miljonnan</td>
        </tr>
        <tr>
          <td>10<sup>8</sup></td>
          <td>(an)hundred miljonnan</td>
        </tr>
        <tr>
          <td>10<sup>9</sup></td>
          <td>(an) miljard</td>
        </tr>
        <tr>
          <td>10<sup>10</sup></td>
          <td>taw miljardan</td>
        </tr>
        <tr>
          <td>10<sup>12</sup></td>
          <td>(an) biljönn</td>
        </tr>
        <tr>
          <td>10<sup>15</sup></td>
          <td>(an) biljard</td>
        </tr>
        <tr>
          <td>10<sup>18</sup></td>
          <td>(an) triljönn</td>
        </tr>
        <tr>
          <td>10<sup>21</sup></td>
          <td>(an) triljard</td>
        </tr>
        <tr>
          <td>・・・</td>
          <td>・・・</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>1,000以降の数詞は、他のヨーロッパ言語と同じように1,000毎に新たな数詞が用いられる。</p>
  <p>
    ヴェッセンズラン語の数詞はいわゆる “long scale” であり（ドイツ語やフランス語と同じ方式）、10<sup
      >6</sup
    >
    以降の数詞では 10<sup>6</sup> 倍毎に <em>-ljönn</em> 系の数詞が使われ、10<sup>3</sup> 倍は
    <em>-ljönn</em> を <em>-ljard</em> で置き換えた数詞で表される。
  </p>
  <p><em>ðawzend</em> や <em>-ljönn, -ljard</em> 系の数詞の前後にはスペースを入れる。</p>
  <p>
    <em>-ljönn, -ljard</em> 系の数詞は名詞として扱われ、数・格に応じて変化する。共に弱変化であり、変化表は以下。
  </p>
  <p>被修飾名詞は複数属格になるが、数詞自体は元の格になるので注意。</p>
  <div class="table-container flex max-md:flex-col max-md:gap-y-2 md:justify-around">
    <table class="mx-0 grid-cols-[repeat(3,auto)] [&_td]:text-start">
      <caption>-ljönn</caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">単数</th>
          <th scope="col">複数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">主格</th>
          <td>-ljönn</td>
          <td>-ljonnan</td>
        </tr>
        <tr>
          <th scope="row">属格</th>
          <td>-ljonnan</td>
          <td>-ljonne</td>
        </tr>
        <tr>
          <th scope="row">与格</th>
          <td>-ljonnan</td>
          <td>-ljonnum</td>
        </tr>
        <tr>
          <th scope="row">対格</th>
          <td>-ljonnan</td>
          <td>-ljonnan</td>
        </tr>
      </tbody>
    </table>
    <table class="mx-0 grid-cols-[repeat(3,auto)] [&_td]:text-start">
      <caption>-ljard</caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">単数</th>
          <th scope="col">複数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">主格</th>
          <td>-ljard</td>
          <td>-ljardan</td>
        </tr>
        <tr>
          <th scope="row">属格</th>
          <td>-ljardan</td>
          <td>-ljardne</td>
        </tr>
        <tr>
          <th scope="row">与格</th>
          <td>-ljardan</td>
          <td>-ljardum</td>
        </tr>
        <tr>
          <th scope="row">対格</th>
          <td>-ljardan</td>
          <td>-ljardan</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="text-black/10">
    1,145,141,919,810<br />
    <em>
      an biljönn an-hundred-faiv-and-fewrtaģ miljardan an-hundred-an-and-fewrtaģ miljonnan
      nięw-hundred-newntųy ðawzend aght-hundred-tųy
    </em>
  </p>
</section>
<section aria-labelledby="ordinal">
  <h2 id="ordinal" class="border-b-3 border-double ps-1">序数詞 (Ämbyrdlaiķraiman)</h2>
  <div class="table-container">
    <table class="grid-cols-[repeat(4,auto)] [&_td:nth-child(odd)]:text-end">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">数詞</th>
          <th scope="col"></th>
          <th scope="col">数詞</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0.</td>
          <td>zeroðe</td>
          <td>10.</td>
          <td>tųyðe</td>
        </tr>
        <tr>
          <td>1.</td>
          <td>fyrest</td>
          <td>11.</td>
          <td>änlfte</td>
        </tr>
        <tr>
          <td>2.</td>
          <td>uwðer</td>
          <td>12.</td>
          <td>tvälfte</td>
        </tr>
        <tr>
          <td>3.</td>
          <td>ðritde</td>
          <td>13.</td>
          <td>ðrautųyðe</td>
        </tr>
        <tr>
          <td>4.</td>
          <td>fewrðe</td>
          <td>14.</td>
          <td>fewrtųyðe</td>
        </tr>
        <tr>
          <td>5.</td>
          <td>faifte</td>
          <td>15.</td>
          <td>faiftųyðe</td>
        </tr>
        <tr>
          <td>6.</td>
          <td>sighte</td>
          <td>16.</td>
          <td>sightųyðe</td>
        </tr>
        <tr>
          <td>7.</td>
          <td>sövonðe</td>
          <td>17.</td>
          <td>söftųyðe</td>
        </tr>
        <tr>
          <td>8.</td>
          <td>aghtðe</td>
          <td>18.</td>
          <td>aghdtųyðe</td>
        </tr>
        <tr>
          <td>9.</td>
          <td>nięwðe</td>
          <td>19.</td>
          <td>newntųyðe</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    序数詞は1&ndash;3は特殊な語形で、4以降は基数詞に <em>-ðe</em> をつける。ただし5, 11, 12など
    <em>-v</em>
    で終わる数詞は <em>-fte</em> に変え、6.は <em>sighte</em> と例外的に変化するので注意。
  </p>
  <p>8. <em>aghtðe</em> の <em>t</em> は読まなくてもよい。</p>
  <p>序数詞を形容詞として使うときは、<em>fyrest, uwðer</em> を除き弱変化のみとなる。</p>
</section>

<h4 class="text-center my-8 text-[red] text-2xl">工事中…</h4>

<style>
</style>
