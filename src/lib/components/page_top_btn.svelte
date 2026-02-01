<script lang="ts">
  import { scrollY } from 'svelte/reactivity/window';
  import type { MouseEventHandler } from 'svelte/elements';
  import { browser } from '$app/environment';

  const isInvisible = $derived(typeof scrollY.current === 'number' ? scrollY.current < 600 : false);

  const onclick: MouseEventHandler<HTMLButtonElement> = () => {
    if (browser) {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  };
</script>

<button
  {onclick}
  id="to-page-top-btn"
  type="button"
  aria-label="ページトップへ戻る"
  data-invisible={isInvisible ? '' : null}
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M18.78 15.78a.749.749 0 0 1-1.06 0L12 10.061 6.28 15.78a.749.749 0 1 1-1.06-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 0 1 0 1.06Z"
    />
  </svg>
</button>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    #to-page-top-btn {
      @apply block fixed right-5 bottom-5 p-0.5 rounded-[50%] bg-transparent ctext-accent any-hover:cbg-accent any-hover:ctext-textinv
		  transition-[color,background-color,opacity,visibility] data-invisible:opacity-0 data-invisible:invisible;

      > svg {
        @apply size-8 align-baseline;
      }
    }
  }
</style>
