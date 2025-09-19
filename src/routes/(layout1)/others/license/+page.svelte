<script>
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  import ExtLink from '$lib/sfc/ext_link.svelte';
  const ogTitle = 'ライセンス表示';
  const ogDesc = 'ライセンス表示';
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

<h2 class="text-center my-8">ライセンス</h2>
<div>
  <p>フォントなどのライセンス表示をまとめたページです。</p>
</div>
<section aria-labelledby="ofl">
  <h3 id="ofl">OFL.txt</h3>
  <ul>
    <li><ExtLink href="https://tktb-tess.github.io/resources/fonts/Inter/OFL.txt">Inter</ExtLink></li>
    <li><ExtLink href="https://tktb-tess.github.io/resources/fonts/Charis/OFL.txt">Charis</ExtLink></li>
  </ul>
</section>
