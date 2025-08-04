<script lang="ts">
	import { PUBLIC_SITE_NAME } from "$env/static/public";
	import ExtLink from "$lib/sfc/ext_link.svelte";

	const ogTitle = 'データ',
		ogDesc = '';
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
