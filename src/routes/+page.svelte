<script lang="ts">
    import TessLogo from '$lib/tess_logo.svelte';
import '../app.css';
</script>

<header class="h-[40rem] bg-gradient-to-b from-mnlila from-50% to-llila to-100% grid grid-cols-1 gap-y-6 place-content-center place-items-center">
    <TessLogo class="fill-white w-[250px] h-auto" />
    <h1 class="text-white font-semibold text-5xl lg:text-6xl xl:text-7xl text-center drop-shadow-[0_2px_4px_rgba(0,0,0,.4)]">悠 久 肆 方 体</h1>
</header>

<main class="container mx-auto bg-slate-50 px-2">
    <h2 class="text-3xl text-center text-mnlila font-semibold my-5">〜ようこそ〜</h2>
    <h3 class="text-2xl">創作言語</h3>
    <h3 class="text-2xl">その他の活動</h3>
</main>

<style>
    h1, h2, h3 {
        font-family: var(--font-serif);
    }

    main :is(h2, h3) {
        color: var(--color-mnlila);
    }
    
</style>