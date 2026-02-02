<script lang="ts">
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  import ExtLink from '$lib/components/ext_link.svelte';

  const ogTitle = 'データ';
  const ogDesc = 'でーた！';
</script>



<h2 class="my-8 text-center">データ</h2>
<ul>
  <li><a href="/data/conlang-xcumon">人工言語製作者に50の質問</a></li>
  <li>
    <a href="/data/OE-verb-conj-type" class="link-disabled">古英語 動詞活用まとめ (準備中)</a>
  </li>
  <li>
    <ExtLink href="https://apps.tktb-tess.dev/conlang-gacha">人工言語ガチャ</ExtLink> …日本語圏の人工言語をランダムに1つ表示する。
  </li>
</ul>
<p class="text-red-600 text-xl text-center">工事中……</p>
