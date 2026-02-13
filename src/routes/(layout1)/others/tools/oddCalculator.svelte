<script lang="ts">
  import XSection from '$lib/components/XSection.svelte';
  import { toBase64 } from '@tktb-tess/util-fns';

  type Props = {
    exps: readonly number[];
    logs: readonly (number | null)[];
  };

  type Mode = '+' | '\u00D7' | '÷';
  const { exps, logs }: Props = $props();
  const en = new TextEncoder();
  const title = '変な式';
  const seed = toBase64(en.encode(title));

  let leftVal = $state(0);
  let rightVal = $state(0);
  let mode = $state<Mode>('+');

  const changeMode = () => {
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
        if (l === null || r === null) {
          return 0;
        }
        const resExp = (l + r) % 2047;
        return exps[resExp];
      }
      case '÷': {
        const l = logs[leftVal];
        const r = logs[rightVal];
        if (r === null) {
          return NaN;
        } else if (l === null) {
          return 0;
        }
        const resExp = (l - r + 2047) % 2047;
        return exps[resExp];
      }
    }
  });
</script>

<XSection {title}>
  <p><s class="ctext-text-pale">この式、なんか変……</s></p>
  <div class="flex justify-center *:min-w-0 items-center my-(--s-figure) gap-4">
    <input
      name="左側"
      type="number"
      min="0"
      max="2047"
      class="border rounded px-1 w-20"
      bind:value={
        () => leftVal.toString(),
        (v) => {
          leftVal = Number.parseInt(v);
        }
      }
    />
    <button name="計算記号" onclick={changeMode} type="button" class="__calc-btn">{mode}</button>
    <input
      name="右側"
      type="number"
      min="0"
      max="2047"
      class="border rounded px-1 w-20"
      bind:value={
        () => rightVal.toString(),
        (v) => {
          rightVal = Number.parseInt(v);
        }
      }
    />
    <p class="m-0 text-xl">=</p>
    <textarea name="計算結果" class="overflow-x-auto w-20" rows="1" readonly value={result}
    ></textarea>
  </div>
</XSection>

<style lang="postcss">
  @reference '../../../../app.css';
  @layer components {
    .__calc-btn {
      @apply leading-none px-2 py-1 rounded border cborder-border
      any-hover:cbg-accent2 transition-colors;
    }
  }
</style>
