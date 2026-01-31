<script lang="ts">
  import { addToast } from '$lib/components/toastStates.svelte';
  const encoder = new TextEncoder();
  type Props = {
    seed: string;
  };
  const { seed }: Props = $props();
  let input = $state('');

  const output = $derived.by(() => {
    if (!input) return '';

    const utf8 = encoder.encode(input);
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

<section aria-labelledby={seed}>
  <h2 class="border-b-3 border-double ps-1" id={seed}>テキスト → Base64 変換</h2>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-2 items-center">
      <label for="input-{seed}" class="">テキスト</label>
      <textarea class="w-full h-32" id="input-{seed}" bind:value={input}></textarea>
    </div>
    <p class="text-center m-0">↓</p>
    <div class="flex flex-col gap-2 items-center">
      <label for="output-{seed}" class="">Base64 (枠内をクリックするとコピーできます)</label>
      <textarea
        onclick={copyText}
        class="w-full h-32 cursor-pointer"
        id="output-{seed}"
        readonly>{output}</textarea
      >
    </div>
  </div>
</section>
