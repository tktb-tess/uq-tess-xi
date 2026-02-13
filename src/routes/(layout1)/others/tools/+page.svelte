<script lang="ts">
  import FromBase64 from './fromBase64.svelte';
  import ToBase64 from './toBase64.svelte';
  import OddCalculator from './oddCalculator.svelte';
  import PrimGuessr from './primGuessr.svelte';
  import UnderConstruction from '$lib/components/UnderConstruction.svelte';
  const { data } = $props();
</script>

<div class="flex flex-col gap-8">
  <ToBase64 />
  <FromBase64 />
  <OddCalculator exps={data.exps} logs={data.logs} />
  <PrimGuessr />
  <UnderConstruction />
</div>
