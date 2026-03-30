<script lang="ts">
  import HamburgerIcon from '$lib/icons/HamburgerIcon.svelte';

  interface Props {
    class?: string;
    showDrawer: () => void;
  }

  const { class: cName, showDrawer }: Props = $props();
</script>

<button
  title="サイドメニューを開く"
  class="drawer-open-btn {cName}"
  onclick={(ev) => {
    ev.preventDefault();
    showDrawer();
  }}
>
  <HamburgerIcon class="inline-6 block-auto" />
</button>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    .drawer-open-btn {
      @apply grid lg:hidden place-content-center;
    }
  }
</style>
