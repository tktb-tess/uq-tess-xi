<script lang="ts">
  import { scrollY } from 'svelte/reactivity/window';
  import type { MouseEventHandler } from 'svelte/elements';
  import { browser } from '$app/environment';

  const isInvisible = $derived(typeof scrollY.current === 'number' ? scrollY.current < 600 : false);

  const onclick: MouseEventHandler<HTMLButtonElement> = () => {
    if (browser) window.scroll({ top: 0, behavior: 'smooth' });
  };
</script>

<button
  {onclick}
  id="to-page-top-btn"
  type="button"
  title="ページトップへ戻る"
  data-invisible={isInvisible ? '' : null}
>
  <div class="arrow"></div>
</button>

<style lang="postcss">
  @reference '../../app.css';
  @layer properties, theme, base, components, utilities;
  @layer components {
    #to-page-top-btn {
      @apply grid place-content-center fixed right-5 bottom-5 p-3 rounded bg-transparent ctext-accent
        any-hover:cbg-accent any-hover:ctext-textinv
        data-invisible:opacity-0 data-invisible:hidden
		    transition-[color,background-color,opacity,display] allow-discrete ease-linear duration-140;

      @starting-style {
        @apply opacity-0;
      }
    }

    .arrow {
      @apply size-3 border-l-2 border-t-2 border-current;
      transform: translateY(.24rem) rotateZ(45deg);
    }
  }
</style>
