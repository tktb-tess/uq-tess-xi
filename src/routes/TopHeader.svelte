<svelte:options runes={true} />

<script lang="ts">
  import UqTessLogo from '$lib/components/UQTessLogo.svelte';
  import { PUBLIC_SITE_NAME } from '$env/static/public';
</script>

<header>
  <div class="top-logo">
    <UqTessLogo />
  </div>
  <h1 class="top-title-text">{PUBLIC_SITE_NAME}</h1>
</header>

<style lang="postcss">
  @reference '../app.css';
  @layer components {
    header {
      @apply grid block-svh place-items-center content-center text-white overflow-clip
      bg-linear-135 from-main-title-s to-main-title-e;
    }

    .top-logo {
      @apply animate-top-logo block-[55svh] inline-auto max-inline-[90lvw];
    }

    .top-title-text {
      @apply font-title font-normal text-justify text-[calc(3rem+2vw)] inline-[80lvw] max-inline-180 -skew-x-15 -skew-y-2;
      text-align-last: justify;
    }
  }
</style>
