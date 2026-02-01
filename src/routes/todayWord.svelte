<script lang="ts">
  import { NamedError, safeFetchJson } from '$lib/modules/util';
  import ExtLink from '$lib/components/ext_link.svelte';
  import Spinner from '$lib/components/spinner.svelte';
  import type { WordData } from '$lib/types/decl';
  import { okAsync, type ResultAsync } from 'neverthrow';
  import { onMount } from 'svelte';

  const fetchTodayWord = () => safeFetchJson('/api/v0/today-word').map((r) => r as WordData);
  type TWord = ResultAsync<WordData | null, NamedError<'FetchError'> | NamedError<'ParseError'>>;
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

<div id="today-word-root">
  {#await resultAsy}
    <div class="flex gap-2 items-center">
      <Spinner class="size-6" />
      <h3>読み込み中……</h3>
    </div>
  {:then result}
    {#if result.isOk()}
      {@const { value } = result}
      {#if value}
        <h3 class="__entry {value.size}">{value.word}</h3>
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
            {#each value.translations as translation}
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
      <div class="text-center *:ctext-caution">
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
    #today-word-root {
      @apply w-full max-w-180 mx-auto flex flex-col items-center border 
      cborder-border rounded-xl gap-y-6 px-4 py-6 shadow-sm gbg-today-word;

      :where(*) {
        @apply m-0;
      }

      .__pronunciation {
        @apply font-ipa opacity-50;
      }

      .__yaku-title {
        @apply font-sans text-base;
      }

      :where(.__yaku-table) {
        @apply grid grid-cols-[minmax(max-content,1fr)minmax(0,max-content)] gap-2 place-items-center;

        :where(thead, tbody, tr) {
          @apply contents;
        }

        :where(th, td) {
          @apply block;
        }

        :where(& > tbody > tr > td:first-child) {
          @apply cbg-accent ctext-textinv rounded-full;
        }
      }

      :where(.__to-zpdic) {
        @apply self-end-safe;
      }
    }
  }
</style>
