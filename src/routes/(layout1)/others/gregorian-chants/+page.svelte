<script lang="ts">
  import XSection from '$lib/components/XSection.svelte';

  const {}: {} = $props();
</script>

<p>
  まず、グレゴリオ聖歌の教会旋法には大事な音が2つあり、それが<strong>フィナリス</strong
  >（finalis）と<strong>ドミナント</strong>（dominant）
  フィナリスは旋律の終わりに来る音、現代の主音に相当。ドミナントは旋律内で繰り返し使われまくる軸になる音、現代の属音に相当……というわけでもなく結構違う。
</p>

<XSection title="8つの旋法">
  <p>
    旋法は8つあるが、これらは4つの<strong>正格旋法</strong>と対応する4つの<strong>変格旋法</strong
    >（プラガル旋法）というのに分けられる。 変格は対応する正格とフィナリスが同じだが、音高の範囲（<strong
      >アンビトゥス</strong
    >
    (ambitus) という）とドミナントが違う。 変格には対応する正格の名前に<strong>ヒュポ</strong
    >（hypo-）をつける。
  </p>
  <p>旋法は順番に</p>
  <ul>
    <li>ドリア dorian</li>
    <li>ヒュポドリア hypodorian</li>
    <li>フリュギア phrygian</li>
    <li>ヒュポフリュギア hypophrygian</li>
    <li>リュディア lydian</li>
    <li>ヒュポリュディア hypolydian</li>
    <li>ミクソリュディア mixolydian</li>
    <li>ヒュポミクソリュディア hypomixolydian</li>
  </ul>
  <p>※イオニア（長調）ionian とアエオリア（短調）aeolian、ロクリア locrian は初期はない</p>
</XSection>
<XSection title="基本ルール">
  <p>フィナリスは</p>
  <ul>
    <li>ドリアがレ</li>
    <li>フリュギアがミ</li>
    <li>リュディアがファ</li>
    <li>ミクソリュディアがソ</li>
  </ul>
  <p>変格正格同じ</p>
  <p>
    ドミナントは正格ではフィナリスの5度上、変格では対の正格ドミナントの3度下
    <strong>ただしこのルールでドミナントが「シ」になる場合、1つ上げて「ド」にする。</strong>
    具体的にはフリュギア、ヒュポミクソリュディアに適用される。
  </p>
  <p>
    アンビトゥス（音高の範囲）は正格がフィナリスから1オクターブ、変格がフィナリスの4度下から1オクターブ<br
    />
    つまり正格では一番下、変格では大体真ん中らへんにフィナリスが来る 構成音は全部白鍵とする
  </p>
</XSection>
<XSection title="具体的な音階">
  <p>以下に全部書き下す。フィナリスは[]、ドミナントは()で囲う</p>
  <ol class="[&_:where(p:first-child)]:font-semibold">
    <li>
      <p>ドリア</p>
      <p>[レ] ミ ファ ソ (ラ) シ ド レ</p>
    </li>
    <li>
      <p>ヒュポドリア</p>
      <p>ラ シ ド [レ] ミ (ファ) ソ ラ</p>
    </li>
    <li>
      <p>フリュギア</p>
      <p>[ミ] ファ ソ ラ シ (ド) レ ミ</p>
    </li>
    <li>
      <p>ヒュポフリュギア</p>
      <p>シ ド レ [ミ] ファ ソ (ラ) シ</p>
      <p>※ドミナントに注意、フリュギアの(ド)から3度下げるのでこう</p>
    </li>
    <li>
      <p>リュディア</p>
      <p>[ファ] ソ ラ シ (ド) レ ミ ファ</p>
    </li>
    <li>
      <p>ヒュポリュディア</p>
      <p>ド レ ミ [ファ] ソ (ラ) シ ド</p>
    </li>
    <li>
      <p>ミクソリュディア</p>
      <p>[ソ] ラ シ ド (レ) ミ ファ ソ</p>
    </li>
    <li>
      <p>ヒュポミクソリュディア</p>
      <p>ミ ファ [ソ] ラ シ (ド) レ ミ</p>
    </li>
  </ol>
</XSection>
<XSection title="補足">
  <ul>
    <li>（ヒュポ）ドリアと（ヒュポ）リュディアではシが半音下がってシ♭になることがまあまあある</li>
    <li>音高範囲は絶対でなく1, 2音上下にはみ出ることもある</li>
  </ul>
</XSection>
