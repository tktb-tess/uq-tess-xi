<script lang="ts">
	import MyHeader from '$lib/sfc/my_header.svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<MyHeader />

<div class="flex flex-wrap [&_*]:min-w-0 ps-2">
	<nav
		class="
			flex-[100%] lg:flex-[0_0_calc(3/12*100%)] xl:flex-[0_0_calc(5/24*100%)] 2xl:flex-[0_0_calc(2/12*100%)] [&_:is(p,ul)]:mb-0 pt-4 lg:h-[calc(100vh-64px)] lg:overflow-x-auto
			[&_a]:text-black [&_:is(a,summary)]:hover:bg-mnlila [&_:is(a,summary)]:hover:text-white [&_a]:no-underline [&_:is(a,summary)]:transition-colors flex flex-col gap-y-1 **:break-words
			[&_:is(h4,a,summary)]:px-3 [&_:is(h4,a,summary)]:py-2 [&_:is(a,summary)]:rounded-lg *:me-1
		"
	>
		<div class="flex flex-col">
			<h4 class="text-2xl font-sans text-black font-extralight">VÄSSENZLÄNDISĶ</h4>
			<div class="flex flex-col">
				<a href="/vaes">概説</a>
				<a href="/vaes/letter-et-pron">文字と発音</a>
				<a href="/vaes/phonology">音韻論</a>
				<a role="link" aria-disabled="true">Leipzig–Jakarta List (準備中)</a>
				<a role="link" aria-disabled="true">りんご文 (準備中)</a>
				<details>
					<summary class="cursor-pointer block">文法 (準備中)</summary>
					<div class="flex flex-col">
						<a role="link" aria-disabled="true">名詞</a>
						<a role="link" aria-disabled="true">数詞</a>
						<a role="link" aria-disabled="true">動詞</a>
						<a role="link" aria-disabled="true">形容詞</a>
					</div>
				</details>
			</div>
		</div>
		<hr>
		<div class="flex flex-col">
			<h4 class="text-2xl font-sans text-black font-extralight">MISCELLANEOUS</h4>
			<div class="flex flex-col">
				<a href="/data">データ</a>
				<a href="/others">雑多</a>
			</div>
		</div>
	</nav>
	<main class="flex-[1_1_0] bg-slate-50 px-2 flow-root">
		{@render children()}
	</main>
</div>

<style>
</style>
