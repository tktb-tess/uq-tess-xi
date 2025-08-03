<script lang="ts">
	import ExtLink from '$lib/sfc/ext_link.svelte';
	const ogTitle = 'その他',
		ogDesc = '';
</script>

<svelte:head>
	<meta name="description" content={ogDesc} />
	<!-- OGP -->
	<meta property="og:title" content="{ogTitle} - 悠久肆方体" />
	<meta property="og:description" content={ogDesc} />
	<!-- twitter card -->
	<meta name="twitter:title" content="{ogTitle} - 悠久肆方体" />
	<meta name="twitter:description" content={ogDesc} />
	<title>{ogTitle} - 悠久肆方体</title>
</svelte:head>

<h2 class="my-8 text-center">その他の項目</h2>
<section aria-labelledby="music">
	<h2 class="border-b-3 border-double ps-1" id="music">音楽</h2>
	<p>一応リンクを貼っておきます。断片みたいなのしかないです。</p>
	<ul>
		<li><a href="/others/musik">いくつかの曲</a></li>
		<li><ExtLink href="https://soundcloud.com/tessyrrhaqtluaming">SoundCloud</ExtLink></li>
		<li><ExtLink href="https://www.youtube.com/@tessyrrhaqt">YouTube</ExtLink></li>
	</ul>
</section>
<section aria-labelledby="zatta">
	<h2 class="border-b-3 border-double ps-1" id="zatta">雑多</h2>
	<ul>
		<li>n次元超立体の命名案 (準備中)</li>
		<li>ジョンソンの立体のcrown jewelsの命名案 (準備中)</li>
		<li><a href="/others/tools">ツール</a></li>
		<li>
			<ExtLink href="https://shuuro.tktb-tess.dev">終末式ローマ字 «Syuğmatusǐkiro–mázi»</ExtLink><br
			/>
			…舊仮名遣ひと教育ローマ字ベースのアクセント表記を両立した非実用的な日本語のローマ字表記。製作中。
		</li>
		<li><a href="/others/gregorian-chants">グレゴリオ聖歌の音階について</a></li>
		<li><a href="/others/ja-tibetan">日本語 チベット文字表記</a></li>
		<li><a href="/others/license">ライセンス</a></li>
		<li><a href="/others/md-converter">URLからMarkdown変換</a></li>
		<li><a href="/like-programmer">表示するだけでなんかすごいハッカーみたいなことやってるように見えるページ</a></li>
		<li>
			<ExtLink href="https://apps.tktb-tess.dev">アプリ置き場</ExtLink>
		</li>
	</ul>
</section>
<section aria-labelledby="memo">
	<h2 class="border-b-3 border-double ps-1" id="memo">メモ</h2>
	<ul>
		<li>
			<ExtLink href="https://gist.github.com/tktb-tess/91f831a1c93d78fe54ad1cec172d08d2">
				Miller–Rabin 素数判定法
			</ExtLink>
		</li>
	</ul>
</section>
