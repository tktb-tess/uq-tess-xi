<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import PageTopBtn from '$lib/components/PageTopBtn.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import ToggleColorSchemeBtn from '$lib/components/ToggleColorSchemeBtn.svelte';
  import BreadCrumb from '$lib/components/BreadCrumb.svelte';
  import Drawer from './Drawer.svelte';
  import DrawerBtn from './DrawerBtn.svelte';
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
  <DrawerBtn bind:drawerIsOpen />
  <a id="to-top" href="/." title="トップページに戻る">
    <span>悠久肆方体</span>
  </a>
  <ToggleColorSchemeBtn />
</header>
<div class="__main-root">
  <Drawer bind:drawerIsOpen />

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
      @apply flex h-(--s-header) px-6 bg-(image:--grad-accent) sticky top-0;

      > :global(*) {
        @apply h-full text-2xl px-1
        text-textinv any-hover:text-text any-hover:bg-textinv transition-colors leading-none;
      }

      > :global(:where(:nth-child(3))) {
        @apply ms-auto;
      }

      :where(#to-top) {
        @apply grid place-items-center no-underline leading-none font-title font-normal;

        > :where(span) {
          @apply pb-0.75;
        }
      }
    }

    .__main-root {
      @apply flow-root lg:grid lg:grid-cols-(--cols-main) min-h-lvh;

      > :where(aside:not(#drawer)) {
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
  }
</style>
