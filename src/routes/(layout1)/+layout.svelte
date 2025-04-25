<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import DetailsArrow from '$lib/sfc/details-arrow.svelte';
	import Hamburger from '$lib/sfc/hamburger.svelte';
	import Kebab from '$lib/sfc/kebab.svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import { innerWidth } from 'svelte/reactivity/window';

	const { children } = $props();
	let drawerIsOpen = $state(false);
	let headMenuIsOpen = $state(false);
	let accordionIsOpen = $state(false);
	let accordion: HTMLDetailsElement | null = null;

	const large = $derived(
		typeof innerWidth.current === 'number' ? innerWidth.current > 1024 : false
	);

	const onClickBackdrop: MouseEventHandler<HTMLButtonElement> = (e) => {
		if (e.target === e.currentTarget) {
			drawerIsOpen = false;
		}
	};

	const onClickHeadMenu: MouseEventHandler<HTMLButtonElement> = () => {
		if (!headMenuIsOpen) {
			headMenuIsOpen = true;

			setTimeout(() => {
				const handleClose = () => {
					headMenuIsOpen = false;
				};

				window.addEventListener('click', handleClose, { once: true });
			}, 10);
		}
	};

	const onClickDetails: MouseEventHandler<HTMLElement> = (e) => {
		e.preventDefault();

		if (!accordionIsOpen) {
			if (accordion) {
				accordion.open = true;
			}

			setTimeout(() => {
				accordionIsOpen = true;
			}, 10);
		} else {
			accordionIsOpen = false;

			setTimeout(() => {
				if (accordion) {
					accordion.open = false;
				}
			}, 260);
		}
	};

	onNavigate(() => {
		return new Promise((resolve) => {
			drawerIsOpen = false;
			resolve();
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
			<details bind:this={accordion} class="">
				<summary onclick={onClickDetails} class="block cursor-pointer user-select-none">
					<DetailsArrow
						class="
							size-6 transition-[rotate] duration-250
							{accordionIsOpen ? 'rotate-90' : null}
						"
					/>
					文法 (準備中)
				</summary>
				<div
					class="
						flex flex-col invisible h-0 overflow-y-hidden
						data-opened:visible data-opened:h-[calc-size(auto,size)] transition-[height,visibility]
						duration-250
					"
					data-opened={accordionIsOpen ? '' : null}
				>
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

{#snippet links()}
	<a href="/vaes">Vässenzländisķ</a>
	<a href="/data">データ</a>
	<a href="/others">その他</a>
{/snippet}

<header
	class="
        bg-mnlila text-white [&_a]:text-white [&_a]:no-underline
    "
>
	<div class="flex *:flex-[0_0_auto] mx-auto w-[75%] justify-between gap-x-5">
		<h1 class="font-serif text-3xl [&_a]:h-[64px]">
			<a class="flex items-center" href="/.">悠久肆方体</a>
		</h1>
		{#if large}
			<nav
				class="flex *:flex-[0_0_auto] items-center gap-x-5 [&_a]:h-[64px] [&_a]:flex [&_a]:items-center"
			>
				{@render links()}
			</nav>
		{:else}
			<div class="relative">
				<button class="grid h-[64px] place-content-center" onclick={onClickHeadMenu}>
					<Kebab />
				</button>
				<nav
					class="
						absolute flex invisible data-open:visible transition-[visibility,scale,translate] flex-col *:block *:text-center *:flex-[0_0_auto]
						*:bg-mnlila *:px-2 *:py-1 *:rounded-lg gap-y-1 top-[64px] left-[-70px] w-max scale-y-0
						-translate-y-[52px] data-open:scale-y-100 data-open:translate-y-0
					"
					data-open={headMenuIsOpen ? '' : null}
				>
					{@render links()}
				</nav>
			</div>
		{/if}
	</div>
</header>

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
			data-open={drawerIsOpen ? '' : null}
		>
			<nav class="drawer" data-open={drawerIsOpen ? '' : null}>
				{@render sideMenu()}
			</nav>
		</button>
	{/if}

	<main class="flex-[1_0_0] bg-slate-50 px-2 flow-root">
		<button
			class="px-3 py-1 mt-2 bg-black text-white rounded-lg lg:hidden hover:text-white/70 transition-colors"
			type="button"
			onclick={() => {
				drawerIsOpen = true;
			}}
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
			padding: calc(var(--spacing) * 2) calc(var(--spacing) * 3);
		}

		details > div > a {
			padding-inline-start: calc(var(--spacing) * 4);
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
		transition-timing-function: cubic-bezier(0, 0.2, 1, 0);
		overflow-x: hidden;

		&[data-open] {
			visibility: visible;
			transition-timing-function: cubic-bezier(0, 1, 0.8, 1);
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

	.user-select-none {
		user-select: none;
		-webkit-user-select: none;
	}
</style>
