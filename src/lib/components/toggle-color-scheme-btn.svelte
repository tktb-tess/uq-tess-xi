<script lang="ts">
  import { siteConfig, key } from '$lib/modules/site-config.svelte';
  import MoonIcon from './moon-icon.svelte';
  import SunIcon from './sun-icon.svelte';

  $effect(() => {
    localStorage.setItem(key, JSON.stringify(siteConfig));
  });
</script>

<div class="flex justify-end">
  <button
    type="button"
    class="btn-1 px-2 py-1"
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
      <MoonIcon class="size-4 inline-block fill-current" />
    {:else}
      <SunIcon class="size-4 inline-block fill-current" />
    {/if}
  </button>
</div>
