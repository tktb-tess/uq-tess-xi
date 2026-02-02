<script lang="ts">
  import ArrowIcon from './ArrowIcon.svelte';

  interface Props {
    readonly class?: string;
  }
  const {}: Props = $props();
</script>

<ul>
  <li>
    <h4>VESSENZLENDISÇ</h4>
    <ul>
      <li><a href="/conlang/vaes">概説</a></li>
      <li><a href="/conlang/vaes/letter-et-pron">文字と発音</a></li>
      <li><a href="/conlang/vaes/phonology">音韻論</a></li>
      <li><a href="/conlang/vaes/swadesh-list">Swadesh List</a></li>
      <li><a aria-disabled="true">りんご文 (準備中)</a></li>
      <li>
        <details>
          <summary>
            <ArrowIcon class="inline-block" />
            <span>文法</span>
          </summary>
          <ul>
            <li><a aria-disabled="true">名詞 (準備中)</a></li>
            <li><a href="/conlang/vaes/numeral">数詞</a></li>
            <li><a aria-disabled="true">動詞 (準備中)</a></li>
            <li><a aria-disabled="true">形容詞 (準備中)</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </li>
  <li>
    <h4>MISCELLANEOUS</h4>
    <ul>
      <li><a href="/data">データ</a></li>
      <li><a href="/others">その他</a></li>
    </ul>
  </li>
</ul>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    ul {
      @apply flex ps-0 mt-0;
    }

    h4 {
      @apply mt-0;
    }
  }
</style>
