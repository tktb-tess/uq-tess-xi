<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';
</script>

<div
	class="bg-llila min-h-screen grid grid-cols-[auto] place-content-center place-items-center gap-y-10 overflow-hidden **:m-0"
>
	<h2 class="text-6xl font-extralight font-sans border-none">Huch!</h2>
	<p class="text-2xl">{page.status}: {page.error?.message ?? 'No message'}</p>
	<a href="/." class="block bg-mnlila hover:bg-mnlila/60 text-white px-3 py-2 rounded-lg">トップに戻る</a>
</div>

<style>
</style>
