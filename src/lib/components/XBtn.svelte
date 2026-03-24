<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { MouseEventHandler } from 'svelte/elements';

  interface BaseProps {
    onclick: MouseEventHandler<HTMLButtonElement>;
    class?: string;
  }

  interface ChildrenProps extends BaseProps {
    children: Snippet;
    'aria-label'?: string;
  }

  interface AriaLabelProps extends BaseProps {
    children?: Snippet;
    'aria-label': string;
  }

  type Props = ChildrenProps | AriaLabelProps;

  const { children, onclick, class: cName, 'aria-label': a }: Props = $props();
</script>

<button {onclick} class="my-btn {cName}" aria-label={a}>
  {@render children?.()}
</button>

<style lang="postcss">
  @reference '../../app.css';

  @layer components {
    .my-btn {
      @apply inline-block btn-theme-1;
    }
  }
</style>
