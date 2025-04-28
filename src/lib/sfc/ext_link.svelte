<script lang="ts">
	import type { Snippet } from 'svelte';
	import ExtLinkIcon from './ext_link_icon.svelte';
	type Props = {
		href: string;
		class?: string;
		children?: Snippet;
	};
	const { href, children, class: className = '' }: Props = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer" class={className}>
	{#if children}
		{@render children()}
	{/if}
	<ExtLinkIcon class="size-3" />
</a>
