<script lang="ts">
  import { mdToHtml } from '$lib/modules/md-html';
  const { markdown = '' } = $props();
  const phtml = $derived(mdToHtml(markdown));
</script>

{#await phtml then html}
  {@html html}
{:catch e}
  <p class="text-danger">{e}</p>
{/await}
