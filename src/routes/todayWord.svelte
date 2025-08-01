<script lang="ts">
	import ExtLink from '$lib/sfc/ext_link.svelte';
	import type { Success, WordData } from '$lib/types/decl';
	type Props = {
		todayWord: Success<WordData>;
	};

	const { todayWord }: Props = $props();

	$effect(() => {
		if (!todayWord.success) {
			console.error(todayWord.message);
		}
	});
</script>

<div
	class="
				w-full max-w-[720px] mx-auto flex flex-col items-center border border-slate-300 rounded-xl
				[:where(&_*)]:m-0 gap-y-6 py-6 bg-white bg-linear-to-b from-transparent to-black/3 shadow-sm mt-12
			"
>
	{#if todayWord.success}
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
		<p class="self-end me-3"><ExtLink href={todayWord.dicUrl}>ZpDIC Online</ExtLink></p>
	{:else}
		<div class="text-center *:text-[red]">
			<h3>読み込みに失敗しました</h3>
			<p>再読み込みしてください</p>
		</div>
	{/if}
</div>
