<script lang="ts">
  import { drawerState } from './DrawerState.svelte';
  interface Props {
    readonly class?: string;
  }
  const { class: cName }: Props = $props();
</script>


<div class={cName} data-drawer-open={drawerState.isOpen || null}>

</div>