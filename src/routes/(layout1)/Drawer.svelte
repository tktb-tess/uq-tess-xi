<script lang="ts">
  import CloseIcon from '$lib/components/CloseIcon.svelte';
  import SideMenu from '$lib/components/SideMenu.svelte';
  interface Props {
    drawerIsOpen: boolean;
    class?: string;
  }
  let { class: cName, drawerIsOpen = $bindable() }: Props = $props();
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
  <aside id="drawer">
    <div>
      <button
        type="button"
        title="Close Drawer"
        id="drawer-close-btn"
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
      @apply max-lg:flow-root lg:hidden invisible fixed inset-0 z-1000
      duration-200 ease-(--tf-ease-in);

      &[data-drawer-open] {
        @apply visible bg-black/15 transition-[background-color,visibility]
         ease-(--tf-ease-out);
      }
    }

    #drawer-backdrop {
      @apply cursor-auto fixed inset-0;
    }

    #drawer {
      @apply flow-root fixed left-0 top-0 h-dvh w-(--w-side-max) overflow-y-auto
      cbg-body -translate-x-full in-data-drawer-open:translate-x-0
      transition-[translate,visibility]
      ease-(--tf-ease-in) in-data-drawer-open:ease-(--tf-ease-out)
      duration-200;
      scrollbar-width: thin;

      > :where(div) {
        @apply flex justify-end;
      }

      :where(#drawer-close-btn) {
        @apply leading-0 p-2 m-1 rounded-[50%] any-hover:ctext-textinv
        any-hover:cbg-accent transition-colors;
      }
    }

    :global(:is(html, body):has([data-drawer-open])) {
      @apply overflow-y-clip;
    }
  }
</style>
