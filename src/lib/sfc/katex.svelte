<script lang="ts">
	import { ParseError, renderToString } from 'katex';
	type Props = {
		math: string;
		displayMode?: boolean;
	};

	const { math, displayMode = false }: Props = $props();

	const rendered = $derived.by(() => {
		try {
			const ren_ = renderToString(math, { displayMode });

			return ren_;
		} catch (e) {
			if (e instanceof ParseError) {
				return `<span class="text-[red]">${e.name} at ${e.position}: ${e.rawMessage}</span>`;
			} else if (e instanceof Error) {
				return `<span class="text-[red]">${e.message}</span>`;
			} else {
				return `<span class="text-[red]">unidentified error</span>`;
			}
		}
	});
</script>

{@html rendered}
