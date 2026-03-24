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
  aria-label="Toggle Color Scheme"
  class="toggle {cName}"
  onclick={(ev) => {
    ev.preventDefault();
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
    <SunIcon />
  {:else if siteConfig.colorScheme === 'dark'}
    <MoonIcon />
  {:else}
    <DevicesIcon />
  {/if}
</button>

<style lang="postcss">
  @reference '../../app.css';

  @layer components {
    .toggle {
      @apply grid items-center-safe leading-none;
    }
  }
</style>
