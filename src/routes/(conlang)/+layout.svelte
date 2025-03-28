<script lang="ts">
	import '../../app.css';

	let { children } = $props();
</script>



<div class="container flex">
	<nav class="flex-3/12">aaaa</nav>

	{@render children()}
</div>
