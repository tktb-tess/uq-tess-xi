<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import ExtLink from '$lib/sfc/ext_link.svelte';
	const ogTitle = 'Vässenzländisķ りんご文',
		ogDesc = 'りんご文です。';
</script>

<svelte:head>
	<meta name="description" content={ogDesc} />
	<!-- OGP -->
	<meta property="og:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
	<meta property="og:description" content={ogDesc} />
	<!-- twitter card -->
	<meta name="twitter:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
	<meta name="twitter:description" content={ogDesc} />
	<title>{ogTitle} | {PUBLIC_SITE_NAME}</title>
</svelte:head>

<h2 class="my-8 text-center">りんごを食べたい58文</h2>
<div>
	<p>
		以下は、ざすろん氏により作成された
		<ExtLink href="https://zaslon.info/langcontents/1450/">りんごを食べたい58文</ExtLink>
		のヴェッセンズラン語による翻訳のリストである。
	</p>
	<p>なんか58文より多い気がするが気にしない。</p>
</div>

<ol class="ms-2 [&_p]:m-0 [&>li:not(:last-child)]:mb-4">
	<li>
		<p>私はりんごを食べる。</p>
		<p>Iķ eet änn apbel.</p>
		<p>
			説明: iķ は1人称単数の人称代名詞、eet は eatan「食べる」の1人称単数現在、änn は不定冠詞 an
			の男性対格形。
		</p>
	</li>
	<li>
		<p>私はりんごを食べた。</p>
		<p>Iķ eat änn apbel.</p>
		<p>説明: eat は eatan の1人称単数過去。</p>
	</li>
	<li>
		<p>彼はりんごを食べている。</p>
		<p>Hee iss änn abpel eatend.</p>
		<p>
			説明: iss はväzan動詞(コピュラ、英語のbe動詞に相当するもの)の3人称単数現在。eatend は eatan
			の現在分詞。現在分詞 + väzan で「～している」の意味を表す。
		</p>
	</li>
	<li>
		<p>彼女はりんごを食べ終わっている。</p>
		<p>Hew haðð änn apbel ģyeaten.</p>
		<p>
			説明: haðð は hapban の3人称単数現在形。ģyeaten は eatan の過去分詞。hapban +
			過去分詞で現在完了形を作り、「(すでに)～してしまった」等を意味する。
		</p>
	</li>
	<li>
		<p>彼女はりんごを食べ終わっていた。</p>
		<p>Hew hädd änn apbel ģyeaten.</p>
		<p>説明: hädd は hapban の3人称単数過去形。</p>
	</li>
	<li>
		<p>私の妻はりんごを食べたことがある。</p>
		<p>Mąi vaiv haðð änn apbel ģyeaten.</p>
		<p></p>
	</li>
	<li>
		<p>私の妻はりんごを毎日食べる。</p>
		<p>Mąi vaiv ietð jalķdäģ änn apbel.</p>
		<p>説明: jalķdäģ「毎日」。習慣を表す文章は通常現在形である。</p>
	</li>
	<li>
		<p>私と私の妻は昨日りんごを食べた。</p>
		<p>Mąi vaiv and iķ eatað jystrędäģ änn apbel.</p>
		<p></p>
	</li>
	<li>
		<p>私と私の妻は6日前にりんごを食べた。</p>
		<p>Mąi vaiv and iķ eatað six dagas agan änn apbel.</p>
		<p></p>
	</li>
	<li>
		<p>彼らは明日りんごを食べる。</p>
		<p>Huy villað tumorgenn änn apbel eatan.</p>
		<p></p>
	</li>
	<li>
		<p>彼らは6日後にりんごを食べる。</p>
		<p>Huy villað baft six dagum änn apbel eatan.</p>
		<p></p>
	</li>
	<li>
		<p>彼女らは3日間りんごを食べている。(食事としてりんごだけを食べている)</p>
		<p>Huy sind ðrau dagas lang änlaiķ apblas eatend.</p>
		<p></p>
	</li>
	<li>
		<p>彼女らはりんごを5分間食べ続けている。(りんごを食べる所要時間に5分かかっている)</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>彼女らはりんごを5分で食べ終えた。(5分かかって食べ、現在は食べ終わっている)</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>彼は常にりんごを食べている。(四六時中ずっとりんごを食べている)</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>りんごが3つある。</p>
		<p>Ðjar sind(licķað) ðrau apblas.</p>
		<p>
			説明: ðjar + (väzan または licķan) + S (+ 場所を示す語句) で「Sが (～に)
			ある」という意味の文になる。
			動詞はSの人称に合わせる。
		</p>
	</li>
	<li>
		<p>りんご達がテーブルの上にある。</p>
		<p>On ðan bjodd sind apblas.</p>
		<p>説明:</p>
	</li>
	<li>
		<p>誰かがあのりんごを食べてしまった。(その結果、あのりんごは今はない)</p>
		<p>Natilķ haðð ðänn apbel ģyeaten.</p>
		<p></p>
	</li>
	<li>
		<p>誰かがこのりんごを食べそうだ。(推量)</p>
		<p>Natilķ vill ðes apbel eatan.</p>
		<p></p>
	</li>
	<li>
		<p>誰かがこのりんご、そのりんご、あのりんごを食べたそうだ。(伝聞)</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>りんごがひとつもない。</p>
		<p>Ðjar ne’sind nänn apblas naght.</p>
		<p>
			説明:
			ヴェッセンズラン語は否定呼応を行う言語である。否定の意味を持つ語を2つ以上つけても「否定の否定」にはならず、否定の強調になる。ne’sind
			は否定縮約動詞 n’äzan の3人称単数現在形。他に否定冠詞 nan の複数主格形 nänn と否定の副詞 naght
			が付いて否定が強調されている。
		</p>
	</li>
	<li>
		<p>私はりんごを食べない。</p>
		<p>Iķ eet änn apbel naght.</p>
		<p></p>
	</li>
	<li>
		<p>私はりんごを食べられない。(りんごがないので状況的に食べられない)</p>
		<p>Iķ kan änn apbel naght eatan.</p>
		<p></p>
	</li>
	<li>
		<p>私はりんごを床に落とした。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>りんごが床に落ちた。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>りんごは食べられない。(りんごの性質として、可食でなくなった)</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>私はりんごを食べたい。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>私はりんごを買いたい。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>このりんごは汚い。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>このりんごは綺麗ではない。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>あのりんごは食べられそうだ。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>あのりんごはまさに食べられようとしている。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>あのりんごは食べることが可能そうだ。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>あれはりんごではない。</p>
		<p>Ðat n’iss an apbel naght.</p>
		<p>説明:</p>
	</li>
	<li>
		<p>これはりんごではなくみかんだ。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>あなたはみかんを食べるか?</p>
		<p>Ietst ðaw änn orangan?</p>
		<p>説明: 主語と動詞を入れ替えれば疑問文となる。</p>
	</li>
	<li>
		<p>はい、私はみかんを食べます。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>あなたはみかんを食べないのですか?</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>ええ、私はみかんを食べません。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>あなたはみかんを食べたかった。ですよね?</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>いいえ、私はみかんを食べたくはありません。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>あなたはりんごもみかんも食べないのですか?</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>いや、私はりんごを食べます。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>私はみかんを食べない。だから、みかんは食べられない。(受け身の否定)</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>りんごは食べることができない。なぜなら、りんごは綺麗ではないから。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>りんごは汚い。一方で、みかんは綺麗だ。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>みかんを食べましょうよ? (勧誘)</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>いいえ、お断りします。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>あそこでみかんを食べろ。りんごは食べるな。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>りんごを頂いても宜しいですか? みかんは差し上げます。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>私は「りんごは食べるな、みかんを食べろ」と言った。</p>
		<p>»Eat nänn apbel naght, agh änn orangan,« quað iķ.</p>
		<p>
			説明: 引用文自体を第一要素と捉え、V2語順なので動詞 quað (quäðan「～と言う」の過去一人称単数形)
			が次に来る。
		</p>
	</li>
	<li>
		<p>あなたはりんごを食べろと言うのですか?</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>貴様はりんごを食べたいと言った。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>私はりんごを食べたいと言った覚えがない。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>あなたは確か「私はりんごを食べたい」と言ったはずだ。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>私はもしかしたらそう言ったかもしれない。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>あなたは絶対に私に対して「りんごを食べたい」と言った。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>彼は私にりんごを食べさせる。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>彼は私にりんごを食べるように命じた。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>彼が私にりんごを食べさせてくれた。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>みかんは私に食べられていない。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>りんごは彼によって私に食べさせられた。</p>
		<p></p>
		<p></p>
	</li>
	<li>
		<p>ここには何もない。</p>
		<p>Nänn ne’sind naght.</p>
		<p>説明:</p>
	</li>
</ol>

<p class="text-[red] text-xl text-center my-6">工事中……</p>

<style>
	ol p:nth-child(2)::before {
		content: '\2014\2014';
		margin-inline-end: 0.25rem;
	}
</style>
