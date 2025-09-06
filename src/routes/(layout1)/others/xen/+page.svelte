<script lang="ts">
  import { PUBLIC_SITE_NAME } from '$env/static/public';

  const ogTitle = '微分音での様々な概念について',
    ogDesc = '微分音での様々な概念について';
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

<h3 class="text-center text-[red] my-8">工事中……</h3>
