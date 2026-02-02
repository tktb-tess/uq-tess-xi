<script lang="ts">
  import ArrowIcon from './ArrowIcon.svelte';

  interface Props {
    readonly class?: string;
  }
  const { class: cName }: Props = $props();
</script>

<ul id="sidemenu" class={cName}>
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
            <ArrowIcon class="inline-block size-6 in-[details[open]]:rotate-x-180 transition-transform" />
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
    a {
      @apply no-underline ctext-text;
    }

    :is(a, summary) {
      @apply block px-3 py-1.5 rounded;
    }

    :is(a:where(:not([aria-disabled='true'])), summary) {
      @apply any-hover:ctext-textinv any-hover:cbg-accent transition-colors;
    }

    ul {
      @apply flex flex-col list-none ps-0 mt-0 **:mt-0;
    }

    #sidemenu {
      @apply px-1 py-3 gap-6;
    }

    h4 {
      @apply font-sans font-extralight text-2xl px-2;
    }

    summary {
      @apply block user-select-none;
    }
  }
</style>
