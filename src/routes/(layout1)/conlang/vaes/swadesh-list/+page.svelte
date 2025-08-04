<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';

	const ogTitle = 'Vässenzländisķ Swadesh List',
		ogDesc = 'すわでしゅ！';

	const { data: swadeshList } = $props();
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

<h2 class="my-8 text-center">Swadesh List</h2>

<p>まだ未完成。順次追加していきます。</p>

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
	<div class="text-center *:text-[red]">
		<h3>読み込みに失敗しました</h3>
		<p>再読み込みしてください</p>
	</div>
{/if}

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
