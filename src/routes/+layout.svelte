<script lang="ts">
	import Toasts from '$lib/sfc/toasts.svelte';
	import '../app.css';
	const { children } = $props(), linkCardUrl = '/image/link-card.png';
</script>

<svelte:head>
	<!-- OGP -->
	<meta property="og:url" content="https://tktb-tess.dev" />
	<meta property="og:site_name" content="悠久肆方体" />
	<meta property="og:image" content="{linkCardUrl}" />
	<!-- Twitter card -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@triethylamineq" />
	<meta name="twitter:image" content="{linkCardUrl}" />
</svelte:head>

<Toasts />

{@render children()}
