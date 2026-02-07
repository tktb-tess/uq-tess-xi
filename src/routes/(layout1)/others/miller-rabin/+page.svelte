<script lang="ts">
  import KaTeXCSS from '$lib/components/KaTeXCSS.svelte';

  const { data } = $props();
</script>

<KaTeXCSS />

{@html data.rawHTML}
