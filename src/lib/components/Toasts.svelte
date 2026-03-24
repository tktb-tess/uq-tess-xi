<svelte:options runes />

<script lang="ts">
  import { toastStates, dismissToast, type Toast } from './toastStates.svelte';

  const decideColor = (toast: Toast) => {
    switch (toast.type) {
      case 'info': {
        return 'bg-blue-600';
      }
      case 'warning': {
        return 'bg-red-600';
      }
      case 'hint': {
        return 'bg-green-500';
      }
    }
  };
</script>

{#if toastStates.size > 0}
  <div id="toast-root">
    {#each toastStates as [key, toast] (key)}
      <div class="__toast-elem {decideColor(toast)}">
        <p>{toast.message}</p>
        <button
          aria-label="通知を消す"
          onclick={(ev) => {
            ev.preventDefault();
            clearTimeout(toast.timeoutID);
            dismissToast(key);
          }}
        ></button>
      </div>
    {/each}
  </div>
{/if}

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    #toast-root {
      @apply fixed z-(--z-toast) top-5 inset-x-0 flex flex-col
      gap-2 items-center pointer-events-none;
    }

    .__toast-elem {
      @apply px-4 py-2 text-white rounded w-full max-w-70
      grid grid-cols-[1fr_1.25rem] items-center
		  gap-5 animate-toast
      pointer-events-auto *:m-0;

      > p {
        @apply text-lg;
      }

      > button {
        @apply grid size-6;
      }

      > button::before,
      > button::after {
        content: '';
        @apply block col-span-full row-span-full place-self-center w-5
        border-b-2 border-current;
      }

      > button::before {
        @apply rotate-45;
      }

      > button::after {
        @apply -rotate-45;
      }
    }
  }
</style>
