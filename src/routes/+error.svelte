<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';
</script>

<div
	class="bg-llila min-h-screen grid grid-cols-[auto] place-content-center place-items-center gap-y-10 overflow-hidden"
>
	<h2 class="text-6xl font-medium">Hoppla!</h2>
	<pre class="text-2xl">{page.status}: {page.error?.message ?? 'No message'}</pre>
</div>

<style>
</style>
