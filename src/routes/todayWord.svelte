<script lang="ts">
	import ExtLink from '$lib/sfc/ext_link.svelte';
	import Spinner from '$lib/sfc/spinner.svelte';
	import type { WordData, PromiseState } from '$lib/types/decl';

	const fetchTodayWord = async (): Promise<WordData> => {
		const url = '/api/v0/today-word';
		const resp = await fetch(url);

		if (!resp.ok) {
			throw Error(`${resp.status} ${resp.statusText}`);
		}

		return resp.json();
	};
	let todayWordPromise = $state(fetchTodayWord());

	$effect(() => {
		todayWordPromise.catch((e) => {
			setTimeout(() => {
				todayWordPromise = fetchTodayWord();
			}, 2000);
		});
	});
</script>

<div
	class="
				w-full max-w-[720px] mx-auto flex flex-col items-center border border-slate-300 rounded-xl
				[:where(&_*)]:m-0 gap-y-6 py-6 bg-white bg-linear-to-b from-transparent to-black/3 shadow-sm mt-12
			"
>
	{#await todayWordPromise}
		<h3>
			<Spinner class="size-6" />
			読み込み中……
		</h3>
	{:then todayWord}
		<h3 class="font-serif font-normal {todayWord.size}">{todayWord.word}</h3>
		{#if todayWord.pron}
			<p class="text-black/60 font-ipa">
				{#if todayWord.pron.includes('/')}
					{todayWord.pron}
				{:else}
					{`/${todayWord.pron}/`}
				{/if}
			</p>
		{/if}
		<p>訳</p>
		<table
			class="
							grid grid-cols-[repeat(2,auto)] place-content-center place-items-center
							[&_:where(thead,tbody,tr)]:contents [&_:where(th,td)]:block gap-5
						"
		>
			<thead>
				<tr>
					<th class="font-normal bg-transparent text-black">品詞</th>
					<th class="font-normal bg-transparent text-black">意味</th>
				</tr>
			</thead>
			<tbody>
				{#each todayWord.translations as translation}
					<tr>
						<td
							class="justify-self-end bg-mnlila text-white rounded-[500px] px-3 text-base/[1.75] border-none"
						>
							{translation.titles.join(', ')}
						</td>
						<td class="justify-self-start border-none bg-transparent"
							>{translation.names.join(', ')}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
		<p class="self-end me-3"><ExtLink href={todayWord.dic_url}>ZpDIC Online</ExtLink></p>
	{:catch e}
		<h3 class="text-[red]">データを取得できませんでした</h3>
		<p class="text-[red]">{e}</p>
	{/await}
</div>
