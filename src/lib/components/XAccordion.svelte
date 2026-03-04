<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    summary?: string;
    children?: Snippet;
    duration?: number;
    class?: string;
    height?: number;
  }

  const { children, class: cName, summary: summaryText, duration = 240, height }: Props = $props();
  let content: HTMLDivElement | undefined = $state();
  const openHeight = $derived(
    height != null ? `${height}px` : `${(content?.scrollHeight ?? 0) + 4}px`,
  );
</script>

<details
  class="accordion {cName}"
  style:--accordion-transition-duration={`${duration}ms`}
  style:--open-height={openHeight}
>
  <summary>
    <span>{summaryText}</span>
    <div class="arrow"></div>
  </summary>
  <div bind:this={content}>
    {@render children?.()}
  </div>
</details>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    .accordion::details-content {
      @apply transition-[height,content-visibility] allow-discrete
      duration-(--accordion-transition-duration) overflow-y-clip;
    }

    .accordion:not([open])::details-content {
      @apply h-0;
    }

    .accordion[open]::details-content {
      @apply h-(--open-height);
    }

    summary {
      @apply grid cursor-pointer grid-cols-[1fr_1.5rem] items-center;

      &::-webkit-details-marker {
        @apply hidden;
      }
    }

    .arrow {
      @apply size-2 border-r-2 border-b-2 border-current justify-self-center
      transition-transform duration-(--accordion-transition-duration);

      .accordion:not([open]) & {
        transform: translateY(-2px) rotateZ(45deg);
      }

      .accordion[open] & {
        transform: rotateX(180deg) translateY(-2px) rotateZ(45deg);
      }
    }
  }
</style>
