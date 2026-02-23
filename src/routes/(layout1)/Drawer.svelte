<script lang="ts">
  import CloseIcon from '$lib/components/CloseIcon.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  interface Props {
    drawerIsOpen: boolean;
    class?: string;
  }
  let { class: cName, drawerIsOpen = $bindable() }: Props = $props();
  let closeBtn: HTMLButtonElement | undefined;
  let drawer: HTMLElement | undefined;

  $effect(() => {
    const isopen = drawerIsOpen;
    const handleFocus = async () => {
      if (!drawer) return;
      const animations = drawer.getAnimations();
      if (animations.length === 0) return;

      const _ = await Promise.allSettled(animations.map((a) => a.finished));

      requestAnimationFrame(() => {
        if (isopen) {
          closeBtn?.focus();
        } else {
          const openBtn = document.getElementById('drawer-open-btn');
          openBtn?.focus();
        }
      });
    };

    handleFocus();
  });
</script>

<div id="drawer-root" data-drawer-open={drawerIsOpen || null} class={cName}>
  <button
    id="drawer-backdrop"
    tabindex="-1"
    title="Close Sidemenu"
    onclick={(ev) => {
      if (ev.target !== ev.currentTarget) return;
      drawerIsOpen = false;
    }}
  ></button>
  <aside id="drawer" aria-labelledby="drawer-title" bind:this={drawer}>
    <div class="__close-btn-root">
      <button
        type="button"
        title="Close Sidemenu"
        id="drawer-close-btn"
        bind:this={closeBtn}
        onclick={() => {
          drawerIsOpen = false;
        }}
      >
        <CloseIcon class="size-6" />
      </button>
    </div>
    <h2 id="drawer-title">MENU</h2>
    <SideMenu />
  </aside>
</div>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    #drawer-root {
      @apply max-lg:flow-root lg:hidden invisible fixed inset-0 z-(--z-drawer)
      duration-320 ease-in-out-1 transition-[background-color,visibility];

      &[data-drawer-open] {
        @apply visible bg-black/25;
      }
    }

    #drawer-backdrop {
      @apply cursor-auto absolute inset-0;
    }

    #drawer {
      @apply flow-root absolute inset-0 me-auto w-min-side overflow-y-auto
      cbg-body -translate-x-full in-data-drawer-open:translate-x-0
      transition-[translate,visibility]
      ease-in-out-1 duration-320 overscroll-contain;
      scrollbar-width: thin;
      scrollbar-gutter: stable;

      > :where(.__close-btn-root) {
        @apply flex justify-end;
      }

      :where(#drawer-close-btn) {
        @apply leading-none p-2 m-2 rounded any-hover:ctext-textinv
        any-hover:cbg-accent transition-colors;
      }
    }

    :global(:is(html, body):has([data-drawer-open])) {
      @apply overflow-y-clip;
    }

    h2 {
      @apply font-sans border-l-2 border-b-0 font-extralight text-3xl mx-2 my-0 py-1;
    }
  }
</style>
