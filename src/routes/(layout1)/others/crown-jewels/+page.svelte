<script lang="ts">
  import { PUBLIC_SITE_NAME } from '$env/static/public';

  const ogTitle = 'crown jewels の命名案';
  const ogDesc = 'crown jewels の命名案';
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

<h3 class="text-center text-danger my-8">工事中……</h3>
