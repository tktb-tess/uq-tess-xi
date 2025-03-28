<main class="flex flex-col gap-y-1 justify-center items-center min-h-screen overflow-clip">
    <p class="text-8xl font-serif italic">Hallo, Welt!</p>
</main>

<style>
    main p {
        animation: vibe 10s infinite;
        animation-timing-function: cubic-bezier(0, .95, 1, .05);
    }

    @keyframes vibe {
        from {
            transform: translateX(-70vw);
        }
        to {
            transform: translateX(70vw);
        }
    }
</style>