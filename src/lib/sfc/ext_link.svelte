<script lang="ts">
	import type { Snippet } from 'svelte';
	import ExtLinkIcon from './ext_link_icon.svelte';
	type Props = {
		href: string;
		children?: Snippet;
	};
	const { href, children }: Props = $props();
</script>

<a {href} target="_blank" rel="noreferrer">
	{#if children}
		{@render children()}
	{/if}
	<ExtLinkIcon />
</a>
