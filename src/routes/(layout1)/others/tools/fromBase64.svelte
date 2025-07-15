<script lang="ts">
	type Props = {
		seed: string;
	}
	const { seed }: Props = $props();
	const decoder = new TextDecoder();
	let input = $state('');

	const output = $derived.by(() => {
		try {
			const stred = atob(input);
			const utf8 = Uint8Array.from(stred, (s) => s.charCodeAt(0));
			return decoder.decode(utf8);
		} catch (e) {
			return `invalid string`;
		}
	});

	const copyText = () => {
		navigator.clipboard.writeText(output)
		.then(() => alert('copied!'))
		.catch((e) => alert(`failed to copy: ${e}`));
	};
</script>

<section aria-labelledby={seed}>
	<h2 class="border-b-3 border-double ps-1" id={seed}>Base64 → テキスト 変換</h2>
	<div class="flex flex-col gap-3">
		<div class="flex flex-col gap-2 items-center">
			<label for="input-{seed}" class="flex-[0_0_auto]">Base64</label>
			<textarea class="w-full h-[8rem]" id="input-{seed}" bind:value={input}></textarea>
		</div>
		<p class="text-center m-0">↓</p>
		<div class="flex flex-col gap-2 items-center">
			<label for="output-{seed}" class="flex-[0_0_auto]">元テキスト (枠内をクリックするとコピーできます)</label>
			<textarea onclick={copyText} class="w-full h-[8rem]" id="output-{seed}" readonly>{output}</textarea>
		</div>
	</div>
</section>
