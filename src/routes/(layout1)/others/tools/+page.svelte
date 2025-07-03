<script lang="ts">
	import FromBase64 from "./fromBase64.svelte";
	import ToBase64 from "./toBase64.svelte";
	const ogTitle = 'ツール',
		ogDesc = '色々な計算';
	const { data } = $props();
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

<h2 class="my-8 text-center">ツール</h2>

<ToBase64 seed={data.seeds[0]} />
<FromBase64 seed={data.seeds[1]} />