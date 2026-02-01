<script lang="ts">
  import { siteConfig, key } from '$lib/modules/site-config.svelte';
  import MoonIcon from './moon-icon.svelte';
  import SunIcon from './sun-icon.svelte';
  import DevicesIcon from './DevicesIcon.svelte';

  $effect(() => {
    localStorage.setItem(key, JSON.stringify(siteConfig));
  });
</script>

<button
  id="toggle-color-scheme-btn"
  type="button"
  onclick={() => {
    switch (siteConfig.colorScheme) {
      case 'default': {
        siteConfig.colorScheme = 'light';
        break;
      }
      case 'light': {
        siteConfig.colorScheme = 'dark';
        break;
      }
      case 'dark': {
        siteConfig.colorScheme = 'default';
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
      @apply btn-1 px-2 py-1;
    }
  }
</style>
