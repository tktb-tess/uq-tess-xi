<script lang="ts">
  import { resolve } from '$app/paths';
  import Spinner from '$lib/components/Spinner.svelte';
  import XSection from '$lib/components/XSection.svelte';
  import { createErrHandler, safeFetchJsonAndValidate } from '$lib/modules/util';
  import { NamedError, toBase64 } from '@tktb-tess/util-fns';
  import { err, ok, ResultAsync } from 'neverthrow';
  import * as z from 'zod';

  const en = new TextEncoder();
  const title = '素因数分解クイズ';
  const seed = toBase64(en.encode(title));

  const primesSchema = z.object({
    p: z.string(),
    q: z.string(),
  });

  type Primes = z.infer<typeof primesSchema>;
  type PrimesPr = ResultAsync<
    readonly [bigint, bigint],
    | NamedError<'ParseError'>
    | NamedError<'FetchError'>
    | NamedError<'BigIntError'>
    | z.ZodError<Primes>
  > | null;

  let min = $state(2n);
  let max = $state(1024n);
  let guessp = $state(3n);
  let guessq = $state(19n);
  let primesPr: PrimesPr = $state(null);
  let judge: boolean | null = $state(null);

  const ch = async () => {
    judge = judge;
    if (!primesPr) {
      judge = null;
      return;
    }

    const gp_ = guessp;
    const gq_ = guessq;
    const pri = await primesPr;

    if (pri.isErr()) {
      console.error(pri.error);
      judge = null;
      return;
    }

    const [p, q] = pri.value;

    judge = (p === gp_ && q === gq_) || (p === gq_ && q === gp_);
  };

  /** 2^64 */
  const LIMIT = 1n << 64n;

  const fetchPrimes = async () => {
    const entrypoint = resolve('/api/v0/prime');
    const params = new URLSearchParams({ min: `${min}`, max: `${max}` });
    const url = entrypoint + `?${params}`;

    primesPr = safeFetchJsonAndValidate(url, primesSchema).andThen(({ p, q }) => {
      try {
        const p_ = BigInt(p);
        const q_ = BigInt(q);
        return ok([p_, q_] as const);
      } catch (e) {
        return err(createErrHandler('BigIntError', 'Failed to convert to bigint')(e));
      }
    });
    await ch();
  };
</script>

<XSection {title}>
  <p>
    「表示」を押す度に、下限以上、上限未満の2つの素数の積がランダムに表示されます。上限下限に指定できる整数の範囲は
    2 以上 2<sup>64</sup> (= 18,446,744,073,709,551,616) 以下です。
  </p>

  <div class="primeguessr-root">
    <div class="fields">
      <div class="fields-item">
        <label for="{seed}-input1">下限</label>
        <input
          type="text"
          id="{seed}-input1"
          class="inputs-1"
          bind:value={
            () => min.toString(),
            (v) => {
              try {
                const pre = BigInt(v);
                min = pre < 0n ? 0n : pre > LIMIT ? LIMIT : pre;
                ch();
              } catch (e) {
                console.error(e);
                min = 2n;
              }
            }
          }
        />
      </div>
      <div class="fields-item">
        <label for="{seed}-input2">上限</label>
        <input
          type="text"
          id="{seed}-input2"
          class="inputs-1"
          bind:value={
            () => max.toString(),
            (v) => {
              try {
                const pre = BigInt(v);
                max = pre < 0n ? 0n : pre > LIMIT ? LIMIT : pre;
                ch();
              } catch (e) {
                console.error(e);
                max = 1024n;
              }
            }
          }
        />
      </div>
    </div>

    <button onclick={fetchPrimes} type="button" class="show-btn">表示</button>

    {#if !primesPr}
      <p class="product">----</p>
    {:else}
      {#await primesPr}
        <div class="grid place-items-center-safe min-h-8">
          <Spinner />
        </div>
      {:then primes}
        {#if primes.isOk()}
          <p class="product">
            {primes.value[0] * primes.value[1]}
          </p>
        {:else}
          <p class="text-caution text-center mt-0">ERROR</p>
        {/if}
      {/await}
    {/if}

    <div class="fields">
      <div class="fields-item">
        <label for="{seed}-input3">素数1</label>
        <input
          type="text"
          id="{seed}-input3"
          disabled={judge == null}
          class="inputs-1"
          bind:value={
            () => guessp.toString(),
            (v) => {
              try {
                const pre = BigInt(v);
                guessp = pre < 0n ? 0n : pre > LIMIT ? LIMIT : pre;
                ch();
              } catch (e) {
                console.error(e);
                guessp = 3n;
              }
            }
          }
        />
      </div>
      <div class="fields-item">
        <label for="{seed}-input4">素数2</label>
        <input
          type="text"
          id="{seed}-input4"
          disabled={judge == null}
          class="inputs-1"
          bind:value={
            () => guessq.toString(),
            (v) => {
              try {
                const pre = BigInt(v);
                guessq = pre < 0n ? 0n : pre > LIMIT ? LIMIT : pre;
                ch();
              } catch (e) {
                console.error(e);
                guessq = 19n;
              }
            }
          }
        />
      </div>
    </div>
    {#if judge != null}
      <p class="judge {judge ? 'text-red-600' : 'text-blue-600'}">
        {judge ? '〇' : '×'}
      </p>
    {/if}
  </div>
</XSection>

<style lang="postcss">
  @reference '../../../../app.css';

  @layer components {
    .primeguessr-root {
      @apply flex flex-col gap-6 my-figure *:max-w-full;
    }

    .fields {
      @apply flex justify-center gap-8 *:min-w-0;
    }

    .fields-item > input {
      @apply w-40 max-w-full min-w-0;
    }

    .product,
    .judge {
      @apply px-2 py-1 mt-0 border border-border-darker rounded text-2xl font-mono self-center leading-none;
    }

    .show-btn {
      @apply btn-theme-1 self-center;
    }
  }
</style>
