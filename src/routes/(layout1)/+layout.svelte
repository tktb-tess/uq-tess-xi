<script lang="ts">
  import { onNavigate } from '$app/navigation';
  import HamburgerIcon from '$lib/components/hamburger.svelte';
  import PageTopBtn from '$lib/components/page_top_btn.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  import ToggleColorSchemeBtn from '$lib/components/toggle-color-scheme-btn.svelte';
  // import type { MouseEventHandler } from 'svelte/elements';
  import { innerWidth } from 'svelte/reactivity/window';
  import BreadCrumb from '$lib/components/BreadCrumb.svelte';

  const { children, data } = $props();
  let drawerIsOpen = $state(false);

  const large = $derived(
    typeof innerWidth.current === 'number' ? innerWidth.current > 1024 : false,
  );

  // const onClickCloseBtn: MouseEventHandler<HTMLButtonElement> = () => {
  //   drawerIsOpen = false;
  // };

  onNavigate(async () => {
    drawerIsOpen = false;
  });
</script>

<header>
  <div>
    {#if !large}
      <button
        type="button"
        title="Open Sidemenu"
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
<main>
  <aside>
    <SideMenu />
  </aside>
  <section>
    <BreadCrumb path={data.path} />
    {@render children()}
  </section>
</main>

<PageTopBtn />

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    main {
      @apply grid grid-cols-(--cols-main);

      > :where(aside, section) {
        @apply flow-root;
      }
    }
  }
</style>
