<script lang="ts">
	const { class: className = '', stop = false } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 512 512"
	class="inline-block fill-current {className} {stop ? 'stop' : null}"
>
	<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
	<path
		d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
	/>
</svg>

<style>
	@keyframes spin {
		0% {
			transform: rotate(0);
		}

		33.33% {
			transform: rotate(120deg);
		}

		66.67% {
			transform: rotate(240deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

    svg:not(.stop) {
        animation-name: spin;
        animation-duration: 1.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
</style>
