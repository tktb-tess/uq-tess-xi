<script lang="ts">
	const encoder = new TextEncoder();
	let input = $state('');

	const output = $derived.by(() => {
		const utf8 = encoder.encode(input);
		const stred = Array.from(utf8, (n) => String.fromCodePoint(n)).join('');
		return btoa(stred);
	});
</script>

<section aria-labelledby="tool1">
	<h2 class="border-b-3 border-double ps-1" id="tool1">テキスト → Base64変換</h2>
	<div class="flex flex-col gap-2">
		<label class="flex gap-2 justify-center">
			テキスト:
			<textarea class="" id="input" bind:value={input}></textarea>
		</label>
		<label class="flex gap-2 justify-center">
			Base64:
			<textarea id="output" readonly>{output}</textarea>
		</label>
	</div>
</section>
