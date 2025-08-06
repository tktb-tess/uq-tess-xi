<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import Spinner from '$lib/sfc/spinner.svelte';
	import { addToast } from '$lib/sfc/toastStates.svelte';
	import TrashIcon from '$lib/sfc/trashIcon.svelte';

	const ogTitle = 'URL to Markdown';
	const ogDesc = 'サイトURLからMarkdown形式に変換する';

	type UUID = ReturnType<typeof crypto.randomUUID>;
	type URLInput = {
		id: UUID;
		url: string;
	};
	type MdResult = {
		url: string;
		md: string;
	};

	const exam = 'https://example.com';
	const urls = $state<URLInput[]>([
		{
			id: crypto.randomUUID(),
			url: exam
		}
	]);

	let resultsp = $state<Promise<MdResult[]>>(Promise.resolve([]));

	const fetchData = async (): Promise<MdResult[]> => {
		const urls1 = urls.map(({ url }) => url);
		const params = urls1.map((url) => (url ? `&value=${encodeURIComponent(url)}` : '')).join('');

		if (!params) return [];

		const resp = await fetch(`/api/v0/to-md?${params}`, { method: 'GET' });

		if (!resp.ok) {
			throw Error(`failed to fetch: ${resp.status} ${resp.statusText}`);
		}

		const mds: string[] = await resp.json();

		return mds.map((md, i) => ({ url: urls1[i], md }));
	};

	const handleDownload = async () => {
		const mds = await resultsp;
		if (mds.length === 0) return;
		const tasks = mds.map(async ({ md, url }) => {
			const blob = new Blob([md], { type: 'text/markdown' });
			const burl = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = burl;
			a.download = `${url.replaceAll(/[./:]+/g, '_')}.md`;
			a.click();
			URL.revokeObjectURL(burl);
		});

		await Promise.all(tasks);
	};
</script>

<svelte:head>
	<meta name="description" content={ogDesc} />
	<!-- OGP -->
	<meta property="og:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
	<meta property="og:description" content={ogDesc} />
	<!-- twitter card -->
	<meta name="twitter:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
	<meta name="twitter:description" content={ogDesc} />
	<title>{ogTitle} | {PUBLIC_SITE_NAME}</title>
</svelte:head>

<h2 class="text-center my-8">{ogTitle}</h2>
<div>
	<p>
		URLを入力し、「変換！」を押すと、該当ページのHTMLをMarkdownに変換したものが得られます。一度に複数個変換できます。
	</p>
	<p>
		Markdown部分をクリックするとコピーでき、また「Download all」より .md
		ファイルを一括ダウンロードできます。
	</p>
</div>
<div class="flex flex-col gap-4">
	<div class="flex flex-col gap-2">
		{#each urls as { id }, i (id)}
			<div class="flex justify-center gap-2 *:min-w-0">
				<label for="input-{id}">URL</label>
				<input type="url" id="input-{id}" bind:value={urls[i].url} />
				<button
					type="button"
					class="btn-1"
					onclick={() => {
						urls.splice(i, 1);
					}}
				>
					<TrashIcon class="size-4" />
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
			<h3 class="text-center">
				<Spinner class="size-6" />
				変換中……
			</h3>
		{:then mds}
			{#each mds as { md, url }, i}
				<div class="flex flex-col gap-2">
					<label class="block text-center font-serif text-xl" for="result-{i}">{url}</label>
					<textarea
						onclick={() => {
							navigator.clipboard
								.writeText(md)
								.then(() => addToast('Copied to Clipboard!', 'info', 5000))
								.catch(() => addToast('failed to copy', 'warning', 5000));
						}}
						id="result-{i}"
						class="h-50 cursor-pointer"
						readonly>{md}</textarea
					>
				</div>
			{/each}
			<button
				type="button"
				onclick={handleDownload}
				class="btn-1 self-center {mds.length === 0 ? 'invisible' : ''}"
			>
				Download all
			</button>
		{:catch e}
			<h3 class="text-red-500 text-center">{e}</h3>
		{/await}
	</div>
	<div class="h-50"></div>
</div>
