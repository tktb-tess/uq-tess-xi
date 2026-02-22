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

      await Promise.allSettled(animations.map((a) => a.finished));

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
    title="Close Drawer"
    onclick={(ev) => {
      if (ev.target !== ev.currentTarget) return;
      drawerIsOpen = false;
    }}
  ></button>
  <aside id="drawer" bind:this={drawer}>
    <div class="__close-btn-root">
      <button
        type="button"
        title="Close Drawer"
        id="drawer-close-btn"
        bind:this={closeBtn}
        onclick={() => {
          drawerIsOpen = false;
        }}
      >
        <CloseIcon class="size-6" />
      </button>
    </div>
    <SideMenu />
  </aside>
</div>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    #drawer-root {
      @apply max-lg:flow-root lg:hidden invisible fixed inset-0 z-(--z-drawer)
      duration-240 ease-in-out-1 transition-[background-color,visibility]
      pointer-events-none *:pointer-events-auto;

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
      ease-in-out-1 duration-200;
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
      @apply overflow-y-clip max-h-dvh;
    }
  }
</style>
