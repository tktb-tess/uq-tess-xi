<script lang="ts">
	import { page } from '$app/state';
	import TessLogo from '$lib/sfc/tess_logo.svelte';

	const ogTitle = `${page.status} ${page.error?.message ?? ''}`;
	const ogDesc = ogTitle;
</script>

<svelte:head>
	<meta name="description" content={ogDesc} />
	<!-- OGP -->
	<meta property="og:title" content="{ogTitle} - 悠久肆方体" />
	<meta property="og:description" content={ogDesc} />
	<!-- twitter card -->
	<meta name="twitter:title" content="{ogTitle} - 悠久肆方体" />
	<meta name="twitter:description" content={ogDesc} />
	<title>{ogTitle} - 悠久肆方体</title>
</svelte:head>

<div
	class="bg-llila min-h-screen flex flex-col justify-center items-center *:max-w-full gap-4 overflow-hidden **:m-0"
>
	<TessLogo class="size-50 fill-black block animate-[spin_30s_linear_infinite]" />
	<h2 class="text-6xl font-extralight font-sans">Hoppla!</h2>
	<p class="">
		{#if page.status === 404}
			お探しのページは見つかりませんでした。移動あるいは削除された可能性があります。
		{:else}
			{page.status} {page.error?.message ?? 'No message'}
		{/if}
	</p>
	<a href="/." class="block bg-mnlila hover:bg-mnlila/60 transition-colors no-underline text-white px-2 text-lg rounded">トップに戻る</a>
</div>

<style>
</style>
