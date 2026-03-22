<script lang="ts">
  import KaTeXCSS from '$lib/components/KaTeXCSS.svelte';

  const { data } = $props();
</script>

<KaTeXCSS />
<!-- eslint-disable -->
{@html data.rawHTML}
<!-- eslint-enable -->
