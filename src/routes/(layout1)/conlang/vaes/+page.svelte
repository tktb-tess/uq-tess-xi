<script lang="ts">
  import ExtLink from '$lib/components/ExtLink.svelte';
  import UnderConstruction from '$lib/components/UnderConstruction.svelte';
  import XSection from '$lib/components/XSection.svelte';
  const {}: {} = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&family=Noto+Sans+TC:wght@100..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<p>
  <strong>ヴェッセンズラン語</strong>、または<strong>ヴェッセンズランド語</strong
  >は、インド・ヨーロッパ語族ゲルマン語派アングロ・フリジア語群に属し、
  大西洋の島国、ヴェッセンズラン共和国で主に話される言語であり、また同国の公用語である。
  話者数約50万人。 略称は<strong>葦語</strong>。
</p>
<h3>各国語表記</h3>
<ul>
  <li>葦: vessenzlendisç spreç / vessenzlendisç</li>
  <li>日: ヴェッセンズラン語 / 葦語</li>
  <li>英: Vessenslandic language / Vessenslandic</li>
  <li>独: wessensländische Sprache / Wessensländisch</li>
  <li>仏: le vessenslandais</li>
  <li>
    中(<span class="noto-sans-sc">简</span>): <span class="noto-sans-sc">苇森斯兰语</span> (拼音:
    <span class="font-ipa">wěi sēn sī lán yǔ</span>) / <span class="noto-sans-sc">西端岛语</span>
    (拼音: <span class="font-ipa">xī duān dǎo yǔ</span>)
  </li>
  <li>
    中(<span class="noto-sans-tc">繁</span>): <span class="noto-sans-tc">葦森斯蘭語</span> /
    <span class="noto-sans-tc">西端島語</span>
  </li>
</ul>
<XSection title="各ページリンク">
  <ul>
    <li><a href="/conlang/vaes/phonology">音韻論</a></li>
    <li><a href="/conlang/vaes/letter-et-pron">文字と発音</a></li>
    <li><a href="/conlang/vaes/swadesh-list">Swadesh List</a></li>
    <li>りんごを食べたい58文 (準備中)</li>
    <li>
      文法
      <ul>
        <li>名詞 (準備中)</li>
        <li><a href="/conlang/vaes/numeral">数詞</a></li>
        <li>動詞 (準備中)</li>
        <li>形容詞 (準備中)</li>
      </ul>
    </li>
    <li><ExtLink href="https://zpdic.ziphil.com/dictionary/633">辞書 (ZpDIC Online)</ExtLink></li>
  </ul>
</XSection>
<XSection title="概要">
  <p>古英語以降英語と分岐した言語であり、言語系統的には英語にかなり近い。</p>
  <p>
    英語の語形変化がフランス語との接触などの要因により大幅に簡略化したのに対し、ヴェッセンズラン語は、古英語の語形変化のほとんどを今なお維持していることが特徴である。
  </p>
  <p>
    成立過程でウェセックス方言とノーサンブリア方言が混ざったため、ノーサンブリア方言や古ノルド語の影響を受けた。
  </p>
</XSection>
<XSection title="歴史">
  <p>
    古英語の時代&#9608;&#9608;世紀ごろに、当時のウェセックスとノーサンブリア地方にいたアングロ・サクソン人がヴェッセンズラン島に移り住んだのが最初である。
  </p>
  <p>
    その後、グレートブリテン島ではノルマン・コンクエストなどの様々な出来事が起こり、英語の形態は大きく変化していくが、ヴェッセンズラン語はそのような変化をあまり被らなかった。
  </p>
</XSection>

<UnderConstruction />

<style lang="postcss">
  @reference '../../../../app.css';
  @layer components {
    .noto-sans-sc {
      font-family: 'Noto Sans SC', sans-serif;
    }

    .noto-sans-tc {
      font-family: 'Noto Sans TC', sans-serif;
    }
  }
</style>
