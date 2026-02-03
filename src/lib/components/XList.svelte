<script lang="ts">
  interface Config {
    readonly rawHTML?: boolean;
    readonly class?: string;
  }

  type ItemData = string | readonly [string, Config];

  interface Props {
    readonly data: ItemData[];
    readonly class?: string;
  }
  const { data, class: cName }: Props = $props();
</script>

<ul class={cName}>
  {#each data as item}
    {#if typeof item === 'string'}
      <li>{item}</li>
    {:else}
      {@const [text, conf] = item}
      <li class={conf.class}>
        {#if conf.rawHTML}
          {@html text}
        {:else}
          {text}
        {/if}
      </li>
    {/if}
  {/each}
</ul>
