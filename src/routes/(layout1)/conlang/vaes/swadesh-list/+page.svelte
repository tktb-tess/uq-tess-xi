<script lang="ts">
	import Spinner from '$lib/sfc/spinner.svelte';
	import type { SwadeshList, Success } from '$lib/types/decl';

	const ogTitle = 'Vässenzländisķ Swadesh List',
		ogDesc = 'すわでしゅ！';

	const getSwadesh = async (): Promise<Success<SwadeshList>> => {
		const url = '/api/v0/swadesh-list';
		const resp = await fetch(url, { method: 'GET' });

		if (!resp.ok) {
			return {
				success: false,
				status: resp.status,
				message: resp.statusText
			};
		}

		const body = (await resp.json()) as SwadeshList;
		return {
			success: true,
			...body
		};
	};

	const swadesh = $state(getSwadesh());
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

<h2 class="my-8 text-center">Swadesh List</h2>

<p>まだ未完成。順次追加していきます。</p>

{#await swadesh}
	<h3 class="text-center">
		<Spinner class="size-6" />
		読み込み中……
	</h3>
{:then swadeshList}
	{#if swadeshList.success}
		{@const [header, ...body] = swadeshList.value}
		<div class="table-container slidein">
			<table class="grid-cols-auto-4 [&_td]:text-start [&_td:first-child]:text-end">
				<thead>
					<tr>
						{#each header as str}
							<th>{str}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each body as row}
						<tr>
							{#each row as str}
								<td>{str}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else}
		<h3>読み込みに失敗しました</h3>
		<p>{swadeshList.status}: {swadeshList.message}</p>
	{/if}
{:catch e}
	<h3>読み込みに失敗しました</h3>
	<p>{e}</p>
{/await}

<style>
	@keyframes slidein {
		from {
			opacity: 0;
			top: 15px;
		}
		to {
			opacity: 1;
			top: 0;
		}
	}

	.slidein {
		animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
		animation-duration: 400ms;
		animation-name: slidein;
		position: relative;
	}


</style>
