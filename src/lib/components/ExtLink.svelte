<script lang="ts">
  import type { Snippet } from 'svelte';
  import BoxArrowIcon from '$lib/icons/BoxArrowIcon.svelte';

  interface Base {
    href: string;
    class?: string;
    noIcon?: boolean;
  }

  interface WithChildren extends Base {
    title?: string;
    children: Snippet;
  }
  interface WithTitle extends Base {
    title: string;
    children?: Snippet;
  }

  type Props = WithChildren | WithTitle;

  const { href, children, class: className, noIcon = false, title }: Props = $props();
</script>

<!-- eslint-disable -->
<a {href} target="_blank" class={className} {title}>
  {#if children}
    {@render children()}
  {/if}
  {#if !noIcon}
    <BoxArrowIcon />
  {/if}
</a>
<!-- eslint-enable -->
