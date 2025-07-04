<script lang="ts">
	const ogTitle = '音楽',
		ogDesc = '作曲は楽しい';
	let nowPlaying = $state<HTMLAudioElement | null>(null);
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
<p class="text-red-600 text-xl text-center">工事中……</p>
