<script lang="ts">
  import { addToast } from '$lib/components/toastStates.svelte';
  import XSection from '$lib/components/XSection.svelte';
  import { toBase64 } from '@tktb-tess/util-fns';
  import type { MouseEventHandler } from 'svelte/elements';

  const decoder = new TextDecoder('utf-8', { fatal: true });
  const en = new TextEncoder();
  let input = $state('');
  const title = 'Base64 → テキスト 変換';
  const seed = toBase64(en.encode(title));

  const output = $derived.by(() => {
    try {
      if (!input) return '';
      const stred = atob(input);
      const utf8 = Uint8Array.from(stred, (s) => s.charCodeAt(0));
      return decoder.decode(utf8);
    } catch (e) {
      console.warn(e);
      return `Error: invalid string`;
    }
  });

  const copyText: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault();
    navigator.clipboard
      .writeText(output)
      .then(() => addToast('Copied to Clipboard!', 'info', 3000))
      .catch((e) => addToast(`failed to copy: ${e}`, 'warning', 3000));
  };
</script>

<XSection {title}>
  <div class="fromB64-root">
    <div class="input">
      <label for="input-{seed}">Base64</label>
      <textarea id="input-{seed}" bind:value={input}></textarea>
    </div>
    <p class="arrow">↓</p>
    <div class="output">
      <label for="output-{seed}">元テキスト</label>
      <textarea id="output-{seed}" value={output} readonly></textarea>
    </div>
    <div class="copy-btn">
      <button onclick={copyText}>クリップボードにコピー</button>
    </div>
  </div>
</XSection>

<style lang="postcss">
  @reference '../../../../app.css';
  @layer components {
    .fromB64-root {
      @apply flex flex-col gap-4 my-figure **:my-0;
    }

    .arrow {
      @apply text-center;
    }

    .input,
    .output {
      @apply flex flex-col gap-2 text-center;

      > textarea {
        @apply min-w-0 h-40;
      }
    }

    .copy-btn {
      @apply flex justify-center-safe;

      > button {
        @apply btn-theme-1;
      }
    }
  }
</style>
