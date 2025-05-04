<script lang="ts">
	import ExtLink from '$lib/sfc/ext_link.svelte';
	import { ogpData } from "../../ogp.svelte";
    
	ogpData.title = 'その他';
	ogpData.description = '色々';
</script>



<h2 class="my-8 text-center">その他の項目</h2>

<ul>
	<li>n次元超立体の命名案 (準備中)</li>
	<li>ジョンソンの立体のcrown jewelsの命名案 (準備中)</li>
	<li><a href="/others/tools">ツール</a></li>
	<li>
		<ExtLink href="https://tktb-tess.github.io/apocaly_romaji/"
			>終末式ローマ字 «Syuğmatusǐkiro–mázi»</ExtLink
		><br />
		…舊仮名遣ひと教育ローマ字ベースのアクセント表記を両立した非実用的な日本語のローマ字表記。製作中。
	</li>
	<li>グレゴリオ聖歌の音階について</li>
	<li>日本語 チベット文字表記</li>
	<li><a href="/others/license">当サイトで使用しているフォントのライセンス</a></li>
</ul>
