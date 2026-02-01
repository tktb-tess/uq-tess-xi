<script lang="ts">
  import type { Snippet } from 'svelte';
  import { toBase64 } from '@tktb-tess/util-fns';

  interface Props {
    readonly title: string;
    readonly class?: string;
    readonly children: Snippet;
  }

  const { title, class: className, children }: Props = $props();
  const id = 'section-' + toBase64(crypto.getRandomValues(new Uint8Array(12)));
</script>

<section aria-labelledby={id} class={className}>
  <h2 {id}>{title}</h2>
  {@render children()}
</section>
