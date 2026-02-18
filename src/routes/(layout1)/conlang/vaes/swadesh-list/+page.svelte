<script lang="ts">
  const { data } = $props();
  const [header, ...body] = $derived(data.value);
  const cols = $derived(data.value.map((d) => d.length).reduce((p, c) => Math.max(p, c), 0));
</script>

<p>まだ未完成。順次追加していきます。</p>

<table
  class="__swadesh-table"
  style:--cols={cols}
  style:--rows={data.value.length}
  style:--head-rows={1}
>
  <thead>
    <tr>
      {#each header as str}
        <th>{str}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each body as row}
      <tr>
        {#each row as str}
          <td>{str}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style lang="postcss">
  @reference '../../../../../app.css';
  @layer components {
    .__swadesh-table {
      @apply animate-swa;
    }

    .__swadesh-table :where(td) {
      &:where(:not(:first-child)) {
        @apply text-start;
      }

      &:where(:first-child) {
        @apply text-end font-feat-tnum;
      }

      &:where(:nth-child(4)) {
        @apply font-ipa;
      }
    }
  }
</style>
