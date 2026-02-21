<script lang="ts">
  import { scrollY } from 'svelte/reactivity/window';
  import type { MouseEventHandler } from 'svelte/elements';
  import { browser } from '$app/environment';

  const isVisible = $derived(typeof scrollY.current === 'number' ? scrollY.current > 600 : false);

  const onclick: MouseEventHandler<HTMLButtonElement> = () => {
    if (browser) window.scroll({ top: 0, behavior: 'smooth' });
  };
</script>

<button
  {onclick}
  id="to-page-top-btn"
  type="button"
  title="ページトップへ戻る"
  data-visible={isVisible || null}
>
  <div class="arrow"></div>
</button>

<style lang="postcss">
  @reference '../../app.css';
  @layer properties, theme, base, components, utilities;
  @layer components {
    #to-page-top-btn {
      @apply hidden place-content-center fixed right-5 bottom-5 size-10 rounded cbg-accent ctext-textinv
        any-hover:cbg-accent-lighter opacity-0
		    transition-[background-color,opacity,display] allow-discrete ease-linear duration-140;

      &[data-visible] {
        @apply opacity-100 grid;

        @starting-style {
          @apply opacity-0;
        }
      }
    }

    .arrow {
      @apply size-2 border-l-2 border-t-2 border-current;
      transform: translateY(3px) rotateZ(45deg);
    }
  }
</style>
