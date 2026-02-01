<script lang="ts">
  import { toastStates, dismissToast } from './toastStates.svelte';
</script>

{#if toastStates.size > 0}
  <div
    id="toast-root"
    class="fixed z-10000 top-5 left-0 right-0 flex flex-col gap-2 items-center *:max-w-full"
  >
    {#each toastStates as [key, toast]}
      <div
        class="__toast-elem
					{toast.type === 'info'
          ? 'border-sky-400'
          : toast.type === 'warning'
            ? 'border-red-500'
            : 'border-green-500'}"
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
    .__toast-elem {
      @apply px-3 border-2 cbg-body rounded flex
		  gap-5 justify-center items-center relative animate-toast;

      :where(p, button) {
        @apply m-0;
      }

      :where(p) {
        @apply text-xl;
      }
    }
  }
</style>
