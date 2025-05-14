<script lang="ts">
	const ogTitle = 'Vässenzländisķ 概説', ogDesc = '';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&family=Noto+Sans+TC:wght@100..900&display=swap"
		rel="stylesheet"
	/>
	<meta name="description" content={ogDesc} />
	<!-- OGP -->
	<meta property="og:title" content="{ogTitle} - 悠久肆方体" />
	<meta property="og:description" content={ogDesc} />
	<!-- twitter card -->
	<meta name="twitter:title" content="{ogTitle} - 悠久肆方体" />
	<meta name="twitter:description" content={ogDesc} />
	<title>{ogTitle} - 悠久肆方体</title>
</svelte:head>

<h2 class="my-8 text-center">概説</h2>
<div>
	<p>
		<strong>ヴェッセンズラン語</strong>、または<strong>ヴェッセンズランド語</strong
		>は、インド・ヨーロッパ語族ゲルマン語派アングロ・フリジア語群に属し、
		大西洋の島国、ヴェッセンズラン共和国で主に話される言語であり、また同国の公用語である。
		話者数約50万人。 略称は<strong>葦語</strong>。
	</p>
	<h3>各国語表記</h3>
	<ul>
		<li>維: vässenzländisķ spräķ / vässenzländisķ</li>
		<li>日: ヴェッセンズラン語 / 葦語</li>
		<li>英: Vessenslandic language / Vessenslandic</li>
		<li>独: wessensländische Sprache / Wessensländisch</li>
		<li>仏: le vessenslandais</li>
		<li class="noto-sans-sc">
			中(简): 苇森斯兰语 (拼音: <span class="font-ipa">wěi sēn sī lán yǔ</span>) / 西端岛语 (拼音: <span
				class="font-ipa">xī duān dǎo yǔ</span
			>)
		</li>
		<li class="noto-sans-tc">中(繁): 葦森斯蘭語 / 西端島語</li>
	</ul>
</div>
<section aria-labelledby="overview">
	<h2 id="overview" class="border-b-3 border-double ps-1">概要</h2>
	<p>古英語以降英語と分岐した言語であり、言語系統的には英語にかなり近い。</p>
	<p>
		英語の語形変化がフランス語との接触などの要因により大幅に簡略化したのに対し、ヴェッセンズラン語は、古英語の語形変化のほとんどを今なお維持していることが特徴である。
	</p>
	<p>
		成立過程でウェセックス方言とノーサンブリア方言が混ざったため、ノーサンブリア方言や古ノルド語の影響を受けた。
	</p>
</section>

<section aria-labelledby="history">
	<h2 id="history" class="border-b-3 border-double ps-1">歴史</h2>
	<p>
		古英語の時代&#9608;&#9608;世紀ごろに、当時のウェセックスとノーサンブリア地方にいたアングロ・サクソン人がヴェッセンズラン島に移り住んだのが最初である。
		この大規模な移住の理由は詳しくは分かっていない。
	</p>
	<p>
		その後、グレートブリテン島ではノルマン・コンクエストなどの様々な出来事が起こり、英語の形態は大きく変化していくが、ヴェッセンズラン語はそのような変化をあまり被らなかった。
	</p>
</section>

<h3 class="text-center text-[red] my-5">工事中...</h3>

<style>
	.noto-sans-sc {
		font-family: 'Noto Sans SC', sans-serif;
	}

	.noto-sans-tc {
		font-family: 'Noto Sans TC', sans-serif;
	}
</style>
