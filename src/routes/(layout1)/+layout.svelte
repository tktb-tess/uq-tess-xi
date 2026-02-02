<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import HamburgerIcon from '$lib/components/hamburger.svelte';
  import PageTopBtn from '$lib/components/page_top_btn.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import ToggleColorSchemeBtn from '$lib/components/toggle-color-scheme-btn.svelte';
  // import type { MouseEventHandler } from 'svelte/elements';
  import BreadCrumb from '$lib/components/BreadCrumb.svelte';
  import pages, { type PageData } from '$lib/modules/pages.js';

  const { children, data } = $props();
  let drawerIsOpen = $state(false);
  const title = $derived.by(() => {
    const fallBack: PageData = {
      title: '[NO DATA]',
      path: '/',
    };
    const pageData = pages.find((d) => d.path === data.path) ?? fallBack;
    return pageData.title;
  });

  // const onClickCloseBtn: MouseEventHandler<HTMLButtonElement> = () => {
  //   drawerIsOpen = false;
  // };

  onNavigate(() => {
    drawerIsOpen = false;
  });
</script>

<header>
  <button
    type="button"
    title="Open Sidemenu"
    onclick={() => {
      drawerIsOpen = true;
    }}
  >
    <HamburgerIcon />
  </button>
  <h1>
    <a href="/.">悠久肆方体</a>
  </h1>
  <div class="__btn-x">
    <ToggleColorSchemeBtn class="h-full" />
  </div>
</header>
<div class="__main-root">
  <aside>
    <SideMenu />
  </aside>
  <main>
    <BreadCrumb path={data.path} />
    <h2 id="subtitle">{title}</h2>
    {@render children()}
  </main>
</div>

<PageTopBtn />

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    header {
      @apply flex h-(--s-header) items-center px-6 bg-accent sticky top-0;

      :where(a, .__btn-x) {
        @apply flex items-center h-(--s-header) text-2xl font-serif no-underline px-1 
        text-textinv any-hover:text-text any-hover:bg-textinv transition-colors;
      }

      :where(.__btn-x) {
        @apply ms-auto leading-1;
      }
    }
    .__main-root {
      @apply grid grid-cols-(--cols-main) min-h-lvh;

      :where(aside, main) {
        @apply flow-root;
      }

      :where(aside) {
        @apply sticky top-(--s-header) max-h-[calc(100lvh-var(--s-header))] overflow-y-auto;
      }

      :where(main) {
        @apply cbg-main;
      }

      :where(#subtitle) {
        @apply text-center;
      }
    }

    :is(header > button) {
      @apply max-lg:invisible;
    }
  }
</style>
