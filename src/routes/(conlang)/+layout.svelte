<script lang="ts">
	import '../../app.css';

	let { children } = $props();
</script>



<div class="container flex">
	<nav class="flex-3/12">
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</nav>
	<main class="flex-9/12">
		{@render children()}
	</main>
</div>
