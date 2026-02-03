<script>
  import UqTessLogo from './UQTessLogo.svelte';
  import { PUBLIC_SITE_NAME } from '$env/static/public';
</script>

<header>
  <div id="top-logo">
    <UqTessLogo class="size-full" />
  </div>
  <h1 id="top-title-text">{PUBLIC_SITE_NAME}</h1>
</header>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    header {
      @apply grid h-lvh place-items-center gbg-vivid text-white;
    }

    #top-logo {
      @apply animate-top-logo h-[55vh] w-auto max-w-[90lvw];
    }

    #top-title-text {
      @apply font-serif font-bold text-[calc(2.75rem+1.75vw)] w-[85lvw] max-w-170 -skew-x-20 -skew-y-3;
      text-align-last: justify;
    }
  }
</style>
