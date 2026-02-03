<script lang="ts">
  import ExtLink from '$lib/components/ExtLink.svelte';
  const {} = $props();
</script>

<p>フォントなどのライセンス表示をまとめたページです。</p>
<section aria-labelledby="ofl">
  <h2 id="ofl">OFL.txt</h2>
  <ul>
    <li>
      <ExtLink href="https://api.tktb-tess.dev/fonts/Inter/OFL.txt">Inter</ExtLink>
    </li>
    <li>
      <ExtLink href="https://api.tktb-tess.dev/fonts/Charis/OFL.txt">Charis</ExtLink>
    </li>
  </ul>
</section>
