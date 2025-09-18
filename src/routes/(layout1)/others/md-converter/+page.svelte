<script lang="ts">
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  import Spinner from '$lib/sfc/spinner.svelte';
  import { addToast } from '$lib/sfc/toastStates.svelte';
  import TrashIcon from '$lib/sfc/trashIcon.svelte';

  const ogTitle = 'URL to Markdown';
  const ogDesc = 'サイトURLからMarkdown形式に変換する';

  type UUID = ReturnType<typeof crypto.randomUUID>;
  type URLInput = {
    id: UUID;
    url: string;
  };
  type MdResult =
    | {
        success: true;
        url: string;
        md: string;
      }
    | {
        success: false;
        url: string;
        error: unknown;
      };

  const exampleCom = 'https://example.com';
  const urlInputs = $state<URLInput[]>([
    {
      id: crypto.randomUUID(),
      url: exampleCom,
    },
  ]);

  let resultsp: Promise<MdResult[]> = $state(Promise.resolve([]));

  const fetchData = async (): Promise<MdResult[]> => {
    const urls = urlInputs.map(({ url }) => url);
    const params_ = urls.map((u) => ['value', u]);
    const params = new URLSearchParams(params_);
    
    if (params.size === 0) return [];

    const resp = await fetch(`/api/v0/to-md?${params.toString()}`, { method: 'GET' });

    if (!resp.ok) {
      throw Error(`failed to fetch: ${resp.status} ${resp.statusText}`);
    }

    const mds: PromiseSettledResult<string>[] = await resp.json();

    return mds.map((res, i): MdResult => {
      switch (res.status) {
        case 'rejected': {
          return {
            success: false,
            url: urls.at(i) ?? '',
            error: res.reason,
          };
        }
        case 'fulfilled': {
          return {
            success: true,
            url: urls.at(i) ?? '',
            md: res.value,
          };
        }
      }
    });
  };

  const handleDownload = async () => {
    const mds = await resultsp;
    if (mds.length === 0) return;
    const tasks = mds
      .filter((r) => r.success)
      .map(async ({ md, url }) => {
        const blob = new Blob([md], { type: 'text/markdown' });
        const burl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = burl;
        a.download = `${url.replaceAll(/[./:]+/g, '_')}.md`;
        a.click();
        URL.revokeObjectURL(burl);
      });

    await Promise.all(tasks);
  };
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

<h2 class="text-center my-8">{ogTitle}</h2>
<div>
  <p>
    URLを入力し、「変換！」を押すと、該当ページのHTMLをMarkdownに変換したものが得られます。一度に複数個変換できます。
  </p>
  <p>
    Markdown部分をクリックするとコピーでき、また「Download all」より Markdown
    ファイルを一括ダウンロードできます。
  </p>
</div>
<div class="flex flex-col gap-4">
  <div class="flex flex-col gap-2">
    {#each urlInputs as url, i (url.id)}
      <div class="flex justify-center gap-2 *:min-w-0">
        <label for="input-{url.id}">URL</label>
        <input type="url" id="input-{url.id}" bind:value={url.url} />
        <button
          type="button"
          class="btn-1"
          onclick={() => {
            urlInputs.splice(i, 1);
          }}
        >
          <TrashIcon class="size-4" />
        </button>
      </div>
    {/each}
    <button
      type="button"
      class="btn-1 self-center"
      onclick={() => {
        urlInputs.push({ id: crypto.randomUUID(), url: exampleCom });
      }}
    >
      +
    </button>
  </div>
  <button
    type="button"
    class="btn-1 self-center"
    onclick={() => {
      resultsp = fetchData();
    }}
  >
    変換！
  </button>
  <div class="flex flex-col gap-2">
    {#await resultsp}
      <h3 class="text-center">
        <Spinner class="size-6" />
        変換中……
      </h3>
    {:then mds}
      {#each mds as md (md.url)}
        {#if md.success}
          <div class="flex flex-col gap-2">
            <label class="block text-center font-serif text-xl" for="result-{md.url}"
              >{md.url}</label
            >
            <textarea
              onclick={() => {
                navigator.clipboard
                  .writeText(md.md)
                  .then(() => addToast('Copied to Clipboard!', 'info', 5000))
                  .catch(() => addToast('failed to copy', 'warning', 5000));
              }}
              id="result-{md.url}"
              class="h-50 cursor-pointer"
              readonly>{md.md}</textarea
            >
          </div>
        {:else}
          <div class="flex flex-col gap-2">
            <h3 class="text-danger text-center">{md.url}</h3>
            <p class="text-danger text-center">{md.error}</p>
          </div>
        {/if}
      {/each}
      <button
        type="button"
        onclick={handleDownload}
        class="btn-1 self-center {mds.length === 0 ? 'invisible' : ''}"
      >
        Download all
      </button>
    {:catch e}
      <h3 class="text-danger text-center">{e}</h3>
    {/await}
  </div>
  <div class="h-50"></div>
</div>
