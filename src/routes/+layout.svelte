<script lang="ts">
  import { PUBLIC_SITE_NAME, PUBLIC_BASE_URL } from '$env/static/public';
  import Toasts from '$lib/sfc/toasts.svelte';
  import '../app.css';
  import { siteConfig } from '$lib/modules/site-config.svelte';
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

  const { children } = $props();
  const linkCardUrl = new URL('/link-card.png', PUBLIC_BASE_URL).href;
  injectSpeedInsights();
</script>

<svelte:head>
  <!-- OGP -->
  <meta property="og:url" content="https://tktb-tess.dev" />
  <meta property="og:site_name" content={PUBLIC_SITE_NAME} />
  <meta property="og:image" content={linkCardUrl} />
  <!-- Twitter card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@triethylamineq" />
  <meta name="twitter:image" content={linkCardUrl} />
</svelte:head>

<div data-color-scheme={siteConfig.colorScheme} class="contents">
  <Toasts />
  {@render children()}
</div>
