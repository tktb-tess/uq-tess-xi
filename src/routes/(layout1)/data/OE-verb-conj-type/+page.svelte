<script lang="ts">
	import ConjugationTable from './conjugation-table.svelte';
	const ogTitle = 'Ænglisċ 動詞',
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

<h2 class="my-8 text-center">古英語 動詞活用まとめ</h2>
<div>
	<ul>
		<li>
			古英語の動詞活用を網羅的にまとめ、解説する。なお表記は英語版Wiktionaryのものに倣い、ウィン（ƿ）の代わりに
			w を使い、þ と ð は þ に統一する。
		</li>
		<li>c, g の硬口蓋化音はドットで表記し、長母音はマクロンで示す。</li>
	</ul>
</div>
<section aria-labelledby="strong-verb">
	<h2 id="strong-verb" class="border-b-3 border-double ps-1">強変化動詞</h2>
	<p>
		語幹の母音交替（アプラウトという）を伴う動詞活用を持つ動詞。変化パターンに応じていくつかのクラスに分けられる。
	</p>
	<p>
		古英語の強変化動詞の語幹母音は「(現在) - (直説法過去1, 3人称単数) - (その他の過去) -
		(過去分詞)」の4種類のグループ間で交替する。以下、直説法過去1,
		3人称単数の過去語幹を「第1過去語幹」、それ以外の過去語幹を「第2過去語幹」ということにする。
	</p>

	<p>
		細かい例外もあるが、大まかな各屈折語尾は以下のようになる。上の4グループの語幹をそれぞれ [pre.],
		[1st.pas.], [2nd.pas.], [p.p.] と示す。なお直説法現在2, 3人称単数は変音することがある。
	</p>

	<ConjugationTable
		forms={[
			'屈折語尾',
			'[pre.]-an',
			'[pre.]-enne',
			'[pre.]-e',
			'[pre.*]-(e)st',
			'[pre.*]-(e)þ',
			'[pre.]-aþ',
			'[1st.pas.]-∅',
			'[2nd.pas.]-e',
			'[1st.pas.]-∅',
			'[2nd.pas.]-on',
			'[pre.]-e',
			'[pre.]-en',
			'[2nd.pas.]-e',
			'[2nd.pas.]-en',
			'[pre.]-∅, -e',
			'[pre.]-aþ',
			'[pre.]-ende',
			'(ġe)-[p.p.]-en'
		]}
	/>

	<h3 id="s-class-i">クラスI</h3>

	<ConjugationTable
		forms={[
			'rīdan “to ride”',
			'rīdan',
			'rīdenne',
			'rīde',
			'rītst',
			'rītt',
			'rīdaþ',
			'rād',
			'ride',
			'rād',
			'ridon',
			'rīde',
			'rīden',
			'ride',
			'riden',
			'rīd',
			'rīdaþ',
			'rīdende',
			'(ġe)riden'
		]}
	/>

	<p>
		幹母音の変化は <strong>ī - ā - i - i</strong>、現代英語だとride, driveのように
		<strong>iCe - oCe - iCen</strong> と変化する不規則動詞に相当する。
	</p>
	<p>
		なお直説法現在2人称単数の語尾 <i>-st</i>
		が有声子音の後に来ると、その子音は無声化する。また直説法現在3人称単数の語尾は本来 <i>-(e)þ</i>
		だが、語幹末子音が <i>t, d, s</i> の場合 <i>-t</i> となる。
	</p>
</section>
