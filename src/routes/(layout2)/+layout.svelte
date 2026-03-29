<script lang="ts">
  const { children } = $props();
</script>

<div>
  {@render children()}
</div>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    div {
      @apply min-block-lvh bg-black inline-full;
    }
  }
</style>
