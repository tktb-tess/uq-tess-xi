<script lang="ts">
  import { toastStates, dismissToast } from './toastStates.svelte';
  const {}: {} = $props();
</script>

{#if toastStates.size > 0}
  <div id="toast-root">
    {#each toastStates as [key, toast]}
      <div
        class="__toast-elem
					{(() => {
          switch (toast.type) {
            case 'info': {
              return 'border-sky-500';
            }
            case 'warning': {
              return 'border-red-600';
            }
            case 'hint': {
              return 'border-green-500';
            }
          }
        })()}"
      >
        <p>{toast.message}</p>
        <button
          onclick={() => {
            clearTimeout(toast.timeoutID);
            dismissToast(key);
          }}
          type="button"
          class="text-xl"
        >
          ×
        </button>
      </div>
    {/each}
  </div>
{/if}

<style lang="postcss">
  @reference '../../app.css';
  @layer components {
    #toast-root {
      @apply fixed z-10000 top-5 inset-x-0 flex flex-col
      gap-2 items-center *:max-w-full pointer-events-none;
    }

    .__toast-elem {
      @apply px-3 border-2 cbg-main rounded flex
		  gap-5 justify-center items-center relative animate-toast
      pointer-events-auto;

      :where(p, button) {
        @apply m-0;
      }

      :where(p) {
        @apply text-xl;
      }
    }
  }
</style>
