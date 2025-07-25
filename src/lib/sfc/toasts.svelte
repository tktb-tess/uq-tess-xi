<script lang="ts">
	import { toastStates, dismissToast } from './toastStates.svelte';
</script>

{#if toastStates.size > 0}
	<div
		id="toast-root"
		class="fixed z-10000 top-5 left-0 right-0 flex flex-col gap-2 items-center *:max-w-full"
	>
		{#each toastStates as [key, toast]}
			<div
				class="px-3 border-2 bg-white rounded flex
					gap-5 justify-center items-center toast-elem
					{toast.type === 'info'
					? 'border-sky-400'
					: toast.type === 'warning'
						? 'border-red-500'
						: 'border-green-500'}"
			>
				<p class="m-0 text-xl">{toast.message}</p>
				<button
					onclick={() => {
						clearTimeout(toast.timeoutID);
						dismissToast(key);
					}}
					type="button"
					class="text-xl"
				>
					×
				</button>
			</div>
		{/each}
	</div>
{/if}

<style>
	@keyframes fadein {
		from {
			opacity: 0;
			top: -10px;
		}
		to {
			opacity: 1;
			top: 0;
		}
	}

	.toast-elem {
		position: relative;
		animation-timing-function: cubic-bezier(0, 1, 1, 1);
		animation-name: fadein;
		animation-duration: 100ms;
	}
</style>
