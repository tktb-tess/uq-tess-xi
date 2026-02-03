<script lang="ts">
  import { page } from '$app/state';
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  import UqTessLogo from '$lib/components/UQTessLogo.svelte';

  const ogTitle = `${page.status}${page.error ? ` ${page.error.message}` : ''}`;
  const ogDesc = 'そこに無ければ無いですね';
</script>

<svelte:head>
  <meta name="description" content={ogDesc} />
  <!-- OGP -->
  <meta property="og:title" content="{ogTitle} - {PUBLIC_SITE_NAME}" />
  <meta property="og:description" content={ogDesc} />
  <!-- twitter card -->
  <meta name="twitter:title" content="{ogTitle} - {PUBLIC_SITE_NAME}" />
  <meta name="twitter:description" content={ogDesc} />
  <title>{ogTitle} - {PUBLIC_SITE_NAME}</title>
</svelte:head>

<div id="error-root">
  <div class="__logo">
    <UqTessLogo />
  </div>
  <h2>Hoppla!</h2>
  <p>
    {#if page.status === 404}
      お探しのページは見つかりませんでした。<wbr />移動あるいは削除された可能性があります。
    {:else}
      {page.status} {page.error?.message ?? 'No message'}
    {/if}
  </p>
  <a href="/.">トップに戻る</a>
</div>

<style lang="postcss">
  @reference '../app.css';
  @layer properties, theme, base, components, utilities;
  @layer components {
    #error-root {
      @apply grid min-h-lvh px-3 content-center place-items-center gap-4 overflow-clip **:m-0;

      :where(.__logo) {
        @apply animate-err-up-down ctext-text *:size-50 *:animate-err-rot;
      }

      :where(h2) {
        @apply text-6xl font-extralight font-sans;
      }

      :where(p) {
        @apply text-nowrap text-center;
      }

      :where(a) {
        @apply block btn-1;
      }
    }
  }
</style>
