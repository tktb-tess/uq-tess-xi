<script lang="ts">
  interface Props {
    data: (readonly [string, string, string])[];
  }
  const { data }: Props = $props();
</script>

<ol>
  {#each data as entry}
    <li>
      <p>{entry[0]}</p>
      <p>{entry[1]}</p>
      <p>説明: {entry[2]}</p>
    </li>
  {/each}
</ol>
