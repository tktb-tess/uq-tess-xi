<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import ToggleColorSchemeBtn from '$lib/components/ToggleColorSchemeBtn.svelte';
  import BreadCrumb from '$lib/components/BreadCrumb.svelte';
  import Drawer from './Drawer.svelte';
  import DrawerBtn from './DrawerBtn.svelte';
  import pages, { type PageData } from '$lib/modules/pages.js';
  import MyFooter from '$lib/components/MyFooter.svelte';
  import Toasts from '$lib/components/Toasts.svelte';
  import PageTopBtn from '$lib/components/PageTopBtn.svelte';

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

<div class="__container">
  <header>
    <DrawerBtn bind:drawerIsOpen />
    <a id="to-top" href="/." title="トップページに戻る">
      <span>悠久肆方体</span>
    </a>
    <ToggleColorSchemeBtn />
  </header>
  <Drawer bind:drawerIsOpen />

  <aside class="__lside">
    <nav class="__sticky-cont">
      <SideMenu />
    </nav>
  </aside>
  <main>
    <BreadCrumb path={data.path} />
    <h2 id="title">{title}</h2>
    {@render children()}
    <div class="h-12"></div>
  </main>
  <aside class="__rside"></aside>
  <MyFooter />
</div>

<Toasts />
<PageTopBtn />

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    .__container {
      --max-w-main: 80rem;
      --min-w-side: 18rem;

      grid-template-areas:
        'header header header'
        'lside main rside'
        'footer footer footer';

      grid-template-columns:
        minmax(min(var(--min-w-side), 50%), 1fr)
        minmax(0, var(--max-w-main))
        minmax(min(var(--min-w-side), 50%), 1fr);

      grid-template-rows: auto 1fr auto;

      @apply max-lg:flow-root lg:grid min-h-lvh;

      > header {
        grid-area: header;
        @apply flex h-(--s-header) px-6 bg-(image:--grad-accent) sticky top-0 z-(--z-header);

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

      > .__lside {
        grid-area: lside;
        @apply max-lg:hidden lg:flow-root;
        scrollbar-width: thin;

        > .__sticky-cont {
          @apply sticky top-(--s-header) max-h-[calc(100lvh-var(--s-header))] overflow-y-auto z-(--z-sidemenu);
          scrollbar-width: thin;
        }
      }

      > .__rside {
        grid-area: rside;
        @apply max-lg:hidden invisible;
      }

      > main {
        grid-area: main;
        @apply flow-root cbg-main;

        :where(#title) {
          @apply text-center ps-0 border-none mb-(--s-heading);
        }
      }

      > :global(footer) {
        grid-area: footer;
        @apply flow-root;
      }
    }
  }
</style>
