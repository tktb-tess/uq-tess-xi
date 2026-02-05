<script lang="ts">
  import Spinner from '$lib/components/Spinner.svelte';
  import type { Primes } from '../../../api/v0/prime/+server';

  type Props = {
    seed: string;
  };
  const { seed }: Props = $props();

  let min = $state(2n);
  let max = $state(1024n);
  let guessp = $state(3n);
  let guessq = $state(19n);
  let primesPr = $state<Promise<Primes> | null>(null);
  let judge = $state<boolean | null>(null);

  /** 2^64 */
  const LIMIT = 1n << 64n;

  const changeGuesses = async () => {
    if (!primesPr) {
      judge = null;
      return;
    }
    try {
      const [p, q] = await primesPr.then(({ p, q }) => [BigInt(p), BigInt(q)] as const);

      judge = (p === guessp && q === guessq) || (p === guessq && q === guessp);
    } catch (e) {
      console.error(e);
      judge = null;
    }
  };

  const fetchPrimes = async () => {
    const resp = await fetch(`/api/v0/prime?min=${min}&max=${max}`, { method: 'GET' });
    // console.log(resp);
    if (!resp.ok) {
      primesPr = Promise.reject(Error(`${resp.status} ${resp.statusText}`));
      return;
    }

    primesPr = resp.json();
    await changeGuesses();
  };
</script>

<section aria-labelledby={seed}>
  <h2 id={seed}>素因数分解クイズ</h2>
  <p>
    「表示」を押す度に、下限以上、上限未満の2つの素数の積がランダムに表示されます。上限下限に指定できる整数の範囲は
    2 以上 2<sup>64</sup> (= 18,446,744,073,709,551,616) 以下です。
  </p>

  <div class="flex flex-col gap-5 my-(--s-figure)">
    <div class="flex justify-center gap-8 *:min-w-0">
      <div>
        <label for="{seed}-input1">下限</label>
        <input
          type="text"
          id="{seed}-input1"
          class="w-40 max-w-full"
          bind:value={
            () => min.toString(),
            (v) => {
              try {
                const pre = BigInt(v);
                min = pre < 0n ? 0n : pre > LIMIT ? LIMIT : pre;
              } catch (e) {
                console.error(e);
                min = 2n;
              }
            }
          }
        />
      </div>
      <div>
        <label for="{seed}-input2">上限</label>
        <input
          type="text"
          id="{seed}-input2"
          class="w-40 max-w-full"
          bind:value={
            () => max.toString(),
            (v) => {
              try {
                const pre = BigInt(v);
                max = pre < 0n ? 0n : pre > LIMIT ? LIMIT : pre;
              } catch (e) {
                console.error(e);
                max = 1024n;
              }
            }
          }
        />
      </div>
    </div>
    <button onclick={fetchPrimes} type="button" class="btn-1 text-xl self-center">表示</button>
    <p
      class="my-4 border cborder-border-dark px-2 rounded text-2xl font-mono self-center text-center min-w-0 max-w-full"
    >
      {#await primesPr}
        <Spinner class="size-6" />
        読み込み中……
      {:then primes}
        {#if !primes}
          ----
        {:else}
          {BigInt(primes.p) * BigInt(primes.q)}
        {/if}
      {:catch e}
        {e}
      {/await}
    </p>

    <div class="flex justify-center gap-8 *:min-w-0">
      <div>
        <label for="{seed}-input3">素数1</label>

        <input
          type="text"
          id="{seed}-input1"
          class="w-38 max-w-full"
          disabled={judge === null}
          bind:value={
            () => guessp.toString(),
            (v) => {
              try {
                const pre = BigInt(v);
                guessp = pre < 0n ? 0n : pre > LIMIT ? LIMIT : pre;
              } catch (e) {
                console.error(e);
                guessp = 3n;
              }
            }
          }
          onchange={changeGuesses}
        />
      </div>
      <div>
        <label for="{seed}-input4">素数2</label>

        <input
          type="text"
          id="{seed}-input2"
          class="w-38 max-w-full"
          disabled={judge === null}
          bind:value={
            () => guessq.toString(),
            (v) => {
              try {
                const pre = BigInt(v);
                guessq = pre < 0n ? 0n : pre > LIMIT ? LIMIT : pre;
              } catch (e) {
                console.error(e);
                guessq = 19n;
              }
            }
          }
          onchange={changeGuesses}
        />
      </div>
    </div>

    {#if judge !== null}
      <p
        class="
					my-4 border px-2 rounded text-2xl font-mono self-center cborder-border-dark
					{judge ? 'text-red-600' : 'text-blue-600'}
					"
      >
        {judge ? '〇' : '×'}
      </p>
    {/if}
  </div>
</section>
