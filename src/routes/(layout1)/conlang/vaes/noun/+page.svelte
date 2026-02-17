<script lang="ts">
  import XSection from '$lib/components/XSection.svelte';
  const {}: {} = $props();
</script>

<XSection title="名詞の性">
  <p>
    ヴェッセンズラン語の名詞には3つの性があり、<strong>男性・中性・女性</strong
    >に分けられる。いくつか例を挙げると、
  </p>
  <ul>
    <li>男性名詞: fader(父), znake(ヘビ) etc.</li>
    <li>中性名詞: ujland(島), mejden(少女) etc.</li>
    <li>女性名詞: móder(母), bócc(本) etc.</li>
  </ul>
  <p>
    の如くである。 <i>fader, móder</i>
    など、実際の性別に関係ある語もあるが、あくまで文法的な範疇であり、上に挙げた <i>mejden</i> などの例もあるので、実際の性別とは分けて考えた方が良い。
  </p>
  <p>
    冠詞・形容詞などはこの名詞の性に応じて異なる形になるので、重要である。見分け方があればよいのだが、生憎うまい方法がないので個別に覚えていく他ない。
  </p>
  <p>なお、複合語は最後の要素の性になるのが普通。</p>
</XSection>

<XSection title="名詞の格・数">
  <p>
    ヴェッセンズラン語の名詞は文中での機能を示すために語尾や母音を変化させることがある。これを<strong
      >格変化</strong
    >という。ヴェッセンズラン語には<strong>主格・属格・与格・対格</strong
    >の4種類の格がある。大まかな意味は以下のようになる。
  </p>
  <ul>
    <li>主格: 主語を表す。日本語の「〜が, 〜は」に相当。</li>
    <li>属格: 所有していることを表す。「〜の」に相当。</li>
    <li>与格: 間接目的語などを表す。「〜に」に相当。</li>
    <li>対格: 直接目的語などを表す。「〜を」に相当。</li>
  </ul>
  <p>móder(母) を例にしてみてみると、</p>
  <ul>
    <li>主格: <i>Sew móder</i> ietð enn apbel. —— 母はリンゴを食べる。</li>
    <li>属格: Ðis iss sew orlözķ <i>ðiar meder</i>. —— これは母の腕時計だ。</li>
    <li>与格: Se fader jaav <i>ðiar meder</i> enn bóck. —— 父は母に本をあげた。</li>
    <li>対格: Ðat mejden ðankð <i>ða móder</i>. —— 娘は母に感謝する。</li>
  </ul>
  <p>のようになる。sew, ðiar, ða は定冠詞で、格に応じて変化している。</p>
</XSection>
