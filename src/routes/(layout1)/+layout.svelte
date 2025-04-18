<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Hamburger from '$lib/sfc/hamburger.svelte';
	import MyHeader from '$lib/sfc/my_header.svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import { innerWidth } from 'svelte/reactivity/window';

	const { children } = $props();
	let is_open = $state(false);

	const large = $derived.by(() => {
		if (typeof innerWidth.current === 'number') {
			return innerWidth.current >= 1024;
		} else return false;
	});

	const onClickBackdrop: MouseEventHandler<HTMLButtonElement> = (e) => {
		if (e.target === e.currentTarget) {
			is_open = false;
		}
	};

	onNavigate((nav) => {
		return new Promise(async (resolve) => {
			is_open = false;
			resolve();
			await nav.complete;
		});
	});
</script>

{#snippet sideMenu()}
	<div class="side-menu">
		<h4 class="text-2xl font-sans text-black font-extralight">VÄSSENZLÄNDISĶ</h4>
		<div class="flex flex-col">
			<a href="/vaes">概説</a>
			<a href="/vaes/letter-et-pron">文字と発音</a>
			<a href="/vaes/phonology">音韻論</a>
			<a href="/vaes/LJ-list">Leipzig–Jakarta List (準備中)</a>
			<a href="/vaes/ringo-bunn">りんご文 (準備中)</a>
			<details>
				<summary class="cursor-pointer">文法 (準備中)</summary>
				<div class="flex flex-col">
					<a href="/vaes/noun">名詞</a>
					<a href="/vaes/numeral">数詞</a>
					<a href="/vaes/verb">動詞</a>
					<a href="/vaes/adjective">形容詞</a>
				</div>
			</details>
		</div>
	</div>
	<hr />
	<div class="side-menu">
		<h4 class="text-2xl font-sans text-black font-extralight">MISCELLANEOUS</h4>
		<div class="flex flex-col">
			<a href="/data">データ</a>
			<a href="/others">雑多</a>
		</div>
	</div>
{/snippet}

<MyHeader />

<div class="flex flex-wrap [&_*]:min-w-0 ps-2 overflow-x-clip">
	{#if large}
		<nav class="non-drawer">
			{@render sideMenu()}
		</nav>
	{:else}
		<!-- drawer backdrop -->
		<button
			type="button"
			onclick={onClickBackdrop}
			class="drawer-backdrop"
			data-open={is_open ? '' : null}
		>
			<nav class="drawer" data-open={is_open ? '' : null}>
				{@render sideMenu()}
			</nav>
		</button>
	{/if}

	<main class="flex-[1_0_0] bg-slate-50 px-2 flow-root">
		<button
			class="px-3 py-1 mt-2 bg-black text-white rounded-lg lg:hidden hover:text-white/70 transition-colors"
			type="button"
			onclick={() => { is_open = true; }}
		>
			<Hamburger />
		</button>
		{@render children()}
	</main>
</div>

<style>
	.side-menu {
		display: flex;
		flex-direction: column;

		* {
			overflow-wrap: break-word;
		}

		> * {
			margin-inline-end: var(--spacing);
		}

		:where(a) {
			color: var(--color-black);
			text-decoration: none;
		}

		:where(a, summary) {
			transition-property: color, background-color;
			transition-timing-function: var(--default-transition-timing-function);
			transition-duration: var(--default-transition-duration);
			border-radius: 0.5rem;

			&:hover {
				background-color: var(--color-mnlila);
				color: white;
			}
		}

		:where(h4, a, summary) {
			padding-block: calc(var(--spacing) * 2);
		}

		:where(h4, a) {
			padding-inline: calc(var(--spacing) * 3);
		}

		:where(summary) {
			padding-inline: calc(var(--spacing) * 4) calc(var(--spacing) * 3);
		}
	}

	:is(.drawer, .drawer-backdrop) {
		transition-duration: var(--default-transition-duration);
	}

	.drawer-backdrop {
		display: block;
		cursor: initial;
		position: fixed;
		text-align: start;
		inset: 0;
		visibility: hidden;
		z-index: 1000;
		background-color: transparent;
		transition-property: visibility, background-color;
		transition-timing-function: cubic-bezier(0, .2, 1, 0);
		overflow-x: hidden;

		&[data-open] {
			visibility: visible;
			transition-timing-function: cubic-bezier(0, 1, .8, 1);
			background-color: color-mix(in oklch, black 50%, transparent);
		}
	}

	:is(.drawer, .non-drawer) {
		display: flex;
		flex-direction: column;
		row-gap: calc(var(--spacing) * 1);
		overflow-y: auto;
		padding-block: calc(var(--spacing) * 4);
	}

	.drawer {
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		width: 18rem;
		background-color: var(--color-llila);
		transition-property: transform, visibility;
		transform: translate(-100%);
		transition-timing-function: cubic-bezier(0, 0, 1, 0);

		&[data-open] {
			transition-timing-function: cubic-bezier(0, 1, 1, 1);
			transform: translate(0);
		}
	}

	.non-drawer {
		flex: 0 0 calc(6 / 24 * 100%);
		height: calc(100vh - 64px);

		@media (width >= 80rem) {
			flex: 0 0 calc(5 / 24 * 100%);
		}

		@media (width >= 96rem) {
			flex: 0 0 calc(4 / 24 * 100%);
		}
	}
</style>
