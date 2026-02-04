<script lang="ts">
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  interface Props {
    readonly title: string;
    readonly url: string;
    readonly description?: string;
  }

  const { title, url, description = title }: Props = $props();

  const fullTitle = $derived(title === '悠久肆方体' ? title : `${title} | ${PUBLIC_SITE_NAME}`);
</script>

<svelte:head>
  <meta name="description" content={description} />
  <!-- OGP -->
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={url} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <title>{fullTitle}</title>
</svelte:head>
