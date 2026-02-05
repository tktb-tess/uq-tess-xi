<script lang="ts">
  import ArrowIcon from './ArrowIcon.svelte';

  interface Props {
    readonly class?: string;
  }
  const { class: cName }: Props = $props();
  let isOpen = $state(false);
  let details: HTMLDetailsElement;
  let content: HTMLUListElement | undefined = $state();
  let isRunning = $state(false);
  const openingAnimation = $derived.by((): Keyframe[] | undefined => {
    if (!content) return;
    return [{ height: '0' }, { height: `${content.scrollHeight}px` }];
  });

  const closingAnimation = $derived.by((): Keyframe[] | undefined => {
    if (!content) return;
    return [{ height: `${content.scrollHeight}px` }, { height: 0 }];
  });

  const animationOptions: KeyframeAnimationOptions = {
    duration: 240,
    easing: 'cubic-bezier(0.6, 0, 0.4, 1)',
  };
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
        <details bind:this={details} data-opened={isOpen || null}>
          <summary
            onclick={(ev) => {
              ev.preventDefault();
              if (!content || !openingAnimation || !closingAnimation || !details) return;
              if (isRunning) return;
              isRunning = true;
              if (details.open) {
                isOpen = false;
                const anim = content.animate(closingAnimation, animationOptions);
                anim.onfinish = () => {
                  details.open = false;
                  isRunning = false;
                };
              } else {
                details.open = true;
                isOpen = true;
                const anim = content.animate(openingAnimation, animationOptions);
                anim.onfinish = () => {
                  isRunning = false;
                };
              }
            }}
          >
            <ArrowIcon
              class="inline-block size-6 in-data-opened:rotate-x-180 transition-transform duration-240"
            />
            <span>文法</span>
          </summary>
          <ul bind:this={content} class={isRunning ? 'overflow-y-clip' : null}>
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

    details {
      summary {
        @apply block user-select-none cursor-pointer;

        &::-webkit-details-marker {
          @apply hidden;
        }
      }
    }
  }
</style>
