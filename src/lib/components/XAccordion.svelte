<script lang="ts">
  import type { Snippet } from 'svelte';

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
  let details: HTMLDetailsElement | undefined;
  let content: HTMLDivElement | undefined;
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
        anim.addEventListener(
          'finish',
          () => {
            if (details) {
              details.open = false;
            }
            isRunning = false;
          },
          { once: true },
        );
      } else {
        details.open = true;
        isOpen = true;
        const anim = content.animate(openingAni, aniOptions);
        anim.addEventListener(
          'finish',
          () => {
            isRunning = false;
          },
          { once: true },
        );
      }
    }}
  >
    <span>{summary}</span>
    <div class="__arrow"></div>
  </summary>
  <div class="__details-content {isRunning ? 'overflow-y-clip' : null}" bind:this={content}>
    {@render children?.()}
  </div>
</details>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    summary {
      @apply grid cursor-pointer grid-cols-[1fr_1.5rem] items-center;

      &::-webkit-details-marker {
        @apply hidden;
      }
    }

    .__arrow {
      @apply size-2 border-e-2 border-b-2 border-current justify-self-center
      transition-transform duration-(--d-icon-rotate) ease-in-out-1;

      :not([data-opened]) & {
        transform: translateY(-2px) rotateZ(45deg);
      }

      [data-opened] & {
        transform: rotateX(180deg) translateY(-2px) rotateZ(45deg);
      }
    }
  }
</style>
