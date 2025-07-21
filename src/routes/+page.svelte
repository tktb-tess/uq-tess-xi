<script lang="ts">
	import TessLogo from '$lib/sfc/tess_logo.svelte';
	import ExtLink from '$lib/sfc/ext_link.svelte';
	import PageTopBtn from '$lib/sfc/page_top_btn.svelte';
	import Spinner from '$lib/sfc/spinner.svelte';
	import type { WordData, Success } from '$lib/types/decl';
	import CardList from '$lib/sfc/cardList.svelte';

	const todayWordF = async (): Promise<Success<WordData>> => {
		const url = '/api/v0/today-word';
		const response = await fetch(url);

		if (!response.ok) {
			return {
				success: false,
				status: response.status,
				message: response.statusText
			};
		}

		const body = await response.json();
		return {
			success: true,
			...body
		};
	};
	const todayWordPromise = $state(todayWordF());
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
	class="h-screen bg-linear-to-br/oklch from-title-s to-title-e flex flex-col gap-6 text-white justify-center overflow-x-clip items-center"
>
	<TessLogo class="h-auto w-[120px] md:w-[240px] lg:w-[360px] 2xl:w-[480px]" fadein />
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
			{#await todayWordPromise}
				<h3>
					<Spinner class="size-6" />
					読み込み中……
				</h3>
			{:then todayWord}
				{#if todayWord.success}
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
					<h3 class="text-[red]">データを取得できませんでした</h3>
					<p class="text-[red]">
						{todayWord.status}: {todayWord.message}
					</p>
				{/if}
			{:catch e}
				<h3 class="text-[red]">データを取得できませんでした</h3>
				<p class="text-[red]">{e}</p>
			{/await}
		</div>
	</section>
	<section aria-label="menu">
		<h2 id="menu">メニュー</h2>
		<CardList
			contents={[
				{ title: '人工言語', desc: '斗琴庭暁響が制作している人工言語について。', href: '/conlang' },
				{ title: 'データ', desc: '言語に関連するデータなど。', href: '/data' },
				{ title: 'その他', desc: 'その他の話題。', href: '/others' }
			]}
		/>
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

	<section aria-labelledby="sougo-link">
		<h2 id="sougo-link">相互リンク</h2>
		<p>敬称略。追加や削除を希望される方は、下記SNSなどより連絡お願いします。</p>
		<ul>
			<li>
				<a href="https://kaeru2193.net" target="_blank" rel="noopener">
					<img
						class="inline align-middle"
						src="https://kaeru2193.net/banner.png"
						width="200"
						height="40"
						alt="之機堂"
					/>
				</a>
				(かえる)
			</li>
		</ul>
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
