<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import CloseBtnIcon from '$lib/components/close_button.svelte';
  import HamburgerIcon from '$lib/components/hamburger.svelte';
  import MoonIcon from '$lib/components/moon-icon.svelte';
  import PageTopBtn from '$lib/components/page_top_btn.svelte';
  import SunIcon from '$lib/components/sun-icon.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
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

<header class="bg-highlight text-white h-16 flex items-center">
  <div class="flex *:flex-[0_0_auto] mx-auto justify-start w-[90%] gap-x-5">
    {#if !large}
      <button
        class="text-white any-hover:bg-white/20 transition-colors"
        type="button"
        aria-label="hamburger button"
        onclick={() => {
          drawerIsOpen = true;
        }}
      >
        <HamburgerIcon class="size-6" />
      </button>
    {/if}
    <h1 class="font-serif text-3xl">
      <a
        class="flex items-center text-white no-underline any-hover:bg-white/20 transition-colors"
        href="/.">悠久肆方体</a
      >
    </h1>
    <button
      aria-label="toggle color scheme"
      class="text-white ms-auto any-hover:bg-white/20 px-1 transition-colors"
      onclick={() => {
        const isDark = siteConfig.colorScheme === 'dark';
        siteConfig.colorScheme = isDark ? 'light' : 'dark';
      }}
    >
      {#if siteConfig.colorScheme === 'light'}
        <MoonIcon class="fill-current inline-block size-5" />
      {:else}
        <SunIcon class="fill-current inline-block size-5" />
      {/if}
    </button>
  </div>
</header>

<div class="flex flex-wrap *:min-w-0 overflow-x-clip">
  {#if large}
    <div>
      <nav class="non-drawer">
        <SideMenu />
      </nav>
    </div>
  {:else}
    <!-- drawer backdrop -->
    <button
      type="button"
      onclick={onClickCloseBtn}
      class="drawer-backdrop"
      data-open={drawerIsOpen ? '' : null}
      aria-label="close sidemenu"
    ></button>
    <nav class="drawer bgc-body" data-open={drawerIsOpen ? '' : null}>
      <div class="flex justify-end px-4">
        <button
          type="button"
          onclick={onClickCloseBtn}
          class="transition-colors any-hover:text-black/60"
        >
          <CloseBtnIcon class="size-6" />
        </button>
      </div>

      <SideMenu />
    </nav>
  {/if}

  <main
    class="flex-[1_0_0] bg-slate-50 d:bg-zinc-900 px-4 flex flex-col gap-y-5 min-h-[calc(100vh-64px)]"
  >
    {@render children()}
    <div class="h-5"></div>
  </main>
</div>

<PageTopBtn />

<style lang="postcss">
  @reference '../../app.css';
  @layer components {

    .drawer-backdrop {
      @apply block cursor-[initial] fixed invisible inset-0 z-10 bg-transparent
      transition-[visibility,background-color] overflow-x-hidden;

      &[data-open] {
        @apply visible bg-black/50;
      }
    }

    .drawer,
    .non-drawer {
      display: flex;
      flex-direction: column;
      row-gap: calc(var(--spacing) * 1);
      padding-block: calc(var(--spacing) * 4);
    }

    .drawer {
      height: 100vh;
      position: fixed;
      overflow-y: auto;
      z-index: 20;
      top: 0;
      left: 0;
      width: 18rem;
      transition-property: transform, visibility;
      transform: translate(-100%);
      transition-timing-function: cubic-bezier(0, 0, 1, 0);

      &[data-open] {
        transition-timing-function: cubic-bezier(0, 1, 1, 1);
        transform: translate(0);
      }
    }

    .non-drawer {
      height: 100vh;
      overflow-y: auto;
      position: sticky;
      top: 0;
    }

    div:has(> .non-drawer) {
      flex: 0 0 calc(6 / 24 * 100%);

      @media (width >= 80rem) {
        flex: 0 0 calc(5 / 24 * 100%);
      }

      @media (width >= 96rem) {
        flex: 0 0 calc(4 / 24 * 100%);
      }
    }
  }
</style>
