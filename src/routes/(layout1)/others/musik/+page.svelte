<script lang="ts">
	import { nameMap } from "./nameMap";
	const ogTitle = '音楽',
		ogDesc = '作曲は楽しい';
	
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

{#each nameMap as [id, title] (id)}
	<section aria-labelledby={id}>
		<h3 {id}>{title}</h3>
		<audio src="/audio/{id}.m4a" controls></audio>
	</section>
{/each}
