<script lang="ts">
  import XAccordion from './XAccordion.svelte';

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
        <XAccordion summary="文法">
          <ul>
            <li><a href="/conlang/vaes/noun">名詞 (準備中)</a></li>
            <li><a href="/conlang/vaes/numeral">数詞</a></li>
            <li><a aria-disabled="true">動詞 (準備中)</a></li>
            <li><a aria-disabled="true">形容詞 (準備中)</a></li>
          </ul>
        </XAccordion>
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
    #sidemenu {
      @apply px-1 gap-6 **:mt-0;

      &,
      ul {
        @apply flex flex-col list-none;
      }

      ul {
        @apply ps-0;
      }

      a {
        @apply no-underline ctext-text;

        &[aria-disabled='true'] {
          @apply ctext-text-pale;
        }
      }

      :global(:is(a, :where(#accordion) summary)) {
        @apply flex items-center px-3 h-10 rounded;
      }

      :is(a:where(:not([aria-disabled='true'])), :global(:where(#accordion) summary)) {
        @apply any-hover:ctext-textinv any-hover:cbg-accent transition-colors;
      }

      li {
        @apply block;
      }

      h4 {
        @apply font-sans font-extralight text-2xl px-2 py-1;
      }
    }
  }
</style>
