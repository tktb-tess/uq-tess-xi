<script lang="ts">
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  import DownloadIcon from '$lib/components/download-icon.svelte';
  import ExtLink from '$lib/components/ext_link.svelte';
  import PauseFill from '$lib/components/pause-fill.svelte';
  import PlayFill from '$lib/components/play-fill.svelte';
  import Repeat from '$lib/components/repeat.svelte';
  import StopFill from '$lib/components/stop-fill.svelte';
  import type { TrackParams } from './+page.server';

  const ogTitle = '音楽';
  const ogDesc = '作曲は楽しい';
  const { data = $bindable() } = $props();

  const tracks = $state<TrackParams[]>(
    data.trackData.map((data) => ({
      ...data,
      currentTime: 0,
      loop: false,
      state: 'stopped',
    })),
  );

  const handlePlay = async (i: number) => {
    if (!tracks[i].ref) {
      console.log(tracks[i].path, 'empty');
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
      console.log(tracks[i].path, 'empty');
      return;
    }

    if (tracks[i].state !== 'stopped') {
      tracks[i].ref.pause();
      tracks[i].currentTime = 0;
      tracks[i].state = 'stopped';
    }
  };

  const toTime = (time?: number) => {
    if (time === undefined || !Number.isFinite(time)) {
      return '-:--';
    }
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
  <p>
    作った曲です。特別な追加の記載がない限り、これらの Tessyrrhaqt による曲は
    <ExtLink href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</ExtLink>
    <img
      src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
      alt="Creative Commons License Mark"
      class="inline-block max-w-4 max-h-4 ms-1"
    />
    <img
      src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
      alt="Creative Commons License BY Mark"
      class="inline-block max-w-4 max-h-4 ms-1"
    />
    ライセンスの下公開されます。
  </p>
</div>

{#each tracks as track, i (track.path)}
  <div
    class="bgc-textinv rounded-lg border border-slate-300 drop-shadow flex flex-col gap-3 px-5 py-2 *:m-0"
  >
    <h3>{track.composer} - {track.title}</h3>
    <p class="ps-1">{track.description}</p>
    <div class="flex gap-2 items-center">
      <button
        type="button"
        class="textc-highlight bg-transparent any-hover:bgc-highlight any-hover:textc-textinv transition-colors rounded px-2 py-1 text-lg"
        aria-label="play/pause button"
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
        class="textc-highlight bg-transparent any-hover:bgc-highlight any-hover:textc-textinv transition-colors rounded px-2 py-1 text-lg"
        aria-label="stop button"
        onclick={() => handleStop(i)}
      >
        <StopFill class="fill-current inline-block size-6" />
      </button>
      <button
        type="button"
        class="
						{track.loop ? `textc-textinv bgc-highlight` : `textc-highlight bg-transparent`}
						any-hover:bgc-highlight any-hover:textc-textinv transition-colors rounded px-2 py-1 text-lg
					"
        aria-label="loop button"
        onclick={() => {
          track.loop = !track.loop;
        }}
      >
        <Repeat class="fill-current inline-block size-6" />
      </button>
      <a
        type="button"
        class="no-underline textc-highlight bg-transparent any-hover:bgc-highlight any-hover:textc-textinv transition-colors rounded px-2 py-1 text-lg"
        href="/audio/{track.path}"
        aria-label="download button"
        download={track.path}
      >
        <DownloadIcon class="fill-current inline-block size-6" />
      </a>
      <p class="m-0">{toTime(track.currentTime)}/{toTime(track.duration)}</p>
    </div>

    <audio
      src="/audio/{track.path}"
      loop={track.loop}
      bind:this={track.ref}
      bind:currentTime={track.currentTime}
      onended={() => handleStop(i)}
      bind:duration={track.duration}
    ></audio>
  </div>
{/each}
