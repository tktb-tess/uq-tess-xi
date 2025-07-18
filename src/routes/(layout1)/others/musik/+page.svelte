<script lang="ts">
	import { onMount } from 'svelte';

	const ogTitle = '音楽',
		ogDesc = '作曲は楽しい';
	const musicNames = ['welcome', 'celeste'];
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

<h2 class="my-8 text-center">音楽</h2>

{#each musicNames as name}
	<section aria-labelledby={name}>
		<h3 id={name}>{name}</h3>
		<audio src="/audio/{name}.m4a" controls></audio>
	</section>
{/each}
