<script lang="ts">
  import { addToast } from '$lib/components/toastStates.svelte';
  import XSection from '$lib/components/XSection.svelte';
  import { toBase64 } from '@tktb-tess/util-fns';
  const en = new TextEncoder();

  let input = $state('');
  const title = `テキスト → Base64 変換`;
  const seed = toBase64(en.encode(title));

  const output = $derived.by(() => {
    if (!input) return '';

    const utf8 = en.encode(input);
    const stred = Array.from(utf8, (n) => String.fromCodePoint(n)).join('');
    return btoa(stred);
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
    <div class="flex flex-col gap-2 text-center">
      <label for="input-{seed}">テキスト</label>
      <textarea class="w-full h-32" id="input-{seed}" bind:value={input}></textarea>
    </div>
    <p class="text-center m-0">↓</p>
    <div class="flex flex-col gap-2 text-center">
      <label for="output-{seed}">Base64 (枠内をクリックするとコピーできます)</label>
      <textarea
        onclick={copyText}
        class="w-full h-32 cursor-pointer"
        id="output-{seed}"
        readonly
        value={output}
      ></textarea>
    </div>
  </div>
</XSection>
