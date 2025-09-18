<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import CloseButton from '$lib/sfc/close_button.svelte';
  import Hamburger from '$lib/sfc/hamburger.svelte';
  import MoonIcon from '$lib/sfc/moon-icon.svelte';
  import PageTopBtn from '$lib/sfc/page_top_btn.svelte';
  import SunIcon from '$lib/sfc/sun-icon.svelte';
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

  onNavigate(() => {
    return new Promise((res) => {
      drawerIsOpen = false;
      res();
    });
  });

  $effect(() => {
    localStorage.setItem(key, JSON.stringify(siteConfig));
  });
</script>

<svelte:head>
  <meta property="og:type" content="article" />
</svelte:head>

{#snippet sideMenu()}
  <div
    class="
      side-menu [&_a]:textc-text [&_a]:no-underline
      [&_:where(a,summary)]:transition-colors [&_:where(a,summary)]:py-2 [&_:where(a,summary)]:rounded-[.5rem]
      [&_:where(a,summary)]:hover:bgc-highlight [&_:where(a,summary)]:hover:textc-textinv
    "
  >
    <h4 class="text-2xl font-sans textc-text font-extralight">VÄSSENZLÄNDISĶ</h4>
    <div class="flex flex-col">
      <a href="/conlang/vaes">概説</a>
      <a href="/conlang/vaes/letter-et-pron">文字と発音</a>
      <a href="/conlang/vaes/phonology">音韻論</a>
      <a href="/conlang/vaes/swadesh-list">Swadesh List</a>
      <a aria-disabled="true">りんご文 (準備中)</a>
      <details class="[&[open]_#list-arrow]:rotate-x-180">
        <summary class="block cursor-pointer user-select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="fill-current inline-block size-4.5 translate-y-[-1px] duration-250"
            id="list-arrow"
          >
            <path
              d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"
            />
          </svg>
          文法
        </summary>
        <div
          class="
						flex flex-col overflow-y-hidden
					"
        >
          <a aria-disabled="true">名詞 (準備中)</a>
          <a href="/conlang/vaes/numeral">数詞</a>
          <a aria-disabled="true">動詞 (準備中)</a>
          <a aria-disabled="true">形容詞 (準備中)</a>
        </div>
      </details>
    </div>
  </div>
  <hr class="border-black/30 w-15 mx-auto my-4" />
  <div
    class="
      side-menu [&_a]:textc-text [&_a]:no-underline
      [&_:where(a,summary)]:transition-colors [&_:where(a,summary)]:py-2 [&_:where(a,summary)]:rounded-[.5rem]
      [&_:where(a,summary)]:hover:bgc-highlight [&_:where(a,summary)]:hover:textc-textinv
    "
  >
    <h4 class="text-2xl font-sans textc-text font-extralight">MISCELLANEOUS</h4>
    <div class="flex flex-col">
      <a href="/data">データ</a>
      <a href="/others">その他</a>
    </div>
  </div>
{/snippet}

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
        <Hamburger class="size-6" />
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
        {@render sideMenu()}
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
          <CloseButton class="size-6" />
        </button>
      </div>

      {@render sideMenu()}
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

<style>
  .side-menu {
    display: flex;
    flex-direction: column;

    * {
      overflow-wrap: break-word;
    }

    > * {
      margin-inline: var(--spacing);
    }

    :where(h4) {
      padding-block: calc(var(--spacing) * 1);
    }

    :where(h4, a, summary) {
      padding-inline: calc(var(--spacing) * 3);
    }

    details > div > a {
      padding-inline-start: calc(var(--spacing) * 5);
    }
  }

  .drawer,
  .drawer-backdrop {
    transition-duration: var(--default-transition-duration);
  }

  .drawer-backdrop {
    display: block;
    cursor: initial;
    position: fixed;
    text-align: start;
    inset: 0;
    visibility: hidden;
    z-index: 10;
    background-color: transparent;
    transition-property: visibility, background-color;
    transition-timing-function: cubic-bezier(0, 0.2, 1, 0);
    overflow-x: hidden;

    &[data-open] {
      visibility: visible;
      transition-timing-function: cubic-bezier(0, 1, 0.8, 1);
      background-color: color-mix(in oklch, black 50%, transparent);
    }
  }

  .drawer,
  .non-drawer {
    display: flex;
    flex-direction: column;
    row-gap: calc(var(--spacing) * 1);
    padding-block: calc(var(--spacing) * 4);
    scrollbar-width: thin;
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
</style>
