<script lang="ts">
  import { NamedError, safeFetchJson } from '$lib/modules/util';
  import ExtLink from '$lib/sfc/ext_link.svelte';
  import Spinner from '$lib/sfc/spinner.svelte';
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

<div
  class="
				w-full max-w-[720px] mx-auto flex flex-col items-center border border-slate-500 d:border-slate-300 rounded-xl
				[:where(&_*)]:m-0 gap-y-6 py-6 bg-linear-to-b from-white d:from-zinc-900 to-neutral-50 d:to-black shadow-sm d:shadow-white mt-12
			"
>
  {#await resultAsy}
    <div class="flex gap-2 items-center">
      <Spinner class="size-6" />
      <h3>読み込み中……</h3>
    </div>
  {:then result}
    {#if result.isOk()}
      {@const { value } = result}
      {#if value}
        <h3 class="font-serif font-normal text-mnlila d:text-white {value.size}">{value.word}</h3>
        {#if value.pron}
          <p class="text-black/60 d:text-white/60 font-ipa">
            {#if value.pron.includes('/')}
              {value.pron}
            {:else}
              {`/${value.pron}/`}
            {/if}
          </p>
        {/if}
        <p class="d:text-white">訳</p>
        <table
          class="
					grid grid-cols-[repeat(2,auto)] place-content-center place-items-center
					[&_:where(thead,tbody,tr)]:contents [&_:where(th,td)]:block gap-5
				"
        >
          <thead>
            <tr>
              <th class="font-normal bg-transparent d:text-white border-none">品詞</th>
              <th class="font-normal bg-transparent d:text-white border-none">意味</th>
            </tr>
          </thead>
          <tbody>
            {#each value.translations as translation}
              <tr>
                <td
                  class="justify-self-end bg-mnlila text-white d:bg-white d:text-black rounded-[500px] px-3 text-base/[1.75] border-none"
                >
                  {translation.titles.join(', ')}
                </td>
                <td class="justify-self-start border-none bg-transparent d:text-white"
                  >{translation.names.join(', ')}</td
                >
              </tr>
            {/each}
          </tbody>
        </table>
        <p class="self-end me-3"><ExtLink href={value.dicUrl}>ZpDIC Online</ExtLink></p>
      {/if}
    {:else}
      <div class="text-center *:text-danger">
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
