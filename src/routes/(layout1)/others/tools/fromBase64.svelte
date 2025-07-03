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
			return `could not convert`;
		}
	});
</script>

<section aria-labelledby="tool2">
	<h2 class="border-b-3 border-double ps-1" id="tool2">Base64 → テキスト 変換</h2>
	<div class="flex flex-col gap-3">
		<div class="flex gap-2 justify-center">
			<label for="input-{seed}" class="flex-[0_0_auto]">Base64:</label>
			<textarea class="h-[8rem] flex-[1_0_0]" id="input-{seed}" bind:value={input}></textarea>
		</div>
		<p class="text-center m-0">↓</p>
		<div class="flex gap-2 justify-center">
			<label for="output-{seed}" class="flex-[0_0_auto]">テキスト:</label>
			<textarea class="w-full h-[8rem] flex-[1_0_0]" id="output-{seed}" readonly>{output}</textarea>
		</div>
	</div>
</section>
