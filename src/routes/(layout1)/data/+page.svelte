<script lang="ts">
  import ExtLink from '$lib/components/ExtLink.svelte';
  import UnderConstruction from '$lib/components/UnderConstruction.svelte';
  const {}: {} = $props();
</script>

<ul>
  <li><a href="/data/conlang-xcumon">人工言語製作者に50の質問</a></li>
  <li>
    <a href="/data/OE-verb-conj-type" class="link-disabled">古英語 動詞活用まとめ (準備中)</a>
  </li>
  <li>
    <ExtLink href="https://apps.tktb-tess.dev/conlang-gacha">人工言語ガチャ</ExtLink> …日本語圏の人工言語をランダムに1つ表示する。
  </li>
</ul>
<UnderConstruction />
