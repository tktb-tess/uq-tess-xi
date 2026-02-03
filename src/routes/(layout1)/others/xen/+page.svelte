<script lang="ts">
  import KaTeXCSS from '$lib/components/KaTeXCSS.svelte';
  import UnderConstruction from '$lib/components/UnderConstruction.svelte';
  const { data } = $props();
</script>

<KaTeXCSS />

{@html data.rawHTML}

<UnderConstruction />
