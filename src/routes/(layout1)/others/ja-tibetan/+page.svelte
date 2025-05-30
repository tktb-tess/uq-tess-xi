<script lang="ts">
	import ExtLink from '$lib/sfc/ext_link.svelte';

	const ogTitle = '日本語 チベット文字表記',
		ogDesc = '狂気の沙汰';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Serif+Tibetan:wght@100..900&display=swap"
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

<h2 class="text-center my-8">ནི་ཧོཾ་གོ</h2>
<section aria-label="音節構造">
	<h2 class="border-b-3 border-double ps-1" id="syllable-structure">音節構造　ཨོཾ་སེ་ཛཀཽ་ཛཽ</h2>
	<p>先に音節構造の話からする。</p>
	<p>
		日本語の音節構造は最大で C<sub>1</sub>C<sub>2</sub>G<sub>1</sub>VG<sub>2</sub> である。 ここで、C
		は子音、G はグライド、V は音節主音（主に母音）である。
	</p>
	<p>
		なお、この音節構造は
		<ExtLink href="https://nihongotopics.github.io/Kyouro/">教育ローマ字</ExtLink>
		の資料内で提案されているものである。より詳しい話はそちらを直接参照するのが良い。
	</p>
	<h3 id="c">C</h3>
	<p>
		C は 無し・C<sub>2</sub>・C<sub>1</sub>C<sub>2</sub> のいずれかである。ただし C<sub>1</sub>C<sub
			>2</sub
		>
		の場合、C<sub>1</sub> と C<sub>2</sub> 双方ともに無声子音である。 従来 i, u
		が「無声化」していると考えられてきた部分は実際には母音が脱落しており、 C<sub>1</sub>C<sub>2</sub
		>
		はそこに現れている子音クラスターで、 C<sub>1</sub> は、u が脱落したならそのまま、i
		が脱落したなら硬口蓋化する。 C<sub>2</sub> には全ての子音、C<sub>1</sub>
		には全ての無声子音とその硬口蓋化音が現れる。 C<sub>1</sub>, C<sub>2</sub> いずれも長くなれる。
	</p>
	<h3 id="g">G</h3>
	<p>
		G<sub>1</sub> の存在は任意で y のみが来る。y は前の子音を硬口蓋化する。 G<sub>2</sub>
		の存在も任意で ĭ, n̆ の他、わずかな例で ĕ, ŭ も現れる（例: 帰る kaĕ.ru, ハウスダスト haŭ.su.da.s<sup
			>u</sup
		>to） （ブレーヴェは C や V と区別するために付している。） ただし V が長いときは G<sub>2</sub> は現れない。
		ĭ は V が a, u, o の時に現れ、ĕ, ŭ は V が a の時のみ現れる。n̆ はいずれの場合にも現れ得る。
	</p>
	<h3 id="v">V</h3>
	<p>
		V は a, i, u, e, o の他わずかに ɴ が現れる（区別のため small capital を用いている。） ɴ が V
		の時は C や G は現れない。また、いずれも長くなれる。
	</p>
	<hr class="border-black/30 w-20 mx-auto my-12" />
	<p>以下、下の様な記号を用いて表すこととする。</p>
	<ul>
		<li>
			C<sub>1</sub> = &#123;∅, k<sup>u</sup>, k<sup>i</sup>, s<sup>u</sup>, š<sup>u</sup>, š<sup
				>i</sup
			>, t<sup>u</sup>, t<sup>i</sup>, c<sup>u</sup>, č<sup>u</sup>, č<sup>i</sup>, f<sup>u</sup>, h<sup
				>i</sup
			>, p<sup>u</sup>, p<sup>i</sup>&#125;
		</li>
		<li>C<sub>2</sub> = &#123;∅, k, g, s, z, š, ž, t, d, c, č, n, h, f, b, p, m, y, r, w&#125;</li>
		<li>G<sub>1</sub> = &#123;∅, y&#125;</li>
		<li>V = &#123;a, i, u, e, o, ɴ&#125;</li>
		<li>G<sub>2</sub> = &#123;∅, ĭ, n̆, ĕ, ŭ&#125;</li>
	</ul>
	<p>
		ただし、上付きの i, u は脱落した母音を表し、š, ž, c, č
		はそれぞれシャ行、ジャ行、ツァ行、チャ行の子音を表す。
	</p>
	<p>長子音は2重にすることで示し、長母音は上にマクロンを付すことで示す。</p>
</section>
<section aria-label="文字">
	<h2 class="border-b-3 border-double ps-1" id="letters">文字　མོ་ཇི</h2>
	<p>音節は <em>tseg</em>「་」で区切る。</p>
	<p>基本的な文字は以下の通り。</p>

	<div class="table-container">
		<table class="grid-cols-auto-4">
			<thead>
				<tr>
					<th>発音</th>
					<th>文字</th>
					<th>発音</th>
					<th>文字</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>a</td>
					<td>ཨ</td>
					<td>-</td>
					<td>-</td>
				</tr>
				<tr>
					<td>ka</td>
					<td>ཀ</td>
					<td>ga</td>
					<td>ག</td>
				</tr>
				<tr>
					<td>sa</td>
					<td>ས</td>
					<td>za</td>
					<td>ཛ</td>
				</tr>
				<tr>
					<td>ša</td>
					<td>ཤ</td>
					<td>ža</td>
					<td>ཇ</td>
				</tr>
				<tr>
					<td>ta</td>
					<td>ཏ</td>
					<td>da</td>
					<td>ད</td>
				</tr>
				<tr>
					<td>ca</td>
					<td>ཙ</td>
					<td>ča</td>
					<td>ཅ</td>
				</tr>
				<tr>
					<td>pa</td>
					<td>པ</td>
					<td>ba</td>
					<td>བ</td>
				</tr>
				<tr>
					<td>ma</td>
					<td>མ</td>
					<td>na</td>
					<td>ན</td>
				</tr>
				<tr>
					<td>ha</td>
					<td>ཧ</td>
					<td>ra</td>
					<td>ར</td>
				</tr>
				<tr>
					<td>ya</td>
					<td>ཡ</td>
					<td>wa</td>
					<td>ཝ</td>
				</tr>
				<tr>
					<td>fa</td>
					<td>ཕ</td>
					<td class="col-span-2">-</td>
				</tr>
			</tbody>
		</table>
	</div>

	<p>文字は後に示す母音記号が無ければ、後ろに母音 a が付いているものとして読む。</p>

	<h3 id="vowel-mark">母音記号　བོ་ཨིཾ་ཀི་གཽ</h3>
	<div class="table-container">
		<table class="grid-cols-auto-6">
			<thead>
				<tr>
					<th class="">発音</th>
					<th class="">文字</th>
					<th class="">ཀ での例</th>
					<th class="">発音</th>
					<th class="">文字</th>
					<th class="">ཀ での例</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>a</td>
					<td>-</td>
					<td>ཀ</td>
					<td>ā</td>
					<td>◌ཱ</td>
					<td>ཀཱ</td>
				</tr>
				<tr>
					<td>i</td>
					<td>◌ི</td>
					<td>ཀི</td>
					<td>ī</td>
					<td>◌ཱི</td>
					<td>ཀཱི</td>
				</tr>
				<tr>
					<td>u</td>
					<td>◌ུ</td>
					<td>ཀུ</td>
					<td>ū</td>
					<td>◌ཱུ</td>
					<td>ཀཱུ</td>
				</tr>
				<tr>
					<td>e</td>
					<td>◌ེ</td>
					<td>ཀེ</td>
					<td>ē</td>
					<td>◌ཻ</td>
					<td>ཀཻ</td>
				</tr>
				<tr>
					<td>o</td>
					<td>◌ོ</td>
					<td>ཀོ</td>
					<td>ō</td>
					<td>◌ཽ</td>
					<td>ཀཽ</td>
				</tr>
			</tbody>
		</table>
	</div>

	<ul>
		<li>a 以外の母音は上の様な母音記号を付けることで表す。</li>
		<li>長母音は下に ◌ཱ　を付けるか、線を二重にして表す。</li>
	</ul>
	<h3 id="geminated-cons">長子音　ཅཽ་ཤི་ཨིཾ</h3>
	<p>
		長子音（促音）は、上または左に ར (r) を付して表す。上に付けるとき、大抵の場合は “T”
		の様な形状になるので注意。 ただし、子音が ཡ (y)
		だった場合、後述する拗音と区別できなくなるため、例外的に ཡྱ と綴る。（例: つっよ cu.yyo → ཙུ་ཡྱོ
		）
	</p>
	<div class="table-container">
		<table class="grid-cols-auto-3">
			<thead>
				<tr>
					<th>＼</th>
					<th>文字</th>
					<th>例</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-left">C̄ (C ≠ y)（促音）</td>
					<td>ར◌</td>
					<td>རྐ (kka)</td>
				</tr>
				<tr>
					<td class="text-left">yy</td>
					<td>ཡྱ</td>
					<td>-</td>
				</tr>
			</tbody>
		</table>
	</div>

	<h3 id="cons-cluster">子音クラスター　ཤི་ཨིཾ་ཀུ་ར་སྟཱ</h3>
	<p>
		子音クラスター C<sub>1</sub>C<sub>2</sub> は、C<sub>1</sub> と C<sub>2</sub>
		に対応する文字を縦あるいは横に並べて表す。 ただし C<sub>1</sub> が k, t, c, č, p の時は、ཀ (k),
		ཏ (t), ཙ (c), ཅ (č), པ (p) の代わりに ག (g), ད (d), ཛ (z), ཇ (ž), བ (b) を用いる。
		縦か横かで違いはない。（例: ナスカ na.s<sup>u</sup>ka → ན་སྐ or ན་སཀ ）
	</p>
	<p>
		ཤ (š), ཇ (č) 以外は、何もつけず並べると C<sup>u</sup> を表す。C<sup>i</sup>
		を表記する場合は下または右に ཡ, ◌ྱ (y) を付す。 一方 ཤ (š), ཇ (č) では、何もつけないと C<sup
			>i</sup
		>
		を表す。C<sup>u</sup> を表記する場合は下または右に ཝ, ◌ྭ (w) を付す。
	</p>
	<div class="table-container">
		<table class="grid-cols-auto-3">
			<thead>
				<tr>
					<th>＼</th>
					<th>文字</th>
					<th>例</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-left">C<sup>u</sup> (C ≠ š, č), &#123;(š, č)&#125;<sup>i</sup></td>
					<td>各文字単独</td>
					<td>གཙུ་ཤཏ (靴下 k<sup>u</sup>cu.š<sup>i</sup>ta)</td>
				</tr>
				<tr>
					<td class="text-left">&#123;(š, č)&#125;<sup>u</sup></td>
					<td>ཤྭ, ཇྭ</td>
					<td>ཧཽ་ཤྭཙུ (放出 hō.š<sup>u</sup>cu)</td>
				</tr>
				<tr>
					<td class="text-left">C<sup>i</sup> (C ≠ š, č)</td>
					<td>ཡ, ◌ྱ</td>
					<td>གྱཙུ་ནེ (キツネ k<sup>i</sup>cu.ne)</td>
				</tr>
			</tbody>
		</table>
	</div>

	<h3 id="glides">グライド　གུ་རའི་དོ</h3>
	<p>
		G<sub>1</sub> y は音節核の字の下または右に ཡ, ◌ྱ (y) を付す。右に付す場合は、母音記号は ཡ
		の側に付く。 G<sub>2</sub> ĭ, ĕ, ŭ は、それぞれ右側に འི, འེ, འུ を付して表す。n̆ は、核の字に
		<em>rjes su nga ro</em>「◌ཾ」を付して表す。
	</p>
	<div class="table-container">
		<table class="grid-cols-auto-3">
			<thead>
				<tr>
					<th class="">＼</th>
					<th class="">文字</th>
					<th class="">ཀ での例</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-left">G<sub>1</sub> y（拗音）</td>
					<td>◌ྱ, ◌ཡ</td>
					<td>ཀྱཽ, ཀཡཽ (kyō)</td>
				</tr>
				<tr>
					<td class="text-left">G<sub>2</sub> ĭ</td>
					<td>◌འི</td>
					<td>ཀའི (kaĭ)</td>
				</tr>
				<tr>
					<td class="text-left">G<sub>2</sub> n̆（撥音）</td>
					<td>◌ཾ</td>
					<td>ཀཾ (kan̆)</td>
				</tr>
				<tr>
					<td class="text-left">G<sub>2</sub> ĕ</td>
					<td>◌འེ</td>
					<td>ཀའེ (kaĕ)</td>
				</tr>
				<tr>
					<td class="text-left">G<sub>2</sub> ŭ</td>
					<td>◌འུ</td>
					<td>ཀའུ (kaŭ)</td>
				</tr>
			</tbody>
		</table>
	</div>

	<h3>音節主音的鼻音　ཨོཾ་སེ་ཛཤུ་ཨོཾ་ཏེ་ཀི་བི་ཨོཾ</h3>
	<p>
		音節主音的鼻音 ɴ は、ང (ng) で表す。（例: ンジャメナ ɴ.ža.me.na ང་ཇ་མེ་ན、美味しいんだ
		oĭ.šī.ɴ.da ཨོའི་ཤཱི་ང་ད ）
	</p>

	<h3 id="arranging">字の配置について　ཇི་ནོ་ ཧའི་ཅི་ནི་ ཙུའི་ཏེ</h3>
	<p>一応推奨される綴り方はあり、それは</p>
	<ul>
		<li>子音クラスター ས (s)、促音 ར (r) は上に乗せ、それ以外は左に書く。</li>
		<li>ས と ར が両方ある場合は、ས は左に書く。</li>
		<li>拗音 ཡ, ◌ྱ (y)、š<sup>u</sup>, č<sup>u</sup> を表す ཝ, ◌ྭ (w) は下に書く。</li>
	</ul>
	<p>
		である。ただし、フォントの都合上上手く表示されない時などは、これら字を上下に重ねるものを左右に並べて表記しても問題ない。
	</p>
	<p>「畢竟 (h<sup>i</sup>kkyō)」は ཧྱརྐྱཽ, ཧཡརྐྱཽ, ཧཡརཀྱཽ, ཧཡརཀཡཽ の全てが許される。</p>
</section>
<section aria-label="音節核の見分け方">
	<h2 class="border-b-3 border-double ps-1" id="distinguish">
		音節核の見分け方　ཨོཾ་སེ་ཛཀ་ཀུ་ནོ་ མི་ཝ་ཀེ་ཀ་ཏ
	</h2>
	<p><em>tseg</em> の中が1文字の時、それが音節核である。</p>
	<p>2文字以上の場合、</p>
	<p>
		音節核の後にはグライドしか来ないので、グライドの字 ( འི, འེ, འུ )
		があれば、その直前が音節核であるし、それが無ければ最後の字が音節核である。 ただし拗音「子音字 +
		ཡ」や促音「ར + 子音字」の場合は、2文字で1つの音節核とみなす。
	</p>
</section>
<section aria-label="分かち書き">
	<h2 class="border-b-3 border-double ps-1" id="wakachigaki">分かち書き　ཝ་ཀ་ཅི་ག་ཀི</h2>
	<p>
		チベット語において通常分かち書きはしないが、この表記では文節毎にスペースを入れることも可能とする。（入れなくてもよい）
		ただし末尾に <em>tseg</em> を付ける。
	</p>
	<p>
		読点には <em>gter tsheg</em>「༔」を使い、句点には <em>shad</em>「།」を使う。これらが付く際
		<em>tseg</em>
		は不要。 段落の終わりには <em>nyis shad</em> 「༎」を使う。
	</p>

	<p>例: ཀྱཽ་ནོ་ ཨ་ས༔ ཝ་ཏ་ཤི་ཝ་ རཾ་ནིཾ་གུ་ཨོ་ ཤཏ། —— 今日の朝、私はランニングをした。</p>
</section>

<section aria-label="例 単語">
	<h2 class="border-b-3 border-double ps-1" id="ex-words">例 単語　རཻ ཏཾ་གོ</h2>
	<div class="table-container">
		<table class="grid-cols-auto-3">
			<thead>
				<tr>
					<th>単語</th>
					<th>音節構造</th>
					<th>表記</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>神</td>
					<td>ka.mi</td>
					<td>ཀ་མི</td>
				</tr>
				<tr>
					<td>階段</td>
					<td>kaĭ.dan̆</td>
					<td>ཀའི་དཾ</td>
				</tr>
				<tr>
					<td>北</td>
					<td>k<sup>i</sup>ta</td>
					<td>གྱཏ</td>
				</tr>
				<tr>
					<td>牛乳</td>
					<td>gyū.nyū</td>
					<td>གྱཱུ་ནྱཱུ, གཡཱུ་ནཡཱུ</td>
				</tr>
				<tr>
					<td>浅草</td>
					<td>a.sa.k<sup>u</sup>sa</td>
					<td>ཨ་ས་གས</td>
				</tr>
				<tr>
					<td>力</td>
					<td>č<sup>i</sup>ka.ra</td>
					<td>ཇཀ་ར</td>
				</tr>
				<tr>
					<td>区間</td>
					<td>k<sup>u</sup>kan̆</td>
					<td>གཀཾ</td>
				</tr>
				<tr>
					<td>即興</td>
					<td>so.kkyō</td>
					<td>སོ་རྐྱཽ</td>
				</tr>
				<tr>
					<td>楽器店</td>
					<td>ga.kk<sup>i</sup>ten̆</td>
					<td>ག་རྒྱཏེཾ</td>
				</tr>
				<tr>
					<td>掴む</td>
					<td>c<sup>u</sup>ka.mu</td>
					<td>ཛཀ་མུ</td>
				</tr>
				<tr>
					<td>ンガウンデレ</td>
					<td>ɴ.ga.un̆.de.re</td>
					<td>ང་ག་ཨུཾ་དེ་རེ</td>
				</tr>
				<tr>
					<td>コーン茶</td>
					<td>kō.ɴ.ča</td>
					<td>ཀཽ་ང་ཅ</td>
				</tr>
				<tr>
					<td>コーン茶（別パターン）</td>
					<td>ko.on̆.ča</td>
					<td>ཀོ་ཨོཾ་ཅ</td>
				</tr>
				<tr>
					<td>リヒテンシュタイン</td>
					<td>ri.h<sup>i</sup>ten̆.š<sup>u</sup>ta.in̆</td>
					<td>རི་ཧྱཏེཾ་ཤྭཏ་ཨིཾ</td>
				</tr>
				<tr>
					<td>蓋</td>
					<td>f<sup>u</sup>ta</td>
					<td>ཕཏ</td>
				</tr>
				<tr>
					<td>ウィーンっ子</td>
					<td>wī.ɴ.kko</td>
					<td>ཝཱི་ང་རྐོ</td>
				</tr>
				<tr>
					<td>変える</td>
					<td>ka.e.ru</td>
					<td>ཀ་ཨེ་རུ</td>
				</tr>
				<tr>
					<td>帰る</td>
					<td>kaĕ.ru</td>
					<td>ཀའེ་རུ</td>
				</tr>
				<tr>
					<td>アウトレット</td>
					<td>aŭ.to.re.tto</td>
					<td>ཨའུ་ཏོ་རེ་རྟོ</td>
				</tr>
				<tr>
					<td>名うて</td>
					<td>na.u.te</td>
					<td>ན་ཨུ་ཏེ</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
<section aria-label="例文">
	<h2 class="border-b-3 border-double ps-1" id="ex-sentence">例文　རཻ་བུཾ</h2>
	<h3 id="indoorkei-nara-trackmaker">
		Yunomi &amp; Nicamoq - インドア系ならトラックメイカー ドロップ部分
		<br />ཡུ་ནོ་མི &amp; ནི་ཀ་མོ་ཀྱུ - ཨིཾ་དོ་ཨ་ཀཻ་ན་ར་ ཏོ་ར་རྐུ་མེ་ཨི་ཀཱ དོ་རོ་རྤུ་བུ་བུཾ
	</h3>
	<p>
		<ExtLink href="https://youtu.be/su0FCBRwVpE?si=C8f06FSj1__Qb9u2">ようつべ</ExtLink>
	</p>
	<p>ཨོ་ཤ་རེ་ནོ་ ཀྱོ་གཅི་ད་ ཕ་རྴོཾ་སེཾ་ཏཱ　o.ša.re.no kyo.k<sup>u</sup>či.da fa.ššon̆.sen̆.tā</p>

	<p>རྱཽ་ཏེ་ཨོ་ ཀ་ཀ་གེ་ཏེ་ ཀུ་ར་རྤྱོ་ཧེཾ་ཛ　ryō.te.o ka.ka.ge.te ku.ra.ppyo.hen̆.za</p>

	<p>ཇཱ་ཇི་ནི་ ཝའི་ཤ་ཙུ་ ཛེ་རྟའི་ཧེཾ་ད　žā.ži.ni waĭ.ša.cu ze.ttaĭ.hen̆.da</p>

	<p>ཨེ་མུ་ཨའི་དཱི་ཨའི་ ཏོ་ར་རྐུ་མེ་ཨི་ཀཱ　e.mu.aĭ.dī.aĭ to.ra.kku.me.i.kā</p>

	<p>ཨོ་ཤ་རེ་ནོ་ སཻ་ཅི་ད་ ཕ་རྴོཾ་སེཾ་ཏཱ　o.ša.re.no sē.či.da fa.ššon̆.sen̆.tā</p>

	<p>རྱཽ་ཏེ་ཨོ་ ཀ་ཀ་གེ་ཏེ་ ཀུ་ར་རྤྱོ་ཧེཾ་ཛ　ryō.te.o ka.ka.ge.te ku.ra.ppyo.hen̆.za</p>

	<p>ནཽ་ཀི་ཝ་ ཨ་ཤཏ་ད་ ཛེ་རྟའི་ ཏེ་ཙུ་ཡ　nō.ki.wa a.š<sup>i</sup>ta.da ze.ttaĭ.te.cu.ya</p>

	<p>ཨེ་བི་དེ་ཨི་ ཨེ་བི་ནའི་ ཏོ་ར་རྐུ་མེ་ཨི་ཀཱ　e.bi.de.i e.bi.naĭ to.ra.kku.me.i.kā</p>

	<hr class="border-black/30 w-20 mx-auto my-12" />
	<p>お洒落の極地だ ファッションセンター</p>
	<p>両手を掲げて クラッピョヘンザ</p>
	<p>ジャージにワイシャツ 絶対ヘンだ</p>
	<p>M・I・D・I トラックメイカー</p>
	<p>お洒落の聖地だ ファッションセンター</p>
	<p>両手を掲げて クラッピョヘンザ</p>
	<p>納期は明日だ 絶対徹夜</p>
	<p>エビデイ エビナイ トラックメイカー</p>
</section>

<style>
	:global(:root) {
		--font-sans:
			'InterVariable', 'Arial', 'Helvetica Neue', 'Noto Serif Tibetan', 'Noto Sans JP',
			'BIZ UDPGothic', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', sans-serif, 'Segoe UI',
			'Yu Gothic UI', system-ui;
		--font-serif:
			'CharisSIL', 'Times New Roman', 'Noto Serif Tibetan', 'Noto Serif JP', 'BIZ UDPMincho',
			'Hiragino Mincho', 'Hiragino Serif', serif, 'Segoe UI', 'Yu Gothic UI', system-ui;
	}

	p,
	td,
	th,
	li {
		overflow-y: clip;
		line-height: 1.6;
	}

	h2,
	h3 {
		overflow-y: clip;
		line-height: 2;
	}
</style>
