<script lang="ts">
  import XAccordion from './XAccordion.svelte';

  interface Props {
    readonly class?: string;
  }
  const { class: cName }: Props = $props();
</script>

<ul id="sidemenu" class={cName}>
  <li>
    <h3>VESSENZLENDISÇ</h3>
    <ul>
      <li><a href="/conlang/vaes">概説</a></li>
      <li><a href="/conlang/vaes/letter-et-pron">文字と発音</a></li>
      <li><a href="/conlang/vaes/phonology">音韻論</a></li>
      <li><a href="/conlang/vaes/swadesh-list">Swadesh List</a></li>
      <li>
        <a href="/conlang/vaes/ringo-bunn" aria-disabled="true" tabindex="-1">りんご文 (準備中)</a>
      </li>
      <li>
        <XAccordion summary="文法">
          <ul>
            <li>
              <a href="/conlang/vaes/noun" aria-disabled="true" tabindex="-1">名詞 (準備中)</a>
            </li>
            <li><a href="/conlang/vaes/numeral">数詞</a></li>
            <li>
              <a href="/conlang/vaes/verb" aria-disabled="true" tabindex="-1">動詞 (準備中)</a>
            </li>
            <li>
              <a href="/conlang/vaes/adjective" aria-disabled="true" tabindex="-1"
                >形容詞 (準備中)</a
              >
            </li>
          </ul>
        </XAccordion>
      </li>
    </ul>
  </li>
  <li>
    <h3>MISCELLANEOUS</h3>
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
        &:where(:any-link:not([aria-disabled='true'])) {
          @apply no-underline ctext-text;
        }

        &:where([aria-disabled='true']) {
          @apply ctext-text-pale;
        }
      }

      a,
      :global(:where(#accordion) summary) {
        @apply px-3 h-10 rounded;
      }

      a {
        @apply flex items-center;
      }

      :is(a:where(:not([aria-disabled='true'])), :global(:where(#accordion) summary)) {
        @apply any-hover:ctext-textinv any-hover:cbg-accent transition-colors;
      }

      li {
        @apply block;
      }

      h3 {
        @apply font-sans font-extralight text-2xl px-2 py-1;
      }
    }
  }
</style>
