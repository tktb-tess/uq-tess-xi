<script lang="ts">
	import FromBase64 from './fromBase64.svelte';
	import ToBase64 from './toBase64.svelte';
	import OddCalculator from './oddCalculator.svelte';
	import PrimGuessr from './primGuessr.svelte';
	const ogTitle = 'ツール',
		ogDesc = '色々な計算';
	const { data } = $props();
	const { seeds, exps, logs } = data;
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

<div class="flex flex-col gap-8">
	<ToBase64 seed={seeds[0]} />
	<FromBase64 seed={seeds[1]} />
	<OddCalculator {exps} {logs} seed={seeds[2]} />
	<PrimGuessr seed={seeds[2]} />
	<h5 class="text-center text-[red] text-2xl my-8">工事中……</h5>
</div>
