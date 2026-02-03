<script lang="ts">
  import { mdToHtml } from '$lib/modules/md-html';
  const { mdText = '' } = $props();
  const phtml = $derived(mdToHtml(mdText));

  $effect(() => {
    phtml.catch((e) => console.log(e));
  });
</script>

{#await phtml then htmlText}
  {@html htmlText}
{:catch}
  <p class="text-danger">Error: Failed to convert markdown</p>
{/await}
