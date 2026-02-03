<script lang="ts">
  import { siteConfig } from '$lib/modules/site-config.svelte';
  import MoonIcon from './moon-icon.svelte';
  import SunIcon from './sun-icon.svelte';
  import DevicesIcon from './DevicesIcon.svelte';

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
