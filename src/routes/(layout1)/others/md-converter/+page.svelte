<script lang="ts">
	const ogTitle = 'URL to Markdown',
		ogDesc = 'サイトURLからMarkdown形式に変換します。';
	type UUID = ReturnType<typeof crypto.randomUUID>;
	type URLa = {
		id: UUID;
		url: string;
	};
	const exam = 'http://example.com/';
	const urls = $state<URLa[]>([
		{
			id: crypto.randomUUID(),
			url: exam
		}
	]);

	let resultsp = $state<Promise<string[]>>(Promise.resolve([]));

	const fetchData = async (): Promise<string[]> => {
		const params = urls.map(({ url }) => (url ? `&value=${url}` : '')).join('');

		if (!params) {
			return [];
		}
		const resp = await fetch(`/api/v0/to-md?${encodeURIComponent(params)}`);
		if (!resp.ok) {
			throw Error(`failed to fetch: ${resp.status} ${resp.statusText}`);
		}

		return resp.json();
	};

	const handleDownload = async () => {
		const mds = await resultsp;
		if (mds.length === 0) return;
		const tasks = mds.map(async (text, i) => {
			const blob = new Blob([text], { type: 'text/markdown' });
			const burl = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = burl;
			a.download = `markdown${i + 1}.md`;
			a.click();
			URL.revokeObjectURL(burl);
		});

		await Promise.all(tasks);
	};
</script>

<svelte:head>
	<meta name="description" content={ogDesc} />
	<!-- OGP -->
	<meta property="og:title" content="{ogTitle} - 悠久肆方体" />
	<meta property="og:description" content={ogDesc} />
	<!-- twitter card -->
	<meta name="twitter:title" content="{ogTitle} - 悠久肆方体" />
	<meta name="twitter:description" content={ogDesc} />
	<title>{ogTitle} - 悠久肆方体</title>
</svelte:head>

<h2 class="text-center my-8">{ogTitle}</h2>

<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-2">
		{#each urls as { id }, i (id)}
			<div class="flex justify-center gap-2">
				<label for="input-{id}">URL</label>
				<input type="url" id="input-{id}" bind:value={urls[i].url} />
				<button
					type="button"
					class="btn-1"
					onclick={() => {
						urls.splice(i, 1);
					}}
				>
					-
				</button>
			</div>
		{/each}
		<button
			type="button"
			class="btn-1 self-center"
			onclick={() => {
				urls.push({ id: crypto.randomUUID(), url: exam });
			}}
		>
			+
		</button>
	</div>
	<button
		type="button"
		class="btn-1 self-center"
		onclick={() => {
			resultsp = fetchData();
		}}
	>
		変換！
	</button>
	<div class="flex flex-col gap-2">
		{#await resultsp}
			<h3 class="text-center">変換中……</h3>
		{:then mds}
			{#each mds as md, i}
				<label for="result-{i}">Markdown</label>
				<textarea id="result-{i}" class="h-50" readonly>{md}</textarea>
			{/each}
			<button type="button" onclick={handleDownload} class="btn-1 self-center {mds.length === 0 ? 'invisible' : ''}">Download</button>
		{:catch e}
			<h3 class="text-red-500 text-center">{e}</h3>
		{/await}
	</div>
	<div class="h-50"></div>
</div>
