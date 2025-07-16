<script lang="ts">
	type Props = {
		exps: readonly number[];
		logs: readonly (number | null)[];
		seed: string;
	};

	type Mode = '+' | '\u00D7' | '÷';
	const { exps, logs, seed }: Props = $props();

	let leftVal = $state(0);
	let rightVal = $state(0);
	let mode = $state<Mode>('+');

	const changeMode = () => {
		switch (mode) {
			case '+': {
				mode = '×';
				break;
			}
			case '×': {
				mode = '÷';
				break;
			}
			case '÷': {
				mode = '+';
				break;
			}
		}
	};

	const result = $derived.by(() => {
		const cond = leftVal >= 0 && leftVal < 2048 && rightVal >= 0 && rightVal < 2048;
		if (!cond) return NaN;
		switch (mode) {
			case '+': {
				return leftVal ^ rightVal;
			}
			case '×': {
				const l = logs[leftVal];
				const r = logs[rightVal];
				if (l === null || r === null) {
					return 0;
				}
				const resExp = (l + r) % 2047;
				return exps[resExp];
			}
			case '÷': {
				const l = logs[leftVal];
				const r = logs[rightVal];
				if (r === null) {
					return NaN;
				} else if (l === null) {
					return 0;
				}
				const resExp = (l - r + 2047) % 2047;
				return exps[resExp];
			}
		}
	});
</script>

<section aria-labelledby={seed}>
	<h2 class="border-b-3 border-double ps-1" id={seed}>変な式</h2>
	<p><s>この式、なんか変……</s></p>
	<div class="flex justify-center *:min-w-0 items-center my-5 gap-4">
		<input
			type="number"
			min="0"
			max="2047"
			class="border border-slate-300 rounded px-1 bg-white w-20"
			bind:value={
				() => leftVal.toString(),
				(v) => {
					leftVal = Number.parseInt(v);
				}
			}
		/>
		<button onclick={changeMode} type="button" class="btn-2 text-xl">{mode}</button>
		<input
			type="number"
			min="0"
			max="2047"
			class="border border-slate-300 rounded px-1 bg-white w-20"
			bind:value={
				() => rightVal.toString(),
				(v) => {
					rightVal = Number.parseInt(v);
				}
			}
		/>
		<p class="m-0 text-xl">=</p>
		<textarea class="overflow-x-auto w-20" rows="1" readonly>{result}</textarea>
	</div>
</section>
