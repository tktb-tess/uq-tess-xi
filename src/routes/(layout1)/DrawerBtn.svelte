<script lang="ts">
  import HamburgerIcon from '$lib/components/HamburgerIcon.svelte';
  interface Props {
    drawerIsOpen: boolean;
    class?: string;
  }
  let { class: cName, drawerIsOpen = $bindable() }: Props = $props();
</script>

<button
  type="button"
  id="drawer-open-btn"
  title="Open Sidemenu"
  class={cName}
  onclick={() => {
    drawerIsOpen = true;
  }}
>
  <HamburgerIcon class="size-6" />
</button>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    #drawer-open-btn {
      @apply grid lg:hidden place-content-center;
    }
  }
</style>
