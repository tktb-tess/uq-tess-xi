<script lang="ts">
  const initialize = () => {
    const i = crypto.getRandomValues(new BigUint64Array(200));
    return Array.from(i, (n) => n.toString(2).padStart(64, '0')).join('');
  };
  let str = $state(initialize());
  const addStr = () => {
    const s = (() => {
      const num = crypto.getRandomValues(new Uint16Array(1))[0];
      return num.toString(2).padStart(16, '0');
    })();

    str += s;
  };

  const removeStr = () => {
    str = str.slice(16);
  };

  setInterval(() => {
    addStr();
    removeStr();
  }, 1);
</script>

<pre class="__like-program">{str}</pre>

<style lang="postcss">
  @reference '../../../app.css';
  @layer components {
    .__like-program {
      @apply break-all whitespace-pre-wrap text-[lime];
    }
  }
</style>
