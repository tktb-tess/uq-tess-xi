<script lang="ts">
	type Props = {
		contents: {
			readonly title: string;
			readonly desc: string;
			readonly href: string;
		}[];
	};
	const { contents }: Props = $props();
</script>

<div class="flex flex-col gap-3 w-full max-w-190 mx-auto">
	{#each contents as { title, desc, href }}
		<a
			class="flex items-center group rounded-sm bg-gradient-to-b from-mnlila/80 to-mnlila drop-shadow-sm no-underline text-black px-4 py-2 scale-98 any-hover:scale-100 transition-transform"
			{href}
		>
			<h3 class="text-white m-0 text-nowrap flex-[0_0_140px]">{title}</h3>
			<p
				class="text-white m-0 min-w-0"
			>
				{desc}
			</p>
		</a>
	{/each}
</div>
