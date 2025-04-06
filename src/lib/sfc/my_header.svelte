<script lang="ts">
	let { subtitle = '' } = $props();
</script>

<header class="bg-mnlila text-white [&_a]:text-white [&_a]:hover:text-white/70 [&_a]:transition-colors [&_a]:no-underline h-[64px] **:break-words">
    <div class="flex [&_*]:min-w-[0] mx-auto max-w-[75%] h-full items-center gap-x-5">
        <h1 class="font-serif text-3xl"><a href="/.">悠久肆方体</a></h1>
        <p class="m-0">{subtitle}</p>
        <nav class="flex gap-x-5 ms-auto [&_p]:m-0">
            <a href="/vaes">Vässenzländisķ</a>
            <a href="/data">データ</a>
            <a href="/others">その他</a>
        </nav>
    </div>
	
</header>
