<script lang="ts">
	const ogTitle = 'グレゴリオ聖歌について',
		ogDesc = '';
</script>

<svelte:head>
	<meta name="description" content={ogDesc} />
	<!-- OGP -->
	<meta property="og:title" content="{ogTitle} - 悠久肆方体" />
	<meta property="og:description" content={ogDesc} />
	<!-- twitter card -->
	<meta name="twitter:title" content="{ogTitle} - 悠久肆方体" />
	<meta name="twitter:description" content={ogDesc} />
	<title>{ogTitle} - 悠久肆方体</title>
</svelte:head>

<h2 class="text-center my-8" id="title">グレゴリオ聖歌の音階</h2>

<p>
	まず、グレゴリオ聖歌の教会旋法には大事な音が2つあり、それが<strong>フィナリス</strong
	>（finalis）と<strong>ドミナント</strong>（dominant）<br />
	フィナリスは旋律の終わりに来る音、現代の主音に相当<br />
	ドミナントは旋律内で繰り返し使われまくる軸になる音、現代の属音に相当……というわけでもなく結構違う。
</p>
<section aria-labelledby="eight-modes">
	<h2 id="eight-modes" class="border-b-3 border-double ps-1">8つの旋法</h2>
	<p>
		旋法は8つあるが、これらは4つの<strong>正格旋法</strong>と対応する4つの<strong>変格旋法</strong
		>（プラガル旋法）というのに分けられる。<br />
		変格は対応する正格とフィナリスが同じだが、音高の範囲（<strong>アンビトゥス</strong
		> (ambitus) という）とドミナントが違う。<br />
		変格には対応する正格の名前に<strong>ヒュポ</strong>（hypo-）をつける。
	</p>
	<p>旋法は順番に</p>
	<ul>
		<li>ドリア dorian</li>
		<li>ヒュポドリア hypodorian</li>
		<li>フリュギア phrygian</li>
		<li>ヒュポフリュギア hypophrygian</li>
		<li>リュディア lydian</li>
		<li>ヒュポリュディア hypolydian</li>
		<li>ミクソリュディア mixolydian</li>
		<li>ヒュポミクソリュディア hypomixolydian</li>
	</ul>
	<p>※イオニア（長調）ionian とアエオリア（短調）aeolian、ロクリア locrian は初期はない</p>
</section>
<section aria-labelledby="rules">
	<h2 id="rules" class="border-b-3 border-double ps-1">基本ルール</h2>
	<p>フィナリスは</p>
	<ul>
		<li>ドリアがレ</li>
		<li>フリュギアがミ</li>
		<li>リュディアがファ</li>
		<li>ミクソリュディアがソ</li>
	</ul>
	<p>変格正格同じ</p>
	<p>
		ドミナントは正格ではフィナリスの5度上、変格では対の正格ドミナントの3度下<br />
		<strong>ただしこのルールでドミナントが「シ」になる場合、1つ上げて「ド」にする。</strong><br />
		具体的にはフリュギア、ヒュポミクソリュディアに適用される。
	</p>
	<p>
		アンビトゥス（音高の範囲）は正格がフィナリスから1オクターブ、変格がフィナリスの4度下から1オクターブ<br
		/>
		つまり正格では一番下、変格では大体真ん中らへんにフィナリスが来る<br />
		構成音は全部白鍵とする
	</p>
</section>
<section aria-labelledby="spec">
	<h2 id="spec" class="border-b-3 border-double ps-1">具体的な音階</h2>
	<p>以下に全部書き下す。フィナリスは[]、ドミナントは()で囲う</p>
	<ol class="[&_p]:mb-0 [&_li:not(:last-child)]:mb-4 ms-2 [&_p:first-child]:font-semibold [&_p:first-child]:text-mnlila">
		<li>
			<p>ドリア</p>
			<p>[レ] ミ ファ ソ (ラ) シ ド レ</p>
		</li>
		<li>
			<p>ヒュポドリア</p>
			<p>ラ シ ド [レ] ミ (ファ) ソ ラ</p>
		</li>
		<li>
			<p>フリュギア</p>
			<p>[ミ] ファ ソ ラ シ (ド) レ ミ</p>
		</li>
		<li>
			<p>ヒュポフリュギア</p>
			<p>シ ド レ [ミ] ファ ソ (ラ) シ</p>
			<p>※ドミナントに注意、フリュギアの(ド)から3度下げるのでこう</p>
		</li>
		<li>
			<p>リュディア</p>
			<p>[ファ] ソ ラ シ (ド) レ ミ ファ</p>
		</li>
		<li>
			<p>ヒュポリュディア</p>
			<p>ド レ ミ [ファ] ソ (ラ) シ ド</p>
		</li>
		<li>
			<p>ミクソリュディア</p>
			<p>[ソ] ラ シ ド (レ) ミ ファ ソ</p>
		</li>
		<li>
			<p>ヒュポミクソリュディア</p>
			<p>ミ ファ [ソ] ラ シ (ド) レ ミ</p>
		</li>
	</ol>
</section>
<section aria-labelledby="suppliment">
	<h2 id="suppliment" class="border-b-3 border-double ps-1">補足</h2>
	<ul>
		<li>（ヒュポ）ドリアと（ヒュポ）リュディアではシが半音下がってシ♭になることがまあまあある</li>
		<li>音高範囲は絶対でなく1, 2音上下にはみ出ることもある</li>
	</ul>
</section>
