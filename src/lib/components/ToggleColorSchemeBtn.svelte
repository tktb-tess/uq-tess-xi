<script lang="ts">
  import MoonIcon from '../icons/MoonIcon.svelte';
  import SunIcon from '../icons/SunIcon.svelte';
  import DevicesIcon from '../icons/DevicesIcon.svelte';
  import type { MouseEventHandler } from 'svelte/elements';

  interface Props {
    class?: string;
  }

  const { class: cName }: Props = $props();

  type ColorScheme = 'light dark' | 'light' | 'dark' | null;
  let colorScheme: ColorScheme = $state(null);
  const key = 'color-scheme';

  const onclick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault();
    if (!colorScheme) return;

    switch (colorScheme) {
      case 'light dark': {
        colorScheme = 'light';
        return;
      }
      case 'light': {
        colorScheme = 'dark';
        return;
      }
      case 'dark': {
        colorScheme = 'light dark';
        return;
      }
    }
  };

  $effect(() => {
    if (!colorScheme) {
      const cs = localStorage.getItem(key);
      if (!cs) {
        console.log('`color-scheme` not found');
        colorScheme = 'light dark';
        return;
      }

      if (cs !== 'light dark' && cs !== 'light' && cs !== 'dark') {
        console.warn('`color-scheme` is invalid');
        colorScheme = 'light dark';
        return;
      }

      colorScheme = cs;
    } else {
      const root = document.documentElement;
      root.setAttribute('data-color-scheme', colorScheme);
      localStorage.setItem(key, colorScheme);
    }
  });
</script>

<svelte:head>
  <script>
    (() => {
      const cs = localStorage.getItem('color-scheme');
      if (!cs) {
        console.log('`color-scheme` not found');
        return;
      }

      if (cs !== 'light dark' && cs !== 'light' && cs !== 'dark') {
        console.warn('`color-scheme` is invalid');
        return;
      }

      try {
        const root = document.documentElement;
        root.setAttribute('data-color-scheme', colorScheme);
      } catch (e) {
        console.warn(e);
      }
    })();
  </script>
</svelte:head>

{#if colorScheme}
  <button aria-label="Toggle Color Scheme" class="toggle {cName}" {onclick}>
    {#if colorScheme === 'light'}
      <SunIcon />
    {:else if colorScheme === 'dark'}
      <MoonIcon />
    {:else}
      <DevicesIcon />
    {/if}
  </button>
{/if}

<style lang="postcss">
  @reference '../../app.css';

  @layer components {
    .toggle {
      @apply grid items-center-safe leading-none;
    }
  }
</style>
