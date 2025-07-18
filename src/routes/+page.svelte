<script lang="ts">
	import TessLogo from '$lib/sfc/tess_logo.svelte';
	import ExtLink from '$lib/sfc/ext_link.svelte';
	import PageTopBtn from '$lib/sfc/page_top_btn.svelte';
	import Spinner from '$lib/sfc/spinner.svelte';
	import type { WordData } from './api/v0/today-word/+server';
	

	const todayWordF = async (): Promise<WordData> => {
		const url = '/api/v0/today-word';
		const response = await fetch(url);

		if (!response.ok) {
			return {
				is_success: false,
				status: response.status,
				message: response.statusText
			};
		}

		// await new Promise<void>((resolve) => {
		// 	setTimeout(resolve, 2000);
		// });

		return response.json();
	};
</script>

<svelte:head>
	<meta name="description" content="創作言語など" />
	<!-- OGP -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="悠久肆方体" />
	<meta property="og:description" content="創作言語など" />
	<!-- twitter card -->
	<meta name="twitter:title" content="悠久肆方体" />
	<meta name="twitter:description" content="創作言語など" />
	<title>悠久肆方体</title>
</svelte:head>

<header
	class="min-h-screen bg-linear-to-br/oklch from-title-s to-title-e grid grid-cols-1 text-white gap-y-6 place-content-center place-items-center"
>
	<TessLogo class="w-[200px] lg:w-[300px] h-auto" fadein />
	<h1 class="font-semibold font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
		悠&emsp;久&emsp;肆&emsp;方&emsp;体
	</h1>
</header>

<main
	class="
        container mx-auto bg-slate-50 px-3 min-h-screen
        flex flex-col gap-y-10 py-2
		[&_h2:not(#subtitle)]:text-center [&_h2:not(#subtitle)]:border-b-3 [&_h2:not(#subtitle)]:border-double
    "
>
	<div>
		<h2 id="subtitle" class="text-center my-8">〜ようこそ〜</h2>
		<p class="text-[red] font-semibold text-xl text-center">
			※ただいま大改訂中です。現行のバージョンではここに書かれている内容と大きく異なる可能性があります。
		</p>
		<p>
			わたし、斗琴庭暁響 (とことばあかね)
			が作っている創作言語をはじめとした諸創作物についてをまとめているサイトです。
		</p>
	</div>

	<section aria-labelledby="today-word">
		<h2 id="today-word" class="text-center">今日の単語</h2>
		<div
			class="
				w-full max-w-[720px] mx-auto flex flex-col items-center border border-slate-300 rounded-xl
				[:where(&_*)]:m-0 gap-y-6 py-6 bg-white bg-linear-to-b from-transparent to-black/3 shadow-sm mt-12
			"
		>
			{#await todayWordF()}
				<h3>
					<Spinner class="size-6" />
					読み込み中……
				</h3>
			{:then todayWord}
				{#if todayWord.is_success}
					<h3 class="font-serif font-normal {todayWord.size}">{todayWord.word}</h3>
					{#if todayWord.pron}
						<p class="text-black/60 font-ipa">
							{#if todayWord.pron.includes('/')}
								{todayWord.pron}
							{:else}
								{`/${todayWord.pron}/`}
							{/if}
						</p>
					{/if}
					<p>訳</p>
					<table
						class="
							grid grid-cols-[repeat(2,auto)] place-content-center place-items-center
							[&_:where(thead,tbody,tr)]:contents [&_:where(th,td)]:block gap-5
						"
					>
						<thead>
							<tr>
								<th class="font-normal bg-transparent text-black">品詞</th>
								<th class="font-normal bg-transparent text-black">意味</th>
							</tr>
						</thead>
						<tbody>
							{#each todayWord.translations as translation}
								<tr>
									<td
										class="justify-self-end bg-mnlila text-white rounded-[500px] px-3 text-base/[1.75] border-none"
									>
										{translation.titles.join(', ')}
									</td>
									<td class="justify-self-start border-none bg-transparent"
										>{translation.names.join(', ')}</td
									>
								</tr>
							{/each}
						</tbody>
					</table>
					<p class="self-end me-3"><ExtLink href={todayWord.dic_url}>ZpDIC Online</ExtLink></p>
				{:else}
					<h3>データを取得できませんでした</h3>
					<p>
						{todayWord.status}: {todayWord.message}
					</p>
				{/if}
			{:catch e}
				<h3>データを取得できませんでした</h3>
				<p>{e}</p>
			{/await}
		</div>
	</section>
	<section aria-labelledby="conlang">
		<h2 id="conlang">創作言語</h2>
		<h3>ヴェッセンズラン語 (Vässenzländisķ)</h3>
		<p>
			「もしも古英語の屈折がほとんど残った言語があったら?」というコンセプトでつくられている言語。
			下位世界の地球のヴェッセンズラン島のヴェッセンズラン共和国で話される、複雑な形態変化を維持した屈折語。
			古英語の他、ゲルマン語派の他言語、特にドイツ語やアイスランド語、古ノルド語を参考にしている。
		</p>
		<ul>
			<li><a href="/conlang/vaes">概説</a></li>
			<li><a href="/conlang/vaes/phonology">音韻論</a></li>
			<li><a href="/conlang/vaes/letter-et-pron">文字と発音</a></li>
			<li><a href="/conlang/vaes/swadesh-list">Swadesh List</a></li>
			<li>りんごを食べたい58文 (準備中)</li>
			<li>
				文法
				<ul>
					<li>名詞 (準備中)</li>
					<li><a href="/conlang/vaes/numeral">数詞</a></li>
					<li>動詞 (準備中)</li>
					<li>形容詞 (準備中)</li>
				</ul>
			</li>

			<li><ExtLink href="https://zpdic.ziphil.com/dictionary/633">辞書 (ZpDIC Online)</ExtLink></li>
		</ul>
		<h3><s>ヤズニェル語 (Ásnélnowy, 凍結)</s></h3>
		<p class="font-semibold">
			「まず古語を作り、そこからの音変化を想定して現代語を作る」という方針に変更したため現在制作中断中。
		</p>
		<p>
			最初に作り始めた言語。単語などは基本現実世界に依存しない、ある程度自然言語らしさを求める芸術言語。日本語の直拗音やロシア語の硬音軟音よろしく、ほとんどの子音に硬口蓋化の有無による対立がある。
			文法は日本語やフィンランド語などの膠着語といわれる言語を中心に参考にしている。
		</p>
		<h3>古ヤズニェル語 (?????)</h3>
		<p>
			ヤズニェル語の古語にあたる言語。若干屈折語気味の膠着語の予定。古典ギリシア語、ラテン語、フィンランド語などを参考にする予定。
		</p>
	</section>
	<section aria-labelledby="info">
		<h2 id="info">言語関連のデータ</h2>
		<ul>
			<li><a href="/data/conlang-xcumon">人工言語作成者に50の質問</a></li>
			<li><a href="/data/OE-verb-conj-type" class="link-disabled">古英語の動詞活用まとめ (準備中)</a></li>
			<li>
				<ExtLink href="https://conlang-gacha.tktb-tess.dev">人工言語ガチャ</ExtLink> …日本語圏の人工言語をランダムに1つ表示する。
			</li>
		</ul>
	</section>
	<section aria-labelledby="haimei">
		<h2 id="haimei">頂いた名前</h2>
		<p>他の人工言語作者などから頂いた、その言語での名前を掲載しています。</p>
		<div class="table-container">
			<table class="grid-cols-auto-3">
				<thead>
					<tr>
						<th>言語</th>
						<th>作者</th>
						<th>名</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><ExtLink href="https://kaeru2193.net/phunlang/name/">雰語</ExtLink></td>
						<td>かえる</td>
						<td><span class="font-phun-dot">常代 方累</span> (常代 方累, Xûyâo Zùngwíl)</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
	<section aria-labelledby="misc">
		<h2 id="misc">その他の活動</h2>
		<h3>音楽</h3>
		<p>一応リンクを貼っておきます。断片みたいなのしかないです。</p>
		<ul>
			<li><a href="/others/musik">いくつかの曲</a></li>
			<li><ExtLink href="https://soundcloud.com/tessyrrhaqtluaming">SoundCloud</ExtLink></li>
			<li><ExtLink href="https://www.youtube.com/@tessyrrhaqt">YouTube</ExtLink></li>
		</ul>
		<h3>雑多</h3>
		<ul>
			<li>n次元超立体の命名案 (準備中)</li>
			<li>ジョンソンの立体のcrown jewelsの命名案 (準備中)</li>
			<li><a href="/others/tools">ツール</a></li>
			<li>
				<ExtLink href="https://shuuro.tktb-tess.dev">
					終末式ローマ字 «Syuğmatusǐkiro–mázi»
				</ExtLink><br />
				…舊仮名遣ひと教育ローマ字ベースのアクセント表記を両立した非実用的な日本語のローマ字表記。製作中。
			</li>
			<li><a href="/others/gregorian-chants">グレゴリオ聖歌の音階について</a></li>
			<li><a href="/others/ja-tibetan">日本語 チベット文字表記</a></li>
			<li><a href="/others/license">ライセンス</a></li>
		</ul>
		<h3>メモ</h3>
		<ul>
			<li>
				<ExtLink href="https://gist.github.com/tktb-tess/91f831a1c93d78fe54ad1cec172d08d2">
					Miller–Rabin 素数判定法
				</ExtLink>
			</li>
		</ul>
	</section>
	<section aria-labelledby="sougo-link">
		<h2 id="sougo-link">相互リンク</h2>
	</section>
	<section aria-labelledby="ext-links">
		<h2 id="ext-links">外部リンク</h2>
		<h3>各種SNS</h3>
		<ul>
			<li><ExtLink href="https://x.com/triethylamineq">𝕏witter</ExtLink></li>
			<li><ExtLink href="https://bsky.app/profile/tktb-tess.dev">Bluesky</ExtLink></li>
			<li><ExtLink href="https://misskey.io/@tessy_tktb">Misskey.io</ExtLink></li>
		</ul>
		<h3>その他</h3>
		<ul>
			<li>
				<ExtLink href="https://tesyrrhaqt.hatenablog.com/">はてなブログ (あかねの多目的室)</ExtLink>
			</li>
			<li><ExtLink href="https://rechord.cc/users/triethylamineq">rechord</ExtLink></li>
			<li>
				<ExtLink
					href="https://docs.google.com/spreadsheets/d/1rxeounm1eLGbv_KaIC7LGAdRiBZIWSWZON2EQZz6Y-0/edit?usp=sharing"
				>
					Xenharmonic_calc
				</ExtLink>
				…各平均律の特定音程への近似度合い、特定コンマをテンパーアウトするかどうかの計算ができるスプレッドシート。
			</li>
		</ul>
	</section>
	<h3 class="text-[red] text-center my-8">工事中……</h3>
</main>

<footer class="flex flex-col items-center my-5 px-(--gutter)">
	<p>
		※当サイトで紹介・解説されている言語や文化などは、一部の解説中に出てきたものを除き、すべて著者の創作です。実在は一切しませんのでお気を付けください。
	</p>
	<p>© 2024-2025 Tessyrrhaqt / 斗琴庭暁響</p>
</footer>

<PageTopBtn />
