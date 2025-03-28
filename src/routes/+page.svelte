<main class="grid place-content-center place-items-center min-h-screen overflow-hidden">
    <p class="text-6xl font-extralight">Hallo, Welt!</p>
</main>

<style>
    p {
        animation: vibe 8s infinite;
        animation-timing-function: cubic-bezier(0, .95, 1, .05);
    }

    @keyframes vibe {
        0% {
            transform: translateX(-60vw);
        }

        100% {
            transform: translateX(60vw);
        }
    }
</style>