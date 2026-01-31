<script lang="ts">
  import type { Snippet } from 'svelte';
  import ExtLinkIcon from './ext_link_icon.svelte';

  type Props = {
    href: string;
    title?: string;
    class?: string;
    children?: Snippet;
    noIcon?: boolean;
  };

  const { href, children, class: className = '', noIcon = false, title }: Props = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer" class={className} {title}>
  {#if children}
    {@render children()}
  {/if}
  {#if !noIcon}
    <ExtLinkIcon class="inline-block w-[.75em] h-auto align-baseline" />
  {/if}
</a>

