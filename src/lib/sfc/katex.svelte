<script lang="ts">
	import katex from 'katex';
	type Props = {
		math: string;
		displayMode?: boolean;
	};

	const { math, displayMode = false }: Props = $props();
</script>

{@html katex.renderToString(math, { displayMode })}
