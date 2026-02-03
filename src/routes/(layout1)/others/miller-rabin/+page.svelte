<script lang="ts">
  import KaTeXCSS from '$lib/components/KaTeXCSS.svelte';

  const { data } = $props();
</script>

<KaTeXCSS />

{#if data.success}
  <div
    class="flex flex-col w-full gap-2 [&_pre]:px-3 [&_pre]:py-2 [&_pre]:max-w-7xl [&_pre]:overflow-x-auto"
  >
    {@html data.result}
  </div>
{:else}
  <pre class="text-danger text-center">{data.name} {data.status} {data.message}</pre>
{/if}
