<script lang="ts">
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  const { data } = $props();

  const ogTitle = 'Miller–Rabin 素数判定法';
  const ogDesc = '確率的素数判定法';
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css"
    integrity="sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP"
    crossorigin="anonymous"
  />
</svelte:head>

<h2 class="text-center my-8">{ogTitle}</h2>
{#if data.success}
  <div
    class="flex flex-col w-full gap-2 [&_pre]:px-3 [&_pre]:py-2 [&_pre]:max-w-7xl [&_pre]:overflow-x-auto"
  >
    {@html data.result}
  </div>
{:else}
  <pre class="text-danger text-center">{data.name} {data.status} {data.message}</pre>
{/if}
<div class="h-10"></div>
