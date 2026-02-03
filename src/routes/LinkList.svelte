<script lang="ts">
  import ExtLink from '$lib/components/ExtLink.svelte';

  interface Props {
    /** `[href, text(, description)]` */
    readonly links: ReadonlyArray<readonly [string, string] | readonly [string, string, string]>;
  }
  const { links }: Props = $props();
</script>

<ul>
  {#each links as link}
    <li><ExtLink href={link[0]}>{link[1]}</ExtLink>{link[2]}</li>
  {/each}
</ul>
