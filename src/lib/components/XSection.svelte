<script lang="ts">
  import type { Snippet } from 'svelte';
  import { toBase64 } from '@tktb-tess/util-fns';

  interface Props {
    readonly title: string;
    readonly class?: string;
    readonly children?: Snippet;
  }
  const en = new TextEncoder();
  const { title, class: className, children }: Props = $props();
  const id = $derived('section-' + toBase64(en.encode(title)));
</script>

<section aria-labelledby={id} class={className}>
  <h2 {id}>{title}</h2>
  {@render children?.()}
</section>
