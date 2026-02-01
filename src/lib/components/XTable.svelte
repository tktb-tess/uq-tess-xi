<script lang="ts">
  interface Config {
    readonly cols?: number;
    readonly rows?: number;
    readonly class?: string;
  }

  type CellData = string | [string, Config];

  interface Props {
    readonly data: CellData[][];
    readonly headRows?: number;
    readonly class?: string;
  }

  const { data, headRows = 0, class: className }: Props = $props();

  const headData = $derived(data.slice(0, headRows));
  const bodyData = $derived(data.slice(headRows));
</script>

<div class="table-container">
  <table class={className}>
    {#if headRows > 0}
      <thead>
        {#each headData as row}
          <tr>
            {#each row as cell}
              {#if typeof cell === 'string'}
                <th>{cell}</th>
              {:else}
                {@const [text, conf] = cell}
                <th colspan={conf.cols} rowspan={conf.rows} class={conf.class}>{text}</th>
              {/if}
            {/each}
          </tr>
        {/each}
      </thead>
    {/if}
    <tbody>
      {#each bodyData as row}
        <tr>
          {#each row as cell}
            {#if typeof cell === 'string'}
              <td>{cell}</td>
            {:else}
              {@const [text, conf] = cell}
              <td colspan={conf.cols} rowspan={conf.rows} class={conf.class}>{text}</td>
            {/if}
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
