<script lang="ts">
  import pages, { type PageData } from '$lib/modules/pages.js';
  import { PUBLIC_BASE_URL, PUBLIC_SITE_NAME } from '$env/static/public';
  const { children, data } = $props();
  const fallBack: PageData = {
    title: '???',
    path: '/',
  };
  const pageData = $derived(pages.find((d) => d.path === data.path) ?? fallBack);
  const ogTitle = $derived(pageData.title);
  const ogDesc = $derived(pageData.description ?? pageData.title);
  const ogUrl = $derived(new URL(data.path, PUBLIC_BASE_URL));
</script>

<svelte:head>
  <meta name="description" content={ogDesc} />
  <!-- OGP -->
  <meta property="og:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
  <meta property="og:description" content={ogDesc} />
  <meta property="og:url" content={ogUrl.href} />
  <!-- twitter card -->
  <meta name="twitter:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
  <meta name="twitter:description" content={ogDesc} />
  <title>{ogTitle} | {PUBLIC_SITE_NAME}</title>
</svelte:head>

<div class="min-h-screen bg-black w-full">
  {@render children()}
</div>
