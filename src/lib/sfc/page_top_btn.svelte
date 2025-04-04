<script lang="ts">
	import { scrollY } from 'svelte/reactivity/window';

	let btn: HTMLButtonElement | null = null;

	const onclick = () => {
		window.scroll({ top: 0 });
	};

	const onscroll = () => {
		// console.log('fire!');

		if (btn && scrollY.current) {
			
			if (scrollY.current < 1000) {
				btn.dataset.invisible = '';
			} else {
				delete btn.dataset.invisible;
			}
		}
	};
</script>

<svelte:window {onscroll} />

<button
	{onclick}
	class="
		block fixed right-5 bottom-5 p-2 rounded-[50%] bg-transparent text-gray-600 hover:bg-gray-600 hover:text-white
		transition-[color,background-color,opacity,visibility] data-[invisible]:opacity-0 data-[invisible]:invisible
	"
	type="button"
	aria-label="ページトップへ戻る"
	data-invisible
	bind:this={btn}
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 4 18 18" class="fill-current size-9">
		<path
			d="M18.78 15.78a.749.749 0 0 1-1.06 0L12 10.061 6.28 15.78a.749.749 0 1 1-1.06-1.06l6.25-6.25a.749.749 0 0 1 1.06 0l6.25 6.25a.749.749 0 0 1 0 1.06Z"
		/>
	</svg>
</button>

