<script lang="ts">
  import { onMount } from 'svelte';
  import type * as z from 'zod';
  import { NamedError } from '@tktb-tess/util-fns';
  import { resolve } from '$app/paths';
  import { safeFetchJsonAndValidate } from '$lib/modules/util';
  import ExtLink from '$lib/components/ExtLink.svelte';
  import Spinner from '$lib/components/Spinner.svelte';
  import { wordDataSchema, type WordData } from '$lib/types/decl';
  import { okAsync, type ResultAsync } from 'neverthrow';

  const fetchTodayWord = () =>
    safeFetchJsonAndValidate(resolve('/api/v0/today-word'), wordDataSchema);
  type TWord = ResultAsync<
    WordData | null,
    NamedError<'FetchError'> | NamedError<'ParseError'> | z.ZodError<WordData>
  >;
  let resultAsy: TWord = $state(okAsync(null));

  onMount(async () => {
    resultAsy = fetchTodayWord();
  });

  $effect(() => {
    resultAsy.orTee((e) => {
      console.error(e);
    });
  });
</script>

<div class="today-word-root">
  {#await resultAsy}
    <div class="flex gap-2 items-center">
      <Spinner class="size-6" />
      <h3>読み込み中……</h3>
    </div>
  {:then result}
    {#if result.isOk()}
      {@const { value } = result}
      {#if value}
        <h3 class="__entry {value.isLarge ? 'text-5xl' : 'text-4xl'}">{value.word}</h3>
        {#if value.pron}
          <p class="__pronunciation">
            {#if value.pron.includes('/')}
              {value.pron}
            {:else}
              {`/${value.pron}/`}
            {/if}
          </p>
        {/if}
        <h3 class="__yaku-title">訳</h3>
        <table class="__yaku-table">
          <thead>
            <tr>
              <th>品詞</th>
              <th>意味</th>
            </tr>
          </thead>
          <tbody>
            {#each value.translations as translation (translation.titles
              .concat(translation.names)
              .join('-'))}
              <tr>
                <td>
                  {translation.titles.join(', ')}
                </td>
                <td>{translation.names.join(', ')}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <p class="__to-zpdic"><ExtLink href={value.dicUrl}>ZpDIC Online</ExtLink></p>
      {/if}
    {:else}
      <div class="text-center *:text-caution">
        <h3>読み込みに失敗しました</h3>
        <p>再読み込みしてください</p>
      </div>
      <button
        class="btn-1"
        type="button"
        onclick={() => {
          resultAsy = fetchTodayWord();
        }}
      >
        再読み込み
      </button>
    {/if}
  {/await}
</div>

<style lang="postcss">
  @reference '../app.css';
  @layer components {
    .today-word-root {
      @apply w-full max-w-180 mx-auto flex flex-col items-center border my-figure
      border-border rounded-xl gap-y-6 px-4 py-6 shadow-sm gbg-today-word;

      * {
        @apply m-0;
      }
    }

    .__pronunciation {
      @apply font-ipa l:text-black/50 d:text-white/50;
    }

    .__yaku-title {
      @apply font-sans text-base;
    }

    .__yaku-table {
      @apply grid gap-2 place-items-center border-none;
      grid-template-columns: repeat(2, auto);

      :where(thead, tbody, tr) {
        @apply contents;
      }

      :where(th, td) {
        @apply block border-none px-2 py-0;
      }

      :where(tbody td):first-child {
        @apply bg-accent text-textinv rounded-full px-3;
      }
    }

    .__to-zpdic {
      @apply self-end-safe;
    }
  }
</style>
