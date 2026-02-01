<script lang="ts">
  interface Props {
    readonly class?: string;
  }
  const { class: cName }: Props = $props();
  
</script>

<div>
  <h4 class="text-2xl font-sans textc-text font-extralight">VÄSSENZLÄNDISĶ</h4>
  <div class="flex flex-col">
    <a href="/conlang/vaes">概説</a>
    <a href="/conlang/vaes/letter-et-pron">文字と発音</a>
    <a href="/conlang/vaes/phonology">音韻論</a>
    <a href="/conlang/vaes/swadesh-list">Swadesh List</a>
    <a aria-disabled="true">りんご文 (準備中)</a>
    <details class="[&[open]_#list-arrow]:rotate-x-180">
      <summary class="block cursor-pointer user-select-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="fill-current inline-block size-4.5 -translate-y-px duration-250"
          id="list-arrow"
        >
          <path
            d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"
          />
        </svg>
        文法
      </summary>
      <div class="flex flex-col overflow-y-hidden">
        <a aria-disabled="true">名詞 (準備中)</a>
        <a href="/conlang/vaes/numeral">数詞</a>
        <a aria-disabled="true">動詞 (準備中)</a>
        <a aria-disabled="true">形容詞 (準備中)</a>
      </div>
    </details>
  </div>
</div>
<hr class="border-black/30 w-15 mx-auto my-4" />
<div
  class="
      side-menu [&_a]:textc-text [&_a]:no-underline
      [&_:where(a,summary)]:transition-colors [&_:where(a,summary)]:py-2 [&_:where(a,summary)]:rounded-lg
      [&_:where(a,summary)]:hover:bgc-highlight [&_:where(a,summary)]:hover:textc-textinv
    "
>
  <h4 class="text-2xl font-sans textc-text font-extralight">MISCELLANEOUS</h4>
  <div class="flex flex-col">
    <a href="/data">データ</a>
    <a href="/others">その他</a>
  </div>
</div>

<style lang="postcss">
  @reference '../../app.css';
  @layer components {

  }
</style>
