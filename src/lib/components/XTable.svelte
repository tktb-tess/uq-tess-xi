<script lang="ts">
  interface Config {
    readonly cols?: number;
    readonly rows?: number;
    readonly class?: string;
    readonly rawHTML?: boolean;
  }

  type CellData = string | [string, Config];

  interface Props {
    readonly data: CellData[][];
    readonly caption?: string;
    readonly headRows?: number;
    readonly headCols?: number | number[];
    readonly class?: string;
  }

  const { data, headRows = 0, headCols: h_ = [], class: cName, caption }: Props = $props();

  const headData = $derived(data.slice(0, headRows));
  const bodyData = $derived(data.slice(headRows));
  const headCols = $derived.by(() => {
    if (typeof h_ === 'number') {
      return [...Array(data.length)].map(() => h_);
    } else return h_;
  });
  const cols = $derived(data.map((d) => d.length).reduce((p, c) => Math.max(p, c), 0));
  const rows = $derived(data.length);
</script>

<table
  class={cName}
  style:--cols={cols}
  style:--rows={rows}
  style:--head-rows={headRows}
  style:--caption={typeof caption === 'string' ? 1 : 0}
>
  {#if typeof caption === 'string'}
    <caption>{caption}</caption>
  {/if}
  {#if headData.length > 0}
    <thead>
      {#each headData as row}
        <tr>
          {#each row as cell}
            {#if typeof cell === 'string'}
              <th>{cell}</th>
            {:else}
              {@const [text, conf] = cell}
              <th
                colspan={conf.cols}
                style:--col-span={conf.cols}
                rowspan={conf.rows}
                style:--row-span={conf.rows}
                class={conf.class}
              >
                {#if conf.rawHTML}
                  {@html text}
                {:else}
                  {text}
                {/if}
              </th>
            {/if}
          {/each}
        </tr>
      {/each}
    </thead>
  {/if}
  <tbody>
    {#each bodyData as row, i}
      {@const cols = headCols.at(i) ?? 0}
      {@const ths = row.slice(0, cols)}
      {@const tds = row.slice(cols)}
      <tr>
        {#each ths as cell}
          {#if typeof cell === 'string'}
            <th>{cell}</th>
          {:else}
            {@const [text, conf] = cell}
            <th
              colspan={conf.cols}
              style:--col-span={conf.cols}
              rowspan={conf.rows}
              style:--row-span={conf.rows}
              class={conf.class}
            >
              {#if conf.rawHTML}
                {@html text}
              {:else}
                {text}
              {/if}
            </th>
          {/if}
        {/each}
        {#each tds as cell}
          {#if typeof cell === 'string'}
            <td>{cell}</td>
          {:else}
            {@const [text, conf] = cell}
            <td
              colspan={conf.cols}
              style:--col-span={conf.cols}
              rowspan={conf.rows}
              style:--row-span={conf.rows}
              class={conf.class}
            >
              {#if conf.rawHTML}
                {@html text}
              {:else}
                {text}
              {/if}
            </td>
          {/if}
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
