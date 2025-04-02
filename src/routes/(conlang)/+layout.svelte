<script lang="ts">
	import '../../app.css';

	let { children } = $props();
</script>



<div class="container flex mx-auto [&_*]:min-w-0">
	<nav class="flex-3/12">
		<p class="text-center">Top</p>
		<ul>
			<li>Vässenzländisķ</li>
			<li>概説</li>
			<li>文字と発音</li>
			<li>音韻論</li>
			<li>Leipzig–Jakarta List (準備中)</li>
			<li>りんご文 (準備中)</li>
			<li>
				文法
				<ul>
					<li>名詞</li>
					<li>数詞</li>
					<li>動詞</li>
					<li>形容詞</li>
				</ul>
			</li>
		</ul>
		<ul>
			<li>データ</li>
			<li>古英語の動詞活用まとめ</li>
		</ul>
	</nav>
	<main class="flex-9/12">
		{@render children()}
	</main>
</div>
