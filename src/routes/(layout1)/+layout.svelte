<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import CloseBtnIcon from '$lib/components/close_button.svelte';
  import HamburgerIcon from '$lib/components/hamburger.svelte';
  import MoonIcon from '$lib/components/moon-icon.svelte';
  import PageTopBtn from '$lib/components/page_top_btn.svelte';
  import SunIcon from '$lib/components/sun-icon.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import ToggleColorSchemeBtn from '$lib/components/toggle-color-scheme-btn.svelte';
  import type { MouseEventHandler } from 'svelte/elements';
  import { innerWidth } from 'svelte/reactivity/window';
  import { siteConfig, key } from '$lib/modules/site-config.svelte';

  const { children } = $props();
  let drawerIsOpen = $state(false);

  const large = $derived(
    typeof innerWidth.current === 'number' ? innerWidth.current > 1024 : false,
  );

  const onClickCloseBtn: MouseEventHandler<HTMLButtonElement> = () => {
    drawerIsOpen = false;
  };

  onNavigate(async () => {
    drawerIsOpen = false;
  });

  $effect(() => {
    localStorage.setItem(key, JSON.stringify(siteConfig));
  });
</script>

<header>
  <div>
    {#if !large}
      <button
        type="button"
        aria-label="hamburger button"
        onclick={() => {
          drawerIsOpen = true;
        }}
      >
        <HamburgerIcon />
      </button>
    {/if}
    <h1>
      <a href="/.">悠久肆方体</a>
    </h1>
    <ToggleColorSchemeBtn />
  </div>
</header>

<div>
  {#if large}
    <div>
      <nav>
        <SideMenu />
      </nav>
    </div>
  {:else}
    <!-- drawer backdrop -->
    <button
      type="button"
      onclick={onClickCloseBtn}
      data-open={drawerIsOpen ? '' : null}
      aria-label="close sidemenu"
    ></button>
    <nav data-open={drawerIsOpen ? '' : null}>
      <div>
        <button type="button" onclick={onClickCloseBtn}>
          <CloseBtnIcon />
        </button>
      </div>

      <SideMenu />
    </nav>
  {/if}

  <main>
    {@render children()}
    <div></div>
  </main>
</div>

<PageTopBtn />

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    
  }
</style>
