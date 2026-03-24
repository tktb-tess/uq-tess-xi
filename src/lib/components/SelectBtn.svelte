<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ChangeEventHandler } from 'svelte/elements';

  interface Props {
    name: string;
    id: string;
    onchange: ChangeEventHandler<HTMLInputElement>;
    children: Snippet;
    checked: boolean;
  }

  const { name, id, onchange, children, checked }: Props = $props();
</script>

<div class="select-btn">
  <input type="radio" {name} {id} {onchange} {checked} />
  <label for={id}>
    {@render children()}
  </label>
</div>

<style lang="postcss">
  @reference '../../app.css';

  @layer components {
    .select-btn {
      > label {
        @apply block px-4 py-2 rounded leading-none cursor-pointer border
        border-accent text-accent
        hover-focus:opacity-60
        transition-opacity;
      }

      > input {
        @apply sr-only outline-0;
      }

      > input:checked + label {
        @apply bg-accent text-textinv;
      }

      > input:focus-visible + label {
        @apply outline-2 outline-offset-2;
      }
    }
  }
</style>
