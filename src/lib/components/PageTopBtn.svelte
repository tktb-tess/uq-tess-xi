<script lang="ts">
  import { scrollY } from 'svelte/reactivity/window';
  import type { MouseEventHandler } from 'svelte/elements';

  const isVisible = $derived(typeof scrollY.current === 'number' ? scrollY.current > 600 : false);

  const onclick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault();
    window.scroll({ top: 0, behavior: 'smooth' });
  };
</script>

<button
  {onclick}
  class="to-page-top-btn"
  aria-label="ページトップへ戻る"
  data-visible={isVisible || null}
>
</button>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    .to-page-top-btn {
      @apply hidden place-content-center fixed right-5 bottom-5 size-10 rounded cbg-accent ctext-textinv
        hover-focus:cbg-accent-lighter opacity-0
		    transition-[background-color,opacity,display] allow-discrete ease-linear duration-140;

      &[data-visible] {
        @apply opacity-100 grid;

        @starting-style {
          @apply opacity-0;
        }
      }
    }

    .to-page-top-btn::before {
      @apply block size-2 border-l-2 border-t-2 border-current
      transition-[translate] duration-140;
      content: '';
      rotate: 45deg;
      translate: 0 3px;
    }

    @media (any-hover: hover) {
      .to-page-top-btn:hover::before {
        translate: 0 0;
      }
    }

    .to-page-top-btn:focus-visible::before {
      translate: 0 0;
    }
  }
</style>
