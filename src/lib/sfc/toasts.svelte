<script lang="ts">
    import { toastStates, dismissToast } from "./toastStates.svelte";
    
</script>

{#each toastStates as [id, toast]}
    <div class="border border-sky-500 bg-sky-100 rounded fixed z-10000 w-30 top-5 left-[50%] flex gap-5 justify-center items-center">
        <p class="m-0 text-xl">{toast.message}</p>
        <button onclick={() => dismissToast(id)} type="button" class="text-xl">×</button>
    </div>
{/each}


<style>
    @keyframes fadein {
        from {
            opacity: 0;
            top: 0px;
        }
        to {
            opacity: 1;
            top: 20px;
        }
    }

    div {
        animation-timing-function: var(--default-transition-timing-function);
        animation-name: fadein;
        animation-duration: 100ms;
    }
</style>