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

  const toKey = (cellData: CellData, index: number) => {
    if (typeof cellData === 'string') {
      return `${index}-${cellData}`;
    }
    const str = cellData[0];
    const { cols = 1, rows = 1, class: cName = '', rawHTML = false } = cellData[1];

    return `${index}-${str}-${cols}-${rows}-${cName}-${rawHTML}`;
  };

  const toKeys = (cellDatas: CellData[], index: number) => {
    return `${index}` + cellDatas.map((d, i) => toKey(d, i)).join('');
  };

  const { data, headRows = 0, headCols: h_ = 0, class: cName, caption }: Props = $props();

  const cols = $derived(data.map((d) => d.length).reduce((p, c) => Math.max(p, c), 0));
  const rows = $derived(data.length + (caption ? 1 : 0));
  const headData = $derived(data.slice(0, headRows));
  const bodyData = $derived(data.slice(headRows));
  const headCols = $derived.by(() => {
    if (typeof h_ === 'number') {
      return [...Array(rows)].map(() => h_);
    } else return h_;
  });
</script>

<table class={cName} style:--cols={cols} style:--rows={rows}>
  {#if caption}
    <caption>{caption}</caption>
  {/if}
  {#if headData.length > 0}
    <thead>
      {#each headData as row, i (toKeys(row, i))}
        <tr>
          {#each row as cell, j (toKey(cell, j))}
            {#if typeof cell === 'string'}
              <th>{cell}</th>
            {:else}
              {@const [text, conf] = cell}
              <th
                colspan={conf.cols}
                style:--colspan={conf.cols}
                rowspan={conf.rows}
                style:--rowspan={conf.rows}
                class={conf.class}
              >
                {#if conf.rawHTML}
                  <!-- eslint-disable -->
                  {@html text}
                  <!-- eslint-enable -->
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
    {#each bodyData as row, i (toKeys(row, i))}
      {@const cols = headCols.at(i) ?? 0}
      {@const ths = row.slice(0, cols)}
      {@const tds = row.slice(cols)}
      <tr>
        {#each ths as cell, j (toKey(cell, j))}
          {#if typeof cell === 'string'}
            <th>{cell}</th>
          {:else}
            {@const [text, conf] = cell}
            <th
              colspan={conf.cols}
              style:--colspan={conf.cols}
              rowspan={conf.rows}
              style:--rowspan={conf.rows}
              class={conf.class}
            >
              {#if conf.rawHTML}
                <!-- eslint-disable -->
                {@html text}
                <!-- eslint-enable -->
              {:else}
                {text}
              {/if}
            </th>
          {/if}
        {/each}
        {#each tds as cell, j (toKey(cell, j))}
          {#if typeof cell === 'string'}
            <td>{cell}</td>
          {:else}
            {@const [text, conf] = cell}
            <td
              colspan={conf.cols}
              style:--colspan={conf.cols}
              rowspan={conf.rows}
              style:--rowspan={conf.rows}
              class={conf.class}
            >
              {#if conf.rawHTML}
                <!-- eslint-disable -->
                {@html text}
                <!-- eslint-enable -->
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
