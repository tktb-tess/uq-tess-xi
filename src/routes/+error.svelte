<script lang="ts">
    import { page } from "$app/state";
    import '../app.css';
</script>

<div class="bg-[blue] text-white min-h-screen grid grid-cols-[auto] place-content-center place-items-center gap-y-10 overflow-hidden">
    <h2 class="text-6xl font-extralight italic">Oops!</h2>
    <pre class="text-2xl">{page.status}: {page.error?.message ?? 'No message'}</pre>
</div>

<style>
    h2, pre {
        animation: vibe 2s infinite;
        animation-timing-function: cubic-bezier(0, 1, 1, 1);
    }
    @keyframes vibe {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(0);
        }
        25%, 75% {
            transform: translateY(-2vw);
            animation-timing-function: cubic-bezier(0, 0, 1, 0);
        }
    }
</style>
