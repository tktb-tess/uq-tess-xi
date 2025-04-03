<script lang="ts">
	import MyHeader from '$lib/sfc/my_header.svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<MyHeader />

<div class="flex flex-wrap [&_*]:min-w-0 px-2">
	<nav
		class="
			flex-[100%] lg:flex-3/12 xl:flex-2/12 [&_:is(p,ul)]:mb-0 pt-4 md:h-[calc(100vh-64px)] md:overflow-x-auto
			[&_a]:text-black [&_a]:hover:bg-mnlila [&_a]:hover:text-white flex flex-col **:break-words
			[&_:is(h4,a,summary)]:px-3 [&_:is(h4,a,summary)]:py-2 *:me-1
		"
	>
		<div class="flex flex-col">
			<h4 class="text-2xl font-light">Vässenzländisķ</h4>
			<div class="flex flex-col">
				<a href="/vaes">概説</a>
				<a href="/vaes/letterandpron">文字と発音</a>
				<a href="/vaes/phonology">音韻論</a>
				<a href="/vaes">Leipzig–Jakarta List (準備中)</a>
				<a href="/vaes">りんご文 (準備中)</a>
				<details>
					<summary class="cursor-pointer block">文法</summary>
					<div class="flex flex-col">
						<a href="/vaes">名詞</a>
						<a href="/vaes">数詞</a>
						<a href="/vaes">動詞</a>
						<a href="/vaes">形容詞</a>
					</div>
				</details>
			</div>
		</div>
		<div class="flex flex-col">
			<h4 class="text-2xl font-light">データ</h4>
			<div class="flex flex-col">
				<a href="/vaes">古英語の動詞活用まとめ</a>
			</div>
		</div>
	</nav>
	<main class="flex-[100%] lg:flex-9/12 xl:flex-10/12 bg-slate-50">
		{@render children()}
	</main>
</div>

<style>
</style>
