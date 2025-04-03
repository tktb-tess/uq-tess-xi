<script lang="ts">
	import MyHeader from '$lib/sfc/my_header.svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<MyHeader />

<div class="flex flex-wrap [&_*]:min-w-0 mx-2">
	<nav
		class="flex-[100%] md:flex-3/12 lg:flex-2/12 mt-5 md:sticky [&_:is(p,ul)]:mb-0 ps-5 [&_a]:text-black [&_a]:hover:text-black/60"
	>
		<div>
			<p>Vässenzländisķ</p>
			<ul class="list-none [&_li]:p-0">
				<li><a href="/vaes">概説</a></li>
				<li><a href="/vaes/letterandpron">文字と発音</a></li>
				<li><a href="/vaes/phonology">音韻論</a></li>
				<li>Leipzig–Jakarta List (準備中)</li>
				<li>りんご文 (準備中)</li>
				<li>
					文法
					<ul class="list-none [&_li]:p-0">
						<li>名詞</li>
						<li>数詞</li>
						<li>動詞</li>
						<li>形容詞</li>
					</ul>
				</li>
			</ul>
		</div>
		<div>
			<p>データ</p>
			<ul class="list-none [&_li]:p-0">
				<li>古英語の動詞活用まとめ</li>
			</ul>
		</div>
	</nav>
	<main class="flex-[100%] md:flex-9/12 lg:flex-10/12">
		{@render children()}
	</main>
</div>

<style>
</style>
