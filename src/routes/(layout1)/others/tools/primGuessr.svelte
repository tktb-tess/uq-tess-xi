<script lang="ts">
	import type { Primes } from '../../../api/v0/prime/+server';

	type Props = {
		seed: string;
	};
	const { seed }: Props = $props();

	let min = $state(2n);
	let max = $state(1024n);
	let guessp = $state(2n);
	let guessq = $state(3n);
	let primesPr = $state<Promise<Primes> | null>(null);

	const judgePr = $derived.by(async () => {
		const p_ = guessp, q_ = guessq;
		if (!primesPr) return null;
		const primes = await primesPr;
		if (!primes.success) return null;
		const p = BigInt(primes.p),
			q = BigInt(primes.q);
		return (p === p_ && q === q_) || (p === q_ && q === p_);
	});
	const LIMIT = `${(1n << 64n) - 1n}`;

	const fetchPrimes = async () => {
		const resp = await fetch(`/api/v0/prime?min=${min}&max=${max}`, { method: 'GET' });

		if (!resp.ok) {
			primesPr = Promise.resolve<Primes>({
				success: false,
				status: resp.status,
				message: resp.statusText
			});
			return;
		}

		primesPr = resp.json();
	};
</script>

<section aria-labelledby={seed}>
	<h2 class="border-b-3 border-double ps-1" id={seed}>素因数分解クイズ</h2>
	<p>「表示」を押す度、上限以上、下限未満の2つの素数の積が表示されます。上限下限の範囲は 2 以上 2<sup>64</sup> (= 18,446,744,073,709,551,616) 未満です。</p>
	<div class="flex flex-col gap-5">
		<div class="flex justify-center gap-8 h-full max-h-[400px]">
			<div>
				<label for="{seed}-input1">下限</label>
				<input
					type="number"
					min="2"
					max={LIMIT}
					id="{seed}-input1"
					bind:value={
						() => min.toString(),
						(v) => {
							min = BigInt(v);
						}
					}
				/>
			</div>
			<div>
				<label for="{seed}-input2">上限</label>
				<input
					type="number"
					min="2"
					max={LIMIT}
					id="{seed}-input2"
					bind:value={
						() => max.toString(),
						(v) => {
							max = BigInt(v);
						}
					}
				/>
			</div>
		</div>
		<button onclick={fetchPrimes} type="button" class="btn-1 text-xl self-center">表示</button>
		<p class="my-4 border bg-white px-2 rounded border-slate-300 text-2xl font-mono self-center">
			{#await primesPr}
				読み込み中……
			{:then primes}
				{#if !primes}
					----
				{:else if primes.success}
					{BigInt(primes.p) * BigInt(primes.q)}
				{:else}
					エラー {primes.status}: {primes.message}
				{/if}
			{:catch e}
				エラー: {e}
			{/await}
		</p>
		<div class="flex justify-center gap-8 h-full max-h-[400px]">
			<div>
				<label for="{seed}-input3">素数1</label>
				<input
					type="number"
					min="2"
					max={LIMIT}
					id="{seed}-input1"
					bind:value={
						() => guessp.toString(),
						(v) => {
							guessp = BigInt(v);
						}
					}
				/>
			</div>
			<div>
				<label for="{seed}-input4">素数2</label>
				<input
					type="number"
					min="2"
					max={LIMIT}
					id="{seed}-input2"
					bind:value={
						() => guessq.toString(),
						(v) => {
							guessq = BigInt(v);
						}
					}
				/>
			</div>
		</div>
		{#await judgePr then judge}
			{#if judge === true}
				<p
					class="my-4 border bg-white px-2 rounded border-slate-300 text-2xl font-mono self-center text-[red]"
				>
					〇
				</p>
			{:else if judge === false}
				<p
					class="my-4 border bg-white px-2 rounded border-slate-300 text-2xl font-mono self-center text-[blue]"
				>
					×
				</p>
			{/if}
		{/await}
	</div>
</section>
