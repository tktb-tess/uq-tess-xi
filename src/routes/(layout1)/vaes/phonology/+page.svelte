<script lang="ts">
</script>

<svelte:head>
	<title>葦語 音韻論</title>
</svelte:head>

<h2 class="text-center my-8">音韻論</h2>
<p>以下の説明では、音声記号にはIPA（国際音声記号）を基にした音声記号を使用する。</p>
<p>
	<span class="font-ipa">“[]”</span> で囲ったものがIPAの精密な音声表記で、<span class="font-ipa"
		>“//”</span
	> で囲ったものはヴェッセンズラン語の音韻論に準じた音素表記である。
</p>
<section aria-labelledby="consonant">
	<h2 id="consonant" class="border-b-3 border-double ps-1">子音</h2>

	<div class="table-container">
		<table class="grid-cols-[repeat(9,auto)] [&_td]:font-ipa [&_td]:text-center">
			<thead>
				<tr>
					<th scope="col" class="col-span-2">＼</th>
					<th scope="col">両唇</th>
					<th scope="col">唇歯</th>
					<th scope="col">歯/歯茎</th>
					<th scope="col">そり舌</th>
					<th scope="col">後部歯茎/硬口蓋</th>
					<th scope="col">軟口蓋</th>
					<th scope="col">声門</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">破裂音</th>
					<th scope="row">無声</th>
					<td>p</td>
					<td></td>
					<td>t</td>
					<td>(ʈ)</td>
					<td></td>
					<td>k</td>
					<td></td>
				</tr>
				<tr>
					<th scope="row" class="col-2">有声</th>
					<td>b</td>
					<td></td>
					<td>d</td>
					<td>(ɖ)</td>
					<td></td>
					<td>ɡ</td>
					<td>(ʔ)</td>
				</tr>
				<tr>
					<th scope="row" class="col-2">前声門化</th>
					<td>ʔ͡p</td>
					<td></td>
					<td>ʔ͡t</td>
					<td>(ʔ͡ʈ)</td>
					<td></td>
					<td>ʔ͡k</td>
					<td></td>
				</tr>
				<tr>
					<th scope="row" class="col-span-2">破擦音</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td>(t͡ɕ)</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">摩擦音</th>
					<th scope="row">無声中央</th>
					<td></td>
					<td>f</td>
					<td>s</td>
					<td>(ʂ)</td>
					<td>ɕ</td>
					<td>x</td>
					<td></td>
				</tr>
				<tr>
					<th class="col-2">無声側面</th>
					<td></td>
					<td></td>
					<td>ɬ</td>
					<td>(ɭ̝̊)</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row" class="col-2">有声</th>
					<td></td>
					<td></td>
					<td>z</td>
					<td>(ʐ)</td>
					<td>ʑ</td>
					<td></td>
					<td>ɦ</td>
				</tr>
				<tr>
					<th scope="row" class="col-span-2">鼻音</th>
					<td>m</td>
					<td></td>
					<td>n</td>
					<td>(ɳ)</td>
					<td>ɲ</td>
					<td>ŋ</td>
					<td></td>
				</tr>
				<tr>
					<th scope="row" class="col-span-2">はじき音</th>
					<td></td>
					<td></td>
					<td></td>
					<td>ɽ</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">接近音</th>
					<th scope="row">中央</th>
					<td></td>
					<td>ʋ</td>
					<td>ð</td>
					<td>(ɻ)</td>
					<td>j</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row" class="col-2">側面</th>
					<td></td>
					<td></td>
					<td>l</td>
					<td>(ɭ)</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>

	<h3>説明</h3>
	<p>破裂音は有声・無声・前声門化の3系列の対立がある。前声門化破裂音は語頭には現れない。</p>
	<p>
		無声破裂音 <span class="font-ipa">/p/, /t/, /k/</span> は <span class="font-ipa">/s/</span>
		の後でない音節頭にある時、帯気する (<span class="font-ipa">[pʰ], [tʰ], [kʰ]</span
		>)。流音・接近音
		<span class="font-ipa">/l/, /ɽ/, /j/, /ʋ/</span>
		が後続する時、後続する音は無声音化する (<span class="font-ipa">[pɽ̊]</span> etc.)。
	</p>
	<p>
		前声門化破裂音は帯気しない。前声門化破裂音の実際の発音は方言や年代によって様々であり、入破音 (<span
			class="font-ipa">[ɓ], [ɗ], [ɠ]</span
		>) や放出音 (<span class="font-ipa">[pʼ], [tʼ], [kʼ]</span>)
		、朝鮮語の濃音に近いような音にもなり得る。
	</p>
	<p>
		<span class="font-ipa">/ð/</span> は歯間〜歯接近音 <span class="font-ipa">[ð̪͆˕ ~ ð̞]</span> である。
	</p>
	<div>
		<p>
			<span class="font-ipa">/ɽ/</span> は前後の環境により実際の発音が変わり、また前後の子音の発音を変えることもある。
		</p>
		<ul>
			<li>
				<span class="font-ipa">/d/, /t/, /ʔ͡t/, /n/, /l/, /ɬ/</span> の前ではそり舌接近音
				<span class="font-ipa">[ɻ]</span>
				となり、各歯茎音も調音位置が同化して
				<span class="font-ipa">[ɻɖ], [ɻʈ], [ɻʔ͡ʈ], [ɻɳ], [ɻɭ], [ɻɭ̝̊]</span> のようになる。
			</li>
			<li>
				後に <span class="font-ipa">/s/, /z/</span> があるとき、同化してそれぞれ
				<span class="font-ipa">[ɽʂ], [ɽʐ]</span> となる。
			</li>
			<li>
				<span class="font-ipa">/ɬɽ/</span> は <span class="font-ipa">[ɭ̝̊ɽ]</span> のようになる。
			</li>
			<li>
				<span class="font-ipa">/ɪ/, /iː/</span> に挟まれた環境では <span class="font-ipa">/ɽ/</span>
				は歯茎はじき音 <span class="font-ipa">[ɾ]</span> のようになる。
			</li>
		</ul>
	</div>
	<p>
		<span class="font-ipa">/x/</span> は実際は前部軟口蓋〜口蓋垂の間で変動する。<span
			class="font-ipa">[x̟ ~ χ]</span
		>
	</p>
</section>

<section aria-labelledby="vowel">
	<h2 id="vowel" class="border-b-3 border-double ps-1">母音</h2>
	<h3 class="ms-1">単母音</h3>

	<div class="table-container">
		<table class="grid-cols-[repeat(8,auto)]">
			<caption>口母音</caption>
			<thead>
				<tr>
					<th scope="col">＼</th>
					<th scope="col" class="col-span-4">前舌</th>
					<th scope="col">中舌</th>
					<th scope="col" class="col-span-2">後舌</th>
				</tr>
				<tr>
					<th scope="col" class="col-start-2 col-end-4">非円唇</th>
					<th scope="col" class="col-start-4 col-end-6">円唇</th>
				</tr>
				<tr>
					<th scope="col" class="col-start-2">tense</th>
					<th scope="col">lax</th>
					<th scope="col">tense</th>
					<th scope="col">lax</th>
					<th scope="col">lax</th>
					<th scope="col">tense</th>
					<th scope="col">lax</th>
				</tr>
			</thead>
			<tbody class="[&_td]:font-ipa [&_td]:text-center">
				<tr>
					<th scope="row">狭</th>
					<td>iː</td>
					<td>ɪ</td>
					<td>yː</td>
					<td>ʏ</td>
					<td></td>
					<td>uː</td>
					<td>ʊ</td>
				</tr>
				<tr>
					<th scope="row">半狭</th>
					<td>eː</td>
					<td>e</td>
					<td>øː</td>
					<td></td>
					<td></td>
					<td>oː</td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">曖昧</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td>(ɤ)</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">半広</th>
					<td>ɛː</td>
					<td>ɛ</td>
					<td></td>
					<td>œ</td>
					<td>ɐ</td>
					<td></td>
					<td>ɔ</td>
				</tr>
				<tr>
					<th scope="row">広</th>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td>ɑː</td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</div>

	<div class="table-container">
		<table class="grid-cols-[repeat(7,auto)]">
			<caption class="text-center fw-bolder">鼻母音</caption>
			<thead>
				<tr>
					<th scope="col">＼</th>
					<th scope="col" class="col-span-4">前舌</th>
					<th scope="col" class="col-span-2">後舌</th>
				</tr>
				<tr>
					<th scope="col" class="col-start-2 col-end-4">非円唇</th>
					<th scope="col" class="col-start-4 col-end-6">円唇</th>
				</tr>
				<tr>
					<th scope="col" class="col-start-2">tense</th>
					<th scope="col">lax</th>
					<th scope="col">tense</th>
					<th scope="col">lax</th>
					<th scope="col">tense</th>
					<th scope="col">lax</th>
				</tr>
			</thead>
			<tbody class="[&_td]:font-ipa [&_td]:text-center">
				<tr>
					<th scope="row">狭</th>
					<td>ẽː</td>
					<td>ẽ</td>
					<td>ø̃ː</td>
					<td></td>
					<td>õː</td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">曖昧</th>
					<td></td>
					<td></td>
					<td></td>
					<td>(ɤ̃)</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<th scope="row">広</th>
					<td>ɛ̃ː</td>
					<td>ɛ̃</td>
					<td></td>
					<td>œ̃</td>
					<td></td>
					<td>ɔ̃</td>
				</tr>
			</tbody>
		</table>
	</div>

	<h3>二重母音</h3>

	<div class="table-container">
		<table class="grid-cols-[repeat(5,auto)]">
			<thead>
				<tr>
					<th scope="col" class="col-span-2">＼</th>
					<th scope="col" class="col-span-3">終点</th>
				</tr>
				<tr class="*:font-ipa">
					<th scope="col" class="col-start-3">ɪ</th>
					<th scope="col">ʏ</th>
					<th scope="col">ʊ</th>
				</tr>
			</thead>
			<tbody class="[&_td]:font-ipa [&_td]:text-center">
				<tr>
					<th scope="row">始点</th>
					<th scope="row">半広</th>
					<td>ɛɪ̯</td>
					<td>œʏ̯</td>
					<td></td>
				</tr>
				<tr>
					<th scope="row" class="col-start-2">広</th>
					<td>aɪ̯</td>
					<td></td>
					<td>ɑʊ̯</td>
				</tr>
			</tbody>
		</table>
	</div>

	<h3>説明</h3>
	<p>
		ヴェッセンズラン語の母音には <strong class="italic">tense</strong> と
		<strong class="italic">lax</strong>
		と呼ばれる区別があり、<i>lax</i> 母音は別の母音や単語末に来ることはできない。ただし、曖昧母音の
		<span class="font-ipa">/ɤ/</span> に限っては語末に来ることができる。
	</p>
	<p>二重母音は全て <i>tense</i> 母音である。</p>
	<p>
		<span class="font-ipa">/ɛː/</span> は実際は <span class="font-ipa">[ɛæ̯]</span> のような発音である。
	</p>
	<p>
		<span class="font-ipa">/eː/</span> は実際は <span class="font-ipa">[eː] ~ [ei̯]</span> のような発音である。
	</p>
	<p>
		<span class="font-ipa">/oː/</span> は実際は <span class="font-ipa">[oː] ~ [ou̯]</span> のような発音である。
	</p>
	<p>
		<span class="font-ipa">/øː/</span> は実際は <span class="font-ipa">[øː] ~ [øy̯]</span> のような発音である。
	</p>
	<p>
		<span class="font-ipa">/ɤ/</span> はアクセントの無い音節で
		<span class="font-ipa">/e(ː)/, /ɛ(ː)/</span>
		の異音 (allophone) として現れ、実際の音声は <span class="font-ipa">[ɘ] ~ [ɤ̟]</span> である。
	</p>
	<p>対応する鼻母音も同様。</p>
</section>

<h4 class="text-center my-8 text-3xl text-[red]">工事中...</h4>
