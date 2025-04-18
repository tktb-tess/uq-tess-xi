<script lang="ts">
	import { innerWidth } from 'svelte/reactivity/window';
	import Kebab from './kebab.svelte';

	let isOpen = $state(false);

	const large = $derived(
		(typeof innerWidth.current === 'number') 
		? innerWidth.current > 1024 
		: false
	);
</script>

{#snippet links()}
	<a href="/vaes">Vässenzländisķ</a>
	<a href="/data">データ</a>
	<a href="/others">その他</a>
{/snippet}

<header
	class="
        bg-mnlila text-white [&_a]:text-white [&_a]:hover:text-white/70
        [&_a]:transition-colors [&_a]:no-underline [&_a]:block
    "
>
	<div
		class="flex *:flex-[0_0_auto] mx-auto w-[75%] justify-between gap-x-5 [&_a]:flex [&_a]:items-center"
	>
		<h1 class="font-serif text-3xl [&_a]:h-[64px]">
			<a href="/.">悠久肆方体</a>
		</h1>
		{#if large}
			<nav class="flex *:flex-[0_0_auto] items-center gap-x-5 [&_a]:h-[64px]">
				{@render links()}
			</nav>
		{:else}
			<div class="relative">
				<button onclick={() => { isOpen = !isOpen; }} type="button" class="px-12"><Kebab /></button>
				<nav class="absolute hidden data-open:flex *:flex-[0_0_auto] bg-violet-800 flex-col gap-y-2 top-[66px] left-0" data-open={isOpen ? '' : null}>
					{@render links()}
				</nav>
			</div>
		{/if}
	</div>
</header>

<style>

</style>
