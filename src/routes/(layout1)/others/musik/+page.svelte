<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import PauseFill from '$lib/sfc/pause-fill.svelte';
	import PlayFill from '$lib/sfc/play-fill.svelte';
	import Repeat from '$lib/sfc/repeat.svelte';
	import StopFill from '$lib/sfc/stop-fill.svelte';
	import { trackData, type TrackParams } from './audioData';

	const ogTitle = '音楽',
		ogDesc = '作曲は楽しい';

	const tracks = $state<TrackParams[]>(
		trackData.map((data) => ({
			...data,
			currentTime: 0,
			loop: false,
			state: 'stopped'
		}))
	);

	const handlePlay = async (i: number) => {
		if (!tracks[i].ref) {
			console.log(tracks[i].id, ' empty');
			return;
		}

		switch (tracks[i].state) {
			case 'stopped': {
				for (let j = 0; j < tracks.length; j++) {
					if (tracks[j].state !== 'stopped') {
						tracks[j].ref?.pause();
						tracks[j].currentTime = 0;
						tracks[j].state = 'stopped';
					}
				}
				await tracks[i].ref.play();
				tracks[i].state = 'playing';
				return;
			}
			case 'playing': {
				tracks[i].ref.pause();
				tracks[i].state = 'paused';
				return;
			}
			case 'paused': {
				await tracks[i].ref.play();
				tracks[i].state = 'playing';
				return;
			}
		}
	};

	const handleStop = async (i: number) => {
		if (!tracks[i].ref) {
			console.log(tracks[i].id, ' empty');
			return;
		}

		if (tracks[i].state !== 'stopped') {
			tracks[i].ref.pause();
			tracks[i].currentTime = 0;
			tracks[i].state = 'stopped';
		}
	};

	const toTime = (time: number) => {
		if (!Number.isFinite(time)) return '-:--';
		const minutes = (time / 60) | 0;
		const seconds = ((time | 0) % 60).toString().padStart(2, '0');
		return `${minutes}:${seconds}`;
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

<div>
	<h2 class="my-8 text-center">音楽</h2>
	<p class="text-center">作曲は楽しいぞ</p>
</div>

{#each tracks as track, i (track.id)}
	<div
		class="bg-white rounded-lg border border-slate-300 drop-shadow flex flex-col gap-3 px-5 py-2 *:m-0"
	>
		<h3>{track.composer} - {track.title}</h3>
		<p class="ps-1">{track.description}</p>
		<div class="flex gap-2 items-center">
			<button
				type="button"
				class="text-mnlila bg-transparent any-hover:bg-mnlila any-hover:text-white transition-colors rounded px-2 py-1 text-lg"
				onclick={() => handlePlay(i)}
			>
				{#if track.state === 'playing'}
					<PauseFill class="fill-current inline-block size-6" />
				{:else}
					<PlayFill class="fill-current inline-block size-6" />
				{/if}
			</button>
			<button
				type="button"
				class="text-mnlila bg-transparent any-hover:bg-mnlila any-hover:text-white transition-colors rounded px-2 py-1 text-lg"
				onclick={() => handleStop(i)}
			>
				<StopFill class="fill-current inline-block size-6" />
			</button>
			<button
				type="button"
				class="
						{track.loop ? `text-white bg-mnlila` : `text-mnlila bg-transparent`}
						any-hover:bg-mnlila any-hover:text-white transition-colors rounded px-2 py-1 text-lg
					"
				onclick={() => (tracks[i].loop = !tracks[i].loop)}
			>
				<Repeat class="fill-current inline-block size-6" />
			</button>
			<p class="m-0">{toTime(track.currentTime)}/{toTime(tracks[i].duration ?? NaN)}</p>
		</div>

		<audio
			src="/audio/{track.id}.m4a"
			loop={track.loop}
			bind:this={tracks[i].ref}
			bind:currentTime={tracks[i].currentTime}
			onended={() => handleStop(i)}
			bind:duration={tracks[i].duration}
		></audio>
	</div>
{/each}

<div class="h-5"></div>