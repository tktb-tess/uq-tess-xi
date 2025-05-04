<script lang="ts">
	import '../app.css';
	const { children } = $props();
</script>

<svelte:head>
	<!-- OGP -->
	<meta property="og:url" content="https://tktb-tess.dev" />
	<meta property="og:site_name" content="悠久肆方体" />
	<meta property="og:image" content="/image/link-card.png" />
	<!-- Twitter card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@triethylamineq" />
	<meta name="twitter:image" content="/image/link-card.png" />
</svelte:head>

{@render children()}
