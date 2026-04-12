<script lang="ts">
  import SelectBtn from '$lib/components/SelectBtn.svelte';
  import { addToast } from '$lib/components/toastStates.svelte';
  import XSection from '$lib/components/XSection.svelte';
  import { toBase64, toBase64URL } from '@tktb-tess/util-fns';
  import type { MouseEventHandler } from 'svelte/elements';
  import type { Mode } from './typesdecl';
  import XBtn from '$lib/components/XBtn.svelte';

  const en = new TextEncoder();
  const title = `テキスト → Base64(URL) 変換`;
  const seed = toBase64URL(en.encode(title));

  let input = $state('');
  let mode: Mode = $state('Base64');

  const output = $derived.by(() => {
    if (mode === 'Base64') {
      return toBase64(en.encode(input));
    } else {
      return toBase64URL(en.encode(input));
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
  <div class="toB64-root">
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
      <label for="input-{seed}">テキスト</label>
      <textarea id="input-{seed}" bind:value={input}></textarea>
    </div>
    <p class="arrow">↓</p>
    <div class="output">
      <label for="output-{seed}">{mode}</label>
      <textarea id="output-{seed}" readonly value={output}></textarea>
    </div>
    <div class="copy-btn">
      <XBtn onclick={copyText}>クリップボードにコピー</XBtn>
    </div>
  </div>
</XSection>

<style lang="postcss">
  @reference '../../../../app.css';
  @layer components {
    .toB64-root {
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
