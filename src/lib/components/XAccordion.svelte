<script lang="ts">
  import type { Snippet } from 'svelte';
  import ArrowIcon from './ArrowIcon.svelte';

  interface Props {
    summary?: string;
    children?: Snippet;
    duration?: number;
    easing?: string;
    class?: string;
  }

  const {
    children,
    class: cName,
    summary,
    duration = 240,
    easing = 'cubic-bezier(0.25, 0, 0.1, 1)',
  }: Props = $props();

  let isOpen = $state(false);
  let details: HTMLDetailsElement | undefined = $state();
  let content: HTMLDivElement | undefined = $state();
  let isRunning = $state(false);
  const openingAni = $derived.by((): Keyframe[] | undefined => {
    if (!content) return;
    return [{ height: '0' }, { height: `${content.scrollHeight}px` }];
  });

  const closingAni = $derived.by((): Keyframe[] | undefined => {
    if (!content) return;
    return [{ height: `${content.scrollHeight}px` }, { height: '0' }];
  });

  const aniOptions: KeyframeAnimationOptions = $derived({
    duration,
    easing,
  });
</script>

<details
  id="accordion"
  class={cName}
  bind:this={details}
  data-opened={isOpen || null}
  data-running={isRunning || null}
  style:--d-icon-rotate={`${duration}ms`}
>
  <summary
    onclick={(ev) => {
      ev.preventDefault();
      if (!content || !openingAni || !closingAni || !details) return;
      if (isRunning) return;
      isRunning = true;
      if (details.open) {
        isOpen = false;
        const anim = content.animate(closingAni, aniOptions);
        anim.onfinish = () => {
          if (details) {
            details.open = false;
          }
          isRunning = false;
        };
      } else {
        details.open = true;
        isOpen = true;
        const anim = content.animate(openingAni, aniOptions);
        anim.onfinish = () => {
          isRunning = false;
        };
      }
    }}
  >
    <ArrowIcon
      class="inline-block h-6 in-data-opened:rotate-x-180 transition-transform ease-in-out-1 duration-(--d-icon-rotate)"
    />
    <span>{summary}</span>
  </summary>
  <div class="__details-content" bind:this={content}>
    {@render children?.()}
  </div>
</details>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    summary {
      @apply block cursor-pointer;

      &::-webkit-details-marker {
        @apply hidden;
      }
    }

    [data-running] > .__details-content {
      @apply overflow-y-clip;
    }
  }
</style>
