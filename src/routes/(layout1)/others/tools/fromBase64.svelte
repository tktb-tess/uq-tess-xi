<script lang="ts">
  import { addToast } from '$lib/components/toastStates.svelte';
  import XSection from '$lib/components/XSection.svelte';
  import { toBase64Url, fromBase64, fromBase64Url } from '@tktb-tess/util-fns';
  import type { MouseEventHandler } from 'svelte/elements';
  import type { Mode } from './types';
  import SelectBtn from '$lib/components/SelectBtn.svelte';
  import XBtn from '$lib/components/XBtn.svelte';

  const dec = new TextDecoder('utf-8', { fatal: true });
  const en = new TextEncoder();
  const title = 'Base64(URL) → テキスト 変換';
  const seed = toBase64Url(en.encode(title));

  let input = $state('');
  let mode: Mode = $state('Base64');

  const output = $derived.by(() => {
    if (!input) return '';
    try {
      if (mode === 'Base64') {
        const bin = fromBase64(input);
        return dec.decode(bin);
      } else {
        const bin = fromBase64Url(input);
        return dec.decode(bin);
      }
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
    <div class="mode">
      <h3 class="mode-title">モード</h3>
      <div class="mode-select">
        <SelectBtn
          name={seed}
          id="{seed}-mode-base64"
          onchange={(ev) => {
            ev.preventDefault();
            mode = 'Base64';
          }}
          checked={mode === 'Base64'}
        >
          Base64
        </SelectBtn>
        <SelectBtn
          name={seed}
          id="{seed}-mode-base64url"
          onchange={(ev) => {
            ev.preventDefault();
            mode = 'Base64URL';
          }}
          checked={mode === 'Base64URL'}
        >
          Base64URL
        </SelectBtn>
      </div>
    </div>
    <div class="input">
      <label for="input-{seed}">{mode}</label>
      <textarea id="input-{seed}" bind:value={input}></textarea>
    </div>
    <p class="arrow">↓</p>
    <div class="output">
      <label for="output-{seed}">元テキスト</label>
      <textarea id="output-{seed}" value={output} readonly></textarea>
    </div>
    <div class="copy-btn">
      <XBtn onclick={copyText}>クリップボードにコピー</XBtn>
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
    .output,
    .mode {
      @apply flex flex-col gap-2 text-center;

      > textarea {
        @apply min-inline-0 block-40;
      }
    }

    .copy-btn {
      @apply flex justify-center-safe;
    }

    .mode-select {
      @apply flex justify-center-safe gap-2 flex-wrap;
    }

    .mode-title {
      @apply text-center;
    }
  }
</style>
