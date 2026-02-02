<script lang="ts">
  import { PUBLIC_SITE_NAME } from '$env/static/public';

  const ogTitle = '表示するだけでなんかすごいハッカーみたいなことやってるように見えるページ';
  const ogDesc = 'なんかすごい';

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

<pre class="break-all whitespace-pre-wrap text-[lime]">{str}</pre>
