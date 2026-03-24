<script lang="ts">
  import XSection from '$lib/components/XSection.svelte';
  import type { MouseEventHandler } from 'svelte/elements';

  interface Props {
    exps: readonly number[];
    logs: readonly (number | null)[];
  }

  type Mode = '+' | '\u00D7' | '÷';
  const { exps, logs }: Props = $props();
  const title = '変な式';

  let leftVal = $state(0);
  let rightVal = $state(0);
  let mode = $state<Mode>('+');

  const changeMode: MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault();
    switch (mode) {
      case '+': {
        mode = '×';
        break;
      }
      case '×': {
        mode = '÷';
        break;
      }
      case '÷': {
        mode = '+';
        break;
      }
    }
  };

  const result = $derived.by(() => {
    const cond = leftVal >= 0 && leftVal < 2048 && rightVal >= 0 && rightVal < 2048;
    if (!cond) return NaN;
    switch (mode) {
      case '+': {
        return leftVal ^ rightVal;
      }
      case '×': {
        const l = logs[leftVal];
        const r = logs[rightVal];
        if (l == null || r == null) {
          return 0;
        }
        const resExp = (l + r) % 2047;
        return exps[resExp] ?? NaN;
      }
      case '÷': {
        const l = logs[leftVal];
        const r = logs[rightVal];
        if (r == null) {
          return NaN;
        } else if (l == null) {
          return 0;
        }
        const resExp = (l - r + 2047) % 2047;
        return exps[resExp] ?? NaN;
      }
    }
  });
</script>

<XSection {title}>
  <p><s class="text-text-pale">この式、なんか変……</s></p>
  <div class="nanka-hen">
    <input
      name="左側"
      type="number"
      min="0"
      max="2047"
      class="inputs"
      bind:value={
        () => leftVal.toString(),
        (v) => {
          leftVal = Number.parseInt(v);
        }
      }
    />
    <button name="計算記号" onclick={changeMode} class="__calc-btn">{mode}</button>
    <input
      name="右側"
      type="number"
      min="0"
      max="2047"
      class="inputs"
      bind:value={
        () => rightVal.toString(),
        (v) => {
          rightVal = Number.parseInt(v);
        }
      }
    />
    <p class="m-0 text-xl">=</p>
    <pre class="result">{result}</pre>
  </div>
</XSection>

<style lang="postcss">
  @reference '../../../../app.css';

  @layer components {
    .nanka-hen {
      @apply flex justify-center *:min-w-0 *:m-0 items-center my-figure gap-4;
    }

    .__calc-btn {
      @apply leading-none px-2 py-1 rounded border border-border
      hover-focus:bg-accent2 transition-colors;
    }

    .inputs,
    .result {
      @apply border rounded px-1 w-20 border-border;
    }
  }
</style>
