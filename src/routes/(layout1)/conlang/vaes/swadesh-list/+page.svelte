<script lang="ts">
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  import { onMount } from 'svelte';

  const ogTitle = 'Vässenzländisķ Swadesh List';
  const ogDesc = 'すわでしゅ！';

  const { data: swadeshList } = $props();

  onMount(() => {
    if (!swadeshList.success) {
      console.error(swadeshList);
    }
  });
</script>

<svelte:head>
  <meta name="description" content={ogDesc} />
  <!-- OGP -->
  <meta property="og:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
  <meta property="og:description" content={ogDesc} />
  <!-- twitter card -->
  <meta name="twitter:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
  <meta name="twitter:description" content={ogDesc} />
  <title>{ogTitle} | {PUBLIC_SITE_NAME}</title>
</svelte:head>

<h2 class="my-8 text-center">Swadesh List</h2>

<p>まだ未完成。順次追加していきます。</p>

{#if swadeshList.success}
  {@const [header, ...body] = swadeshList.result.value}
  <div class="table-container animate-[slide-in-2_.4s_cubic-bezier(0,1,1,1),fade-in_.4s_linear]">
    <table
      class="grid-cols-auto-5 [&_td]:text-start [&_td:first-child]:text-end [&_td:first-child]:f-tnum [&_td:nth-child(4)]:font-ipa"
    >
      <thead>
        <tr>
          {#each header as str}
            <th>{str}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each body as row}
          <tr>
            {#each row as str}
              <td>{str}</td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{:else}
  <div class="text-center *:text-danger">
    <h3>読み込みに失敗しました</h3>
    <p>再読み込みしてください</p>
  </div>
{/if}

<style>
</style>
