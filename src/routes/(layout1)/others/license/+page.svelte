<script>
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  import ExtLink from '$lib/components/ext_link.svelte';
  const ogTitle = 'ライセンス表示';
  const ogDesc = 'ライセンス表示';
</script>



<h2 class="text-center my-8">ライセンス</h2>
<div>
  <p>フォントなどのライセンス表示をまとめたページです。</p>
</div>
<section aria-labelledby="ofl">
  <h3 id="ofl">OFL.txt</h3>
  <ul>
    <li>
      <ExtLink href="https://tktb-tess.github.io/resources/fonts/Inter/OFL.txt">Inter</ExtLink>
    </li>
    <li>
      <ExtLink href="https://tktb-tess.github.io/resources/fonts/Charis/OFL.txt">Charis</ExtLink>
    </li>
  </ul>
</section>
