<script>
	import ExtLink from '$lib/sfc/ext_link.svelte';
	import { myContext } from "../../../global.svelte";
    
	myContext.title = 'ライセンス表示';
</script>

<h2 class="text-center my-8">ライセンス</h2>
<div>
	<p>フォントなどのライセンス表示をまとめたページです。</p>
</div>
<section aria-labelledby="ofl">
	<h3 id="ofl">OFL.txt</h3>
	<ul>
		<li><ExtLink href="/others/license/Inter">Inter</ExtLink></li>
		<li><ExtLink href="/others/license/CharisSIL">Charis SIL</ExtLink></li>
	</ul>
</section>
<section aria-labelledby="fontlog">
	<h3 id="fontlog">FONTLOG.txt</h3>
	<ul>
		<li><ExtLink href="/others/license/FONTLOG">FONTLOG</ExtLink></li>
	</ul>
</section>
