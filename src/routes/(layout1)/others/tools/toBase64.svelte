<script lang="ts">
	const encoder = new TextEncoder();
	type Props = {
		seed: string;
	};
	const { seed }: Props = $props();
	let input = $state('');

	const output = $derived.by(() => {
		const utf8 = encoder.encode(input);
		const stred = Array.from(utf8, (n) => String.fromCodePoint(n)).join('');
		return btoa(stred);
	});
</script>

<section aria-labelledby="tool1">
	<h2 class="border-b-3 border-double ps-1" id="tool1">テキスト → Base64 変換</h2>
	<div class="flex flex-col gap-3">
		<div class="flex flex-col gap-2 items-center">
			<label for="input-{seed}" class="">テキスト</label>
			<textarea class="w-full h-[8rem]" id="input-{seed}" bind:value={input}></textarea>
		</div>
		<p class="text-center m-0">↓</p>
		<div class="flex flex-col gap-2 items-center">
			<label for="output-{seed}" class="">Base64</label>
			<textarea class="w-full h-[8rem]" id="output-{seed}" readonly>{output}</textarea>
		</div>
	</div>
</section>
