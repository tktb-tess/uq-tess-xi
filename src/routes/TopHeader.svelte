<script lang="ts">
  import UqTessLogo from '$lib/components/UQTessLogo.svelte';
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  const {} = $props();
</script>

<header>
  <div id="top-logo">
    <UqTessLogo class="size-full" />
  </div>
  <h1 id="top-title-text">{PUBLIC_SITE_NAME}</h1>
</header>

<style lang="postcss">
  @reference '../app.css';
  @layer components {
    header {
      @apply grid h-svh place-items-center content-center gbg-vivid text-white overflow-clip;
    }

    #top-logo {
      @apply animate-top-logo h-[55svh] w-auto max-w-[90lvw];
    }

    #top-title-text {
      @apply font-title font-normal text-justify text-[calc(3rem+2vw)] w-[80lvw] max-w-180 -skew-x-15 -skew-y-2;
      text-align-last: justify;
    }
  }
</style>
