<script lang="ts">
  import ArrowIcon from './ArrowIcon.svelte';
  import { innerWidth } from 'svelte/reactivity/window';

  interface Props {
    readonly class?: string;
  }
  const { class: cName }: Props = $props();
  let isVisuallyOpen = $state(false);
  let isOpen = $state(false);
  const isSmall = $derived.by(() => {
    if (!innerWidth.current) return false;
    return innerWidth.current < 640;
  });
  const fontSize = $derived(isSmall ? 0.875 : 1);
  const linkNumber = 5;
  const lineHeight = 1.5;
  const padding = 0.25 * 3;
  const openHeight = $derived.by(() => {
    const h = linkNumber * (fontSize * lineHeight + padding);
    return `${h}rem`;
  });
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
        <details bind:open={isOpen} data-open={isVisuallyOpen || null} style="--open-height: {openHeight};">
          <summary
            onclick={(ev) => {
              ev.preventDefault();
              if (!isOpen) {
                isOpen = true;
                isVisuallyOpen = true;
              } else {
                isVisuallyOpen = false;
                setTimeout(() => {
                  isOpen = false;
                }, 200);
              }
            }}
          >
            <ArrowIcon class="inline-block size-6 in-data-open:rotate-x-180 transition-transform" />
            <span>文法</span>
          </summary>
          <ul>
            <li><a href="/conlang/vaes/noun">名詞 (準備中)</a></li>
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

    li {
      @apply block;
    }

    #sidemenu {
      @apply px-1 py-3 gap-6;
    }

    h4 {
      @apply font-sans font-extralight text-2xl px-2 py-1;
    }

    summary {
      @apply block user-select-none cursor-pointer;
    }

    details {
      --close-height: calc(1lh + var(--spacing) * 3);
      @apply h-(--close-height) overflow-y-clip
      transition-[height] duration-200;

      &[data-open] {
        @apply h-(--open-height);
      }
    }
  }
</style>
