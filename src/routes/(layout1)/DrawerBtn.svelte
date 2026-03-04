<script lang="ts">
  import HamburgerIcon from '$lib/icons/HamburgerIcon.svelte';
  interface Props {
    class?: string;
    showDrawer: () => void;
  }

  let { class: cName, showDrawer }: Props = $props();
</script>

<button
  title="サイドメニューを開く"
  class="{cName} drawer-open-btn"
  onclick={(ev) => {
    ev.preventDefault();
    showDrawer();
  }}
>
  <HamburgerIcon class="size-6" />
</button>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    .drawer-open-btn {
      @apply grid lg:hidden place-content-center;
    }
  }
</style>
