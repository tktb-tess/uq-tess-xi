<script>
  import UqTessLogo from './UQTessLogo.svelte';
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  import { innerWidth } from 'svelte/reactivity/window';

  const title = $derived.by(() => {
    if (innerWidth.current && innerWidth.current < 768) {
      return PUBLIC_SITE_NAME.split('').join('\x20');
    } else {
      return PUBLIC_SITE_NAME.split('').join('\u2003');
    }
  });
</script>

<header>
  <div id="top-logo">
    <UqTessLogo class="h-full" />
  </div>
  <h1 id="top-title-text">{title}</h1>
</header>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    header {
      @apply grid h-lvh content-center place-items-center gbg-top-caption text-white;
    }

    #top-logo {
      @apply animate-top-logo h-[55vh] max-h-140;
    }

    #top-title-text {
      @apply font-serif font-bold -skew-x-24 -skew-y-4 text-[calc(2.75rem+1.75vw)];
    }
  }
</style>
