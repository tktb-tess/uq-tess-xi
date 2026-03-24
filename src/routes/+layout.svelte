<script lang="ts">
  import '../app.css';
  import Loads from './Loads.svelte';
  import OGP from './OGP.svelte';

  const { children, data } = $props();
</script>

<Loads />

<OGP path={data.path} />

{@render children()}
