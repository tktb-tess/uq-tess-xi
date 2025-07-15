<script lang="ts">
	import type { Primes } from '../../../api/v0/prime/+server';

	type Props = {
		seed: string;
	};

	let min = $state(2n);
	let max = $state(1024n);
	let primesPr = $state<Promise<Primes> | null>(null);

	const { seed }: Props = $props();
	const LIMIT = `${(1n << 64n) - 1n}`;

	const fetchPrimes = async () => {
		const resp = await fetch(`/api/v0/prime?min=${min}&max=${max}`, { method: 'GET' });
        // console.log(resp);
		if (!resp.ok) {
			primesPr = Promise.resolve<Primes>({
				success: false,
				status: `${resp.status}`,
				message: resp.statusText
			});
            return;
		}

		primesPr = resp.json();
	};
</script>

<section aria-labelledby={seed}>
	<h2 class="border-b-3 border-double ps-1" id={seed}>素数あてクイズ</h2>
	<div class="flex flex-col items-center">
		<div class="flex justify-center gap-8 h-full max-h-[400px]">
			<div>
				<label for="{seed}-input1">下限</label>
				<input type="number" min="2" max={LIMIT} id="{seed}-input1" bind:value={min} />
			</div>
			<div>
				<label for="{seed}-input2">上限</label>
				<input type="number" min="2" max={LIMIT} id="{seed}-input2" bind:value={max} />
			</div>
		</div>
		<button onclick={fetchPrimes} type="button" class="btn-1 my-4">表示</button>
		<p class="my-4 border bg-white px-2 rounded border-slate-300 text-2xl font-mono">
			{#if primesPr}
				{#await primesPr}
					読み込み中……
                {:then primes}
                    {#if primes.success}
                        {BigInt(primes.p) * BigInt(primes.q)}
                    {:else}
                        エラー {primes.status}: {primes.message}
                    {/if}
                {:catch e}
                    エラー: {e}
				{/await}
			{:else}
				----
			{/if}
		</p>
	</div>
</section>
