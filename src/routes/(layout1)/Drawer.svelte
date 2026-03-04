<script lang="ts">
  import SideMenu from '$lib/components/SideMenu.svelte';
  interface Props {
    class?: string;
    drawerElem: HTMLDialogElement | undefined;
  }
  let { class: cName, drawerElem = $bindable() }: Props = $props();
  let closeBtn: HTMLButtonElement | undefined;
</script>

<dialog
  id="drawer"
  class={cName}
  aria-labelledby="drawer-title"
  bind:this={drawerElem}
  closedby="any"
>
  <div class="close-btn-wrapper">
    <!-- svelte-ignore a11y_autofocus -->
    <button
      title="サイドメニューを閉じる"
      id="drawer-close-btn"
      bind:this={closeBtn}
      autofocus
      onclick={(ev) => {
        ev.preventDefault();
        drawerElem?.close();
      }}
    >
      <span></span>
      <span></span>
    </button>
  </div>
  <h2 id="drawer-title">MENU</h2>
  <SideMenu />
</dialog>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    #drawer {
      @apply inset-0 w-min-side me-auto cbg-body flex-col *:my-0 py-2 gap-2 overscroll-contain;
      scrollbar-width: thin;
      scrollbar-gutter: stable;

      &,
      &::backdrop {
        @apply transition-[background-color,translate,display,overlay] allow-discrete duration-300;
      }

      &:not([open]) {
        @apply -translate-x-full;
      }

      &[open] {
        @apply flex translate-x-0 starting:-translate-x-full;
      }

      &:not([open])::backdrop {
        @apply bg-transparent;
      }

      &[open]::backdrop {
        @apply bg-black/70 starting:bg-transparent;
      }
    }

    #drawer-title {
      @apply font-[unset] font-extralight border-b-0 mx-3 ps-2 border-s-2 cborder-border-dark
      leading-none py-0;
    }

    .close-btn-wrapper {
      @apply flex justify-end mx-3;
    }

    #drawer-close-btn {
      @apply rounded hover-focus:cbg-accent hover-focus:ctext-textinv leading-none size-9
      grid place-items-center transition-colors;

      > * {
        @apply col-span-full row-span-full border-b border-current w-5;
      }

      > :first-child {
        @apply rotate-45;
      }

      > :last-child {
        @apply -rotate-45;
      }
    }

    :global(:is(:root, body):has(#drawer[open])) {
      @apply overflow-hidden;
    }
  }
</style>
