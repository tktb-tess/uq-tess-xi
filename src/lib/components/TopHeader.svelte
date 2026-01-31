<script>
  import UqTessLogo from './UQTessLogo.svelte';
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  import { innerWidth } from 'svelte/reactivity/window';

  const title = $derived.by(() => {
    if (innerWidth.current && innerWidth.current < 768) {
      return PUBLIC_SITE_NAME.split('').join('\x20');
    } else {
      return PUBLIC_SITE_NAME.split('').join('\u2003');
    }
  });
</script>

<header>
  <UqTessLogo class="" />
  <h1>{title}</h1>
</header>
