<script lang="ts">
  import { siteConfig } from '$lib/modules/site-config.svelte';
  import MoonIcon from '../icons/MoonIcon.svelte';
  import SunIcon from '../icons/SunIcon.svelte';
  import DevicesIcon from '../icons/DevicesIcon.svelte';

  interface Props {
    class?: string;
  }

  const { class: cName }: Props = $props();
</script>

<button
  id="toggle-color-scheme-btn"
  title="Toggle Color Scheme"
  type="button"
  class={cName}
  onclick={() => {
    switch (siteConfig.colorScheme) {
      case 'light dark': {
        siteConfig.colorScheme = 'light';
        break;
      }
      case 'light': {
        siteConfig.colorScheme = 'dark';
        break;
      }
      case 'dark': {
        siteConfig.colorScheme = 'light dark';
        break;
      }
    }
  }}
>
  {#if siteConfig.colorScheme === 'light'}
    <SunIcon class="size-4 inline-block" />
  {:else if siteConfig.colorScheme === 'dark'}
    <MoonIcon class="size-4 inline-block" />
  {:else}
    <DevicesIcon class="size-4 inline-block" />
  {/if}
</button>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    #toggle-color-scheme-btn {
      @apply grid place-content-center;
    }
  }
</style>
