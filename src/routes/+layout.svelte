<script lang="ts">
  import '../app.css';
  import { PUBLIC_SITE_NAME, PUBLIC_BASE_URL } from '$env/static/public';
  import Toasts from '$lib/components/toasts.svelte';
  import { siteConfig, key, type SiteConfig } from '$lib/modules/site-config.svelte';
  import { onMount } from 'svelte';

  const { children } = $props();
  const linkCardUrl = new URL('/link-card.png', PUBLIC_BASE_URL).href;
  onMount(() => {
    const str = window.localStorage.getItem(key);
    if (!str) return;
    const conf: SiteConfig = JSON.parse(str);
    siteConfig.colorScheme = conf.colorScheme;
  });
</script>

<svelte:head>
  <!-- OGP -->
  <meta property="og:url" content="https://tktb-tess.dev" />
  <meta property="og:site_name" content={PUBLIC_SITE_NAME} />
  <meta property="og:image" content={linkCardUrl} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@triethylamineq" />
  <meta name="twitter:image" content={linkCardUrl} />
</svelte:head>

<div data-color-scheme={siteConfig.colorScheme} class="contents">
  <Toasts />
  {@render children()}
</div>
