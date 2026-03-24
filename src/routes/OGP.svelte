<script lang="ts">
  import { PUBLIC_SITE_NAME, PUBLIC_BASE_URL } from '$env/static/public';
  import pages from '$lib/modules/pages';
  import type { PageData } from '$lib/modules/pages';

  interface Props {
    path: string;
  }

  const { path }: Props = $props();

  const linkCardUrl = new URL('/link-card.png', PUBLIC_BASE_URL).href;
  const fallBack: PageData = {
    title: '[NO DATA]',
  };

  const pageData = $derived(pages.get(path) ?? fallBack);
  const ogDesc = $derived(pageData.description ?? pageData.title);
  const ogUrl = $derived(new URL(path, PUBLIC_BASE_URL));
  const ogTitle = $derived(
    path === '/' ? pageData.title : `${pageData.title} | ${PUBLIC_SITE_NAME}`,
  );
</script>

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
