<script lang="ts">
	import { trackData, type TrackParams } from './audioData';

	const ogTitle = '音楽',
		ogDesc = '作曲は楽しい';

	let current = $state<string | null>(null);
	const tracks = $state<TrackParams[]>(
		trackData.map((data) => ({
			...data,
			currentTime: 0,
			loop: false,
			ref: undefined,
		}))
	);

	const handlePlay = async (i: number) => {};

	const handleStop = async (i: number) => {};
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

<h2 class="my-8 text-center">音楽</h2>

{#each tracks as track, i (track.id)}
	<div class="bg-white rounded border border-slate-300 drop-shadow-md flex flex-col px-3 py-1">
		<h3>{track.composer} - {track.title}</h3>
		<p>{track.description}</p>
		<div class="flex gap-2">
			<button
				type="button"
				class="text-mnlila bg-transparent any-hover:bg-mnlila any-hover:text-white transition-colors rounded px-2 text-lg"
				onclick={() => handlePlay(i)}
			>
				aa
			</button>
			<button
				type="button"
				class="text-mnlila bg-transparent any-hover:bg-mnlila any-hover:text-white transition-colors rounded px-2 text-lg"
				onclick={() => handleStop(i)}
			>
				停止
			</button>
			<button
				type="button"
				class="
						{track.loop ? `text-white bg-mnlila` : `text-mnlila bg-transparent`}
						any-hover:bg-mnlila any-hover:text-white transition-colors rounded px-2 text-lg
					"
				onclick={() => (tracks[i].loop = !tracks[i].loop)}
			>
				ループ
			</button>
		</div>
		<audio
			src="/audio/{track.id}.m4a"
			loop={track.loop}
			bind:this={tracks[i].ref}
			onended={() => handleStop(i)}
		></audio>
	</div>
{/each}
