<script lang="ts">
  import { addToast } from '$lib/components/toastStates.svelte';
  import XSection from '$lib/components/XSection.svelte';
  const en = new TextEncoder();
  type Props = {
    seed: string;
  };
  const {}: Props = $props();
  let input = $state('');

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
  const title = `テキスト → Base64 変換`;
  const b64 = (() => {
    const strarr = Array.from(new TextEncoder().encode(title), (n) => String.fromCharCode(n));
    return btoa(strarr.join(''));
  })();
</script>

<XSection {title}>
  <div class="flex flex-col gap-3 my-(--s-heading)">
    <div class="flex flex-col gap-2 text-center">
      <label for="input-{b64}">テキスト</label>
      <textarea class="w-full h-32" id="input-{b64}" bind:value={input}></textarea>
    </div>
    <p class="text-center m-0">↓</p>
    <div class="flex flex-col gap-2 text-center">
      <label for="output-{b64}">Base64 (枠内をクリックするとコピーできます)</label>
      <textarea
        onclick={copyText}
        class="w-full h-32 cursor-pointer"
        id="output-{b64}"
        readonly
        value={output}
      ></textarea>
    </div>
  </div>
</XSection>
