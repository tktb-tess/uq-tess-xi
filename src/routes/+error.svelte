<script lang="ts">
	import { page } from '$app/state';
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import UqTessLogo_2 from '$lib/sfc/uq-tess-logo-2.svelte';

	const ogTitle = `${page.status}${page.error ? ` ${page.error.message}` : ''}`;
	const ogDesc = 'そこに無ければ無いですね';
</script>

<svelte:head>
	<meta name="description" content={ogDesc} />
	<!-- OGP -->
	<meta property="og:title" content="{ogTitle} - {PUBLIC_SITE_NAME}" />
	<meta property="og:description" content={ogDesc} />
	<!-- twitter card -->
	<meta name="twitter:title" content="{ogTitle} - {PUBLIC_SITE_NAME}" />
	<meta name="twitter:description" content={ogDesc} />
	<title>{ogTitle} - {PUBLIC_SITE_NAME}</title>
</svelte:head>

<div
	class="px-3 min-h-screen flex flex-col justify-center items-center *:max-w-full gap-4 overflow-hidden **:m-0"
>
	<div class="animate-[up-down_3s_cubic-bezier(.4,0,.6,1)_infinite_alternate]">
		<UqTessLogo_2 class="size-50 fill-black block animate-[spin_40s_linear_infinite]" />
	</div>
	<h2 class="text-6xl font-extralight font-sans">Hoppla!</h2>
	<p class="text-center">
		{#if page.status === 404}
			お探しのページは見つかりませんでした。<br class="md:hidden" />移動あるいは削除された可能性があります。
		{:else}
			{page.status} {page.error?.message ?? 'No message'}
		{/if}
	</p>
	<a href="/." class="block btn-1">トップに戻る</a>
</div>

<style>
</style>
