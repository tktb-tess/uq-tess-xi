<script lang="ts">
  import '../app.css';
  import { PUBLIC_SITE_NAME, PUBLIC_BASE_URL } from '$env/static/public';
  import { siteConfig, key, schema } from '$lib/modules/site-config.svelte';
  import { onMount } from 'svelte';
  import pages, { type PageData } from '$lib/modules/pages';
  import Loads from './Loads.svelte';

  const { children, data } = $props();

  const linkCardUrl = new URL('/link-card.png', PUBLIC_BASE_URL).href;
  const fallBack: PageData = {
    title: '[NO DATA]',
    path: '/',
  };

  const pageData = $derived(pages.find((d) => d.path === data.path) ?? fallBack);
  const ogDesc = $derived(pageData.description ?? pageData.title);
  const ogUrl = $derived(new URL(data.path, PUBLIC_BASE_URL));
  const ogTitle = $derived(
    data.path === '/' ? pageData.title : `${pageData.title} | ${PUBLIC_SITE_NAME}`,
  );

  onMount(() => {
    const str = localStorage.getItem(key);
    if (!str) return;
    const conf = schema.parse(JSON.parse(str));
    siteConfig.colorScheme = conf.colorScheme;
  });

  $effect(() => {
    const root = document.documentElement;
    root.dataset.colorScheme = siteConfig.colorScheme;
    localStorage.setItem(key, JSON.stringify(siteConfig));
  });
</script>

<Loads />

<svelte:head>
  <!-- OGP -->
  <meta property="og:site_name" content={PUBLIC_SITE_NAME} />
  <meta property="og:image" content={linkCardUrl} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={ogDesc} />
  <meta property="og:url" content={ogUrl.href} />
  <!-- twitter card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@triethylamineq" />
  <meta name="twitter:image" content={linkCardUrl} />
  <meta name="twitter:title" content={ogTitle} />
  <meta name="twitter:description" content={ogDesc} />
  <meta name="description" content={ogDesc} />
  <title>{ogTitle}</title>
</svelte:head>

{@render children()}
