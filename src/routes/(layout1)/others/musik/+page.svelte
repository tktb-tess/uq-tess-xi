<script lang="ts">
  import DownloadIcon from '$lib/components/DownloadIcon.svelte';
  import ExtLink from '$lib/components/ExtLink.svelte';
  import PauseFill from '$lib/components/PauseIcon.svelte';
  import PlayFill from '$lib/components/PlayIcon.svelte';
  import Repeat from '$lib/components/RepeatIcon.svelte';
  import StopFill from '$lib/components/StopIcon.svelte';
  import type { TrackParams } from './+page.server';

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
    if (time == undefined || !Number.isFinite(time)) {
      return '-:--';
    }
    const minutes = (time / 60) | 0;
    const seconds = ((time | 0) % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
</script>

<p class="text-center">作曲は楽しいぞ</p>
<p>
  作った曲です。特別な追加の記載がない限り、これらの Tessyrrhaqt による曲は
  <ExtLink href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</ExtLink>
  <img
    src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
    alt="Creative Commons License Mark"
    class="inline-block max-w-4 max-h-4 ms-1 my-0"
  />
  <img
    src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
    alt="Creative Commons License BY Mark"
    class="inline-block max-w-4 max-h-4 ms-1 my-0"
  />
  ライセンスの下公開されます。
</p>

<div class="__card-root">
  {#each tracks as track, i (track.path)}
    <div class="__music-card">
      <h3 class="__title">{track.composer} - {track.title}</h3>
      <p class="__description">{track.description}</p>
      <div class="__btn-dur">
        <button type="button" title="再生/一時停止" onclick={() => handlePlay(i)}>
          {#if track.state === 'playing'}
            <PauseFill class="inline-block size-6" />
          {:else}
            <PlayFill class="inline-block size-6" />
          {/if}
        </button>
        <button type="button" title="停止" onclick={() => handleStop(i)}>
          <StopFill class="inline-block size-6" />
        </button>
        <button
          type="button"
          class={track.loop ? `ctext-textinv cbg-accent` : null}
          title="繰り返し"
          onclick={() => {
            track.loop = !track.loop;
          }}
        >
          <Repeat class="inline-block size-6" />
        </button>
        <a type="button" href="/audio/{track.path}" title="ダウンロード" download={track.path}>
          <DownloadIcon class="inline-block size-6" />
        </a>
        <p class="m-0 __duration">{toTime(track.currentTime)}/{toTime(track.duration)}</p>
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
</div>

<style lang="postcss">
  @reference '../../../../app.css';
  @layer components {
    .__card-root {
      @apply flex flex-col gap-(--s-figure) mt-(--s-figure);
    }

    .__music-card {
      @apply cbg-textinv rounded-lg border cborder-border drop-shadow
      flex flex-col gap-3 px-5 py-2 *:m-0;

      :where(.__description) {
        @apply ps-0;
      }
    }

    .__btn-dur {
      @apply flex gap-2 items-center;
      :where(button, a) {
        @apply ctext-accent bg-transparent any-hover:cbg-accent
        any-hover:ctext-textinv transition-colors rounded px-2 py-1;
      }

      :where(a) {
        @apply no-underline;
      }
    }
  }
</style>
