<script lang="ts">
	import MyHeader from '$lib/sfc/my_header.svelte';
	import { innerWidth } from 'svelte/reactivity/window';

	let { children } = $props();
	let is_open = $state(false);

	const large = $derived.by(() => {
		if (innerWidth.current) {
			return innerWidth.current >= 1024;
		} else return false;
	});
	
	const toggleOpen = () => {
		is_open = !is_open;
	};
</script>

{#snippet list()}
	<div
		class="
			flex flex-col
			[&_a]:text-black [&_:is(a,summary)]:hover:bg-mnlila [&_:is(a,summary)]:hover:text-white [&_a]:no-underline [&_:is(a,summary)]:transition-colors
			[&_:where(h4,a,summary)]:px-3 [&_:is(h4,a,summary)]:py-2 [&_:is(a,summary)]:rounded-lg
			**:break-words *:me-1
		"
	>
		<h4 class="text-2xl font-sans text-black font-extralight">VÄSSENZLÄNDISĶ</h4>
		<div class="flex flex-col">
			<a href="/vaes">概説</a>
			<a href="/vaes/letter-et-pron">文字と発音</a>
			<a href="/vaes/phonology">音韻論</a>
			<a role="link" aria-disabled="true">Leipzig–Jakarta List (準備中)</a>
			<a role="link" aria-disabled="true">りんご文 (準備中)</a>
			<details>
				<summary class="cursor-pointer [&:not(.dummyclass.dummyclass)]:ps-4">文法 (準備中)</summary>
				<div class="flex flex-col">
					<a role="link" aria-disabled="true">名詞</a>
					<a href="/vaes/numeral">数詞</a>
					<a role="link" aria-disabled="true">動詞</a>
					<a role="link" aria-disabled="true">形容詞</a>
				</div>
			</details>
		</div>
	</div>
	<hr />
	<div 
		class="
			flex flex-col [&_a]:text-black [&_:is(a,summary)]:hover:bg-mnlila [&_:is(a,summary)]:hover:text-white [&_a]:no-underline [&_:is(a,summary)]:transition-colors
			[&_:where(h4,a,summary)]:px-3 [&_:is(h4,a,summary)]:py-2 [&_:is(a,summary)]:rounded-lg
			**:break-words *:me-1
		"
	>
		<h4 class="text-2xl font-sans text-black font-extralight">MISCELLANEOUS</h4>
		<div class="flex flex-col">
			<a href="/data">データ</a>
			<a href="/others">雑多</a>
		</div>
	</div>
{/snippet}

<MyHeader />

<div class="flex flex-wrap [&_*]:min-w-0 ps-2 overflow-x-clip">
	<nav
		class="
			lg:flex-[0_0_calc(3/12*100%)] xl:flex-[0_0_calc(5/24*100%)] 2xl:flex-[0_0_calc(2/12*100%)]
			fixed top-0 left-0 z-1010 lg:z-auto lg:static w-[18rem] lg:w-auto
			[&_:is(p,ul)]:mb-0 pt-4
			h-screen lg:h-[calc(100vh-64px)] overflow-y-auto
			max-lg:translate-x-[-100%] max-lg:data-open:translate-x-0
			max-lg:invisible max-lg:data-open:visible
			max-lg:bg-llila
			max-lg:transition-[translate,visibility]
			flex flex-col gap-y-1
		"
		data-open={is_open ? '' : null}
	>
		{@render list()}
	</nav>

	<!-- drawer backdrop -->
	<div
		role="none"
		class="
			fixed inset-0 z-1000 lg:hidden
			max-lg:invisible max-lg:data-open:visible
			max-lg:bg-transparent max-lg:data-open:bg-black/50
			max-lg:transition-[visibility,background-color]
		"
		data-open={is_open ? '' : null}
		onclick={toggleOpen}
	></div>

	<main class="flex-[1_0_0] bg-slate-50 px-2 flow-root">
		<button
			class="px-3 py-1 bg-black text-white rounded-lg lg:hidden"
			type="button"
			onclick={toggleOpen}>開閉ボタン</button
		>
		{@render children()}
	</main>
</div>

<style>
</style>
