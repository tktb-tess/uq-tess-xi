<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';

	const ogTitle = 'Vässenzländisķ 動詞',
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

<h2 class="my-8 text-center">動詞</h2>
<p class="text-red-600 text-xl text-center">工事中……</p>
