<script lang="ts">
  import FromBase64 from './fromBase64.svelte';
  import ToBase64 from './toBase64.svelte';
  import OddCalculator from './oddCalculator.svelte';
  import PrimGuessr from './primGuessr.svelte';
  const { data = $bindable() } = $props();
  const { seeds, exps, logs } = data;
</script>


<div class="flex flex-col gap-8">
  <ToBase64 seed={seeds[0]} />
  <FromBase64 seed={seeds[1]} />
  <OddCalculator {exps} {logs} seed={seeds[2]} />
  <PrimGuessr seed={seeds[2]} />
  <h5 class="text-center text-danger text-2xl my-8">工事中……</h5>
</div>
