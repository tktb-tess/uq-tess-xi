<script lang="ts">
  import { onMount } from 'svelte';

  const initialize = () => {
    const i = crypto.getRandomValues(new BigUint64Array(200));
    return Array.from(i, (n) => n.toString(2).padStart(64, '0')).join('');
  };

  let str = $state(initialize());
  const bits = 16;
  let continu = true;

  const updateStr = () => {
    const s = (() => {
      const num = crypto.getRandomValues(new Uint16Array(1))[0];
      if (num == null) {
        throw TypeError('Failed to generate numbers');
      }
      return num.toString(2).padStart(bits, '0');
    })();

    str += s;
    str = str.slice(bits);

    if (continu) {
      requestAnimationFrame(updateStr);
    }
  };

  onMount(() => {
    updateStr();

    return () => {
      continu = false;
    }
  });
</script>

<pre class="__like-program">{str}</pre>

<style lang="postcss">
  @reference '../../../app.css';
  @layer components {
    .__like-program {
      @apply m-0 break-all whitespace-pre-wrap text-[#0f0] max-h-lvh overflow-y-clip;
    }
  }
</style>
