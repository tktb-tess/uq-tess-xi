<script lang="ts">
  const { data: swadeshList } = $props();
  const [header, ...body] = $derived(swadeshList.value);
</script>

<p>まだ未完成。順次追加していきます。</p>

<div class="table-container">
  <table class="__swadesh-table">
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
</div>

<style lang="postcss">
  @reference '../../../../../app.css';
  @layer components {
    .table-container {
      @apply animate-swa;
    }

    .__swadesh-table :where(td) {
      &:where(:not(:first-child)) {
        @apply text-start;
      }

      &:where(:first-child) {
        @apply text-end f-tnum;
      }

      &:where(:nth-child(4)) {
        @apply font-ipa;
      }
    }
  }
</style>
