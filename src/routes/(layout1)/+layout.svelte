<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import CloseButton from '$lib/sfc/close_button.svelte';
	import DetailsArrow from '$lib/sfc/details-arrow.svelte';
	import Hamburger from '$lib/sfc/hamburger.svelte';
	import Kebab from '$lib/sfc/kebab.svelte';
	import PageTopBtn from '$lib/sfc/page_top_btn.svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import { innerWidth } from 'svelte/reactivity/window';

	const { children } = $props();
	let drawerIsOpen = $state(false);
	let headMenuIsOpen = $state(false);
	let acrdnIsOpen = $state(false);
	let open = $state(false);
	let dataOpen = $state(false);

	$effect(() => {
		const offset = 10;
		const transitionDur = 250;

		if (acrdnIsOpen) {
			open = true;
			setTimeout(() => {
				if (acrdnIsOpen) dataOpen = true;
			}, offset);
		} else {
			dataOpen = false;

			setTimeout(() => {
				if (!acrdnIsOpen) open = false;
			}, offset + transitionDur);
		}
	});

	const large = $derived(
		typeof innerWidth.current === 'number' ? innerWidth.current > 1024 : false
	);

	const onClickCloseBtn: MouseEventHandler<HTMLButtonElement> = () => {
		drawerIsOpen = false;
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

	const onClickDetails: MouseEventHandler<HTMLElement> = async (e) => {
		e.preventDefault();
		acrdnIsOpen = !acrdnIsOpen;
	};

	onNavigate(
		() =>
			new Promise((resolve) => {
				drawerIsOpen = false;
				resolve();
			})
	);
</script>

{#snippet sideMenu()}
	<div class="side-menu">
		<h4 class="text-2xl font-sans text-black font-extralight">VÄSSENZLÄNDISĶ</h4>
		<div class="flex flex-col">
			<a href="/vaes">概説</a>
			<a href="/vaes/letter-et-pron">文字と発音</a>
			<a href="/vaes/phonology">音韻論</a>
			<a aria-disabled="true">Leipzig–Jakarta List (準備中)</a>
			<a aria-disabled="true">りんご文 (準備中)</a>
			<details class="" {open}>
				<summary onclick={onClickDetails} class="block cursor-pointer user-select-none">
					<DetailsArrow
						class="
							size-4.5 transition-transform duration-250 translate-y-[-1px]
							{dataOpen ? 'rotate-x-180' : null}
						"
					/>
					文法 (準備中)
				</summary>
				<div
					class="
						flex flex-col invisible h-0 overflow-y-hidden
						data-open:visible data-open:h-[calc-size(auto,size)] transition-[height,visibility]
						duration-250
					"
					data-open={dataOpen ? '' : null}
				>
					<a aria-disabled="true">名詞 (準備中)</a>
					<a href="/vaes/numeral">数詞</a>
					<a aria-disabled="true">動詞 (準備中)</a>
					<a aria-disabled="true">形容詞 (準備中)</a>
				</div>
			</details>
		</div>
	</div>
	<hr class="border-black/30 w-15 mx-auto my-4" />
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
	<a href="/others">雑多</a>
{/snippet}

<header
	class="
        bg-mnlila text-white [&_a]:text-white [&_a]:no-underline [&_a]:any-hover:text-white/70 [&_a]:transition-colors
    "
>
	<div class="flex *:flex-[0_0_auto] mx-auto justify-between w-[90%] md:w-[75%] gap-x-5">
		{#if !large}
			<button
				class="text-white hover:text-white/70 transition-colors"
				type="button"
				onclick={() => {
					drawerIsOpen = true;
				}}
			>
				<Hamburger class="size-6" />
			</button>
		{/if}
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
			<div class="relative ms-auto">
				<button
					class="grid h-[64px] place-content-center transition-colors any-hover:text-white/70"
					onclick={onClickHeadMenu}
				>
					<Kebab class="size-5" />
				</button>
				<nav
					class="
						absolute flex invisible data-open:visible transition-[visibility,scale,translate] flex-col *:block *:text-center *:flex-[0_0_auto]
						*:bg-mnlila *:px-2 *:py-1 *:rounded-lg gap-y-1 top-[64px] -right-3 w-max scale-y-0
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

<div class="flex flex-wrap *:min-w-0 overflow-x-clip">
	{#if large}
		<div>
			<nav class="non-drawer">
				{@render sideMenu()}
			</nav>
		</div>
	{:else}
		<!-- drawer backdrop -->
		<button
			type="button"
			onclick={onClickCloseBtn}
			class="drawer-backdrop"
			data-open={drawerIsOpen ? '' : null}
			aria-label="close sidemenu"
		></button>
		<nav class="drawer" data-open={drawerIsOpen ? '' : null}>
			<div class="flex justify-end px-4">
				<button
					type="button"
					onclick={onClickCloseBtn}
					class="transition-colors any-hover:text-black/60"
				>
					<CloseButton class="size-6" />
				</button>
			</div>

			{@render sideMenu()}
		</nav>
	{/if}

	<main class="flex-[1_0_0] bg-slate-50 px-4 flex flex-col gap-y-5">
		{@render children()}
	</main>
</div>

<PageTopBtn />

<style>
	.side-menu {
		display: flex;
		flex-direction: column;

		* {
			overflow-wrap: break-word;
		}

		> * {
			margin-inline: var(--spacing);
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

			@media (any-hover: hover) {
				&:hover {
					background-color: var(--color-mnlila);
					color: white;
				}
			}
		}

		:where(h4, a, summary) {
			padding: calc(var(--spacing) * 2) calc(var(--spacing) * 3);
		}

		details > div > a {
			padding-inline-start: calc(var(--spacing) * 5);
		}
	}

	.drawer,
	.drawer-backdrop {
		transition-duration: var(--default-transition-duration);
	}

	.drawer-backdrop {
		display: block;
		cursor: initial;
		position: fixed;
		text-align: start;
		inset: 0;
		visibility: hidden;
		z-index: 10;
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

	.drawer,
	.non-drawer {
		display: flex;
		flex-direction: column;
		row-gap: calc(var(--spacing) * 1);
		padding-block: calc(var(--spacing) * 4);
		scrollbar-width: thin;
	}

	.drawer {
		height: 100vh;
		position: fixed;
		overflow-y: auto;
		z-index: 20;
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
		height: 100vh;
		overflow-y: auto;
		position: sticky;
		top: 0;
	}

	div:has(> .non-drawer) {
		flex: 0 0 calc(6 / 24 * 100%);

		@media (width >= 80rem) {
			flex: 0 0 calc(5 / 24 * 100%);
		}

		@media (width >= 96rem) {
			flex: 0 0 calc(4 / 24 * 100%);
		}
	}
</style>
