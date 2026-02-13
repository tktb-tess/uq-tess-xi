<script lang="ts">
  import { addToast } from '$lib/components/toastStates.svelte';
  import XSection from '$lib/components/XSection.svelte';
  import { toBase64 } from '@tktb-tess/util-fns';

  const decoder = new TextDecoder();
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
      return `Error: invalid string`;
    }
  });

  const copyText = () => {
    navigator.clipboard
      .writeText(output)
      .then(() => addToast('Copied to Clipboard!', 'info', 3000))
      .catch((e) => addToast(`failed to copy: ${e}`, 'warning', 3000));
  };
</script>

<XSection {title}>
  <div class="flex flex-col gap-3 my-(--s-figure)">
    <div class="flex flex-col gap-2 items-center">
      <label for="input-{seed}">Base64</label>
      <textarea class="w-full h-32" id="input-{seed}" bind:value={input}></textarea>
    </div>
    <p class="text-center m-0">↓</p>
    <div class="flex flex-col gap-2 items-center">
      <label for="output-{seed}">元テキスト (枠内をクリックするとコピーできます)</label>
      <textarea onclick={copyText} class="w-full h-32 cursor-pointer" id="output-{seed}" readonly
        >{output}</textarea
      >
    </div>
  </div>
</XSection>
