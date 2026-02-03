<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import HamburgerIcon from '$lib/components/HamburgerIcon.svelte';
  import PageTopBtn from '$lib/components/PageTopBtn.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import ToggleColorSchemeBtn from '$lib/components/ToggleColorSchemeBtn.svelte';
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

  onNavigate(() => {
    drawerIsOpen = false;
  });
</script>

<header>
  <button
    type="button"
    id="drawer-open-btn"
    title="Open Sidemenu"
    onclick={() => {
      drawerIsOpen = true;
    }}
  >
    <HamburgerIcon class="size-6 inline-block" />
  </button>
  <h1>
    <a href="/.">悠久肆方体</a>
  </h1>
  <div class="__btn-x">
    <ToggleColorSchemeBtn class="h-full leading-0" />
  </div>
</header>
<div class="__main-root">
  <button
    type="button"
    id="drawer-backdrop"
    data-drawer-open={drawerIsOpen || null}
    onclick={(ev) => {
      if (ev.target !== ev.currentTarget) return;
      drawerIsOpen = false;
    }}
  >
    <aside id="drawer">
      <SideMenu />
    </aside>
  </button>
  <aside>
    <SideMenu />
  </aside>
  <main>
    <BreadCrumb path={data.path} />
    <h2 id="subtitle">{title}</h2>
    {@render children()}
    <div class="h-12"></div>
  </main>
</div>

<PageTopBtn />

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    header {
      @apply flex h-(--s-header) items-center px-6 bg-accent sticky top-0;

      :where(a, .__btn-x, #drawer-open-btn) {
        @apply flex items-center h-(--s-header) text-2xl font-serif no-underline px-1 
        text-textinv any-hover:text-text any-hover:bg-textinv transition-colors;
      }

      :where(.__btn-x) {
        @apply ms-auto;
      }
    }
    .__main-root {
      @apply flow-root lg:grid lg:grid-cols-(--cols-main) min-h-lvh;

      > :where(aside) {
        @apply hidden lg:flow-root sticky top-(--s-header)
        max-h-[calc(100lvh-var(--s-header))] overflow-y-auto;
      }

      > :where(main) {
        @apply flow-root cbg-main;
      }

      :where(#subtitle) {
        @apply text-center ps-0 border-none mb-(--s-heading);
      }
    }

    #drawer-open-btn {
      @apply block lg:hidden leading-0;
    }

    #drawer-backdrop {
      @apply cursor-auto text-start flow-root invisible fixed inset-0 z-1000;

      &[data-drawer-open] {
        @apply visible bg-black/5;
      }
    }

    #drawer {
      @apply flow-root fixed left-0 top-0 h-dvh w-(--w-side) overflow-y-auto
      cbg-body -translate-x-full in-data-drawer-open:translate-x-0
      transition-[translate,visibility];
    }

    :global(:is(html, body):has([data-drawer-open])) {
      @apply overflow-y-clip;
    }
  }
</style>
