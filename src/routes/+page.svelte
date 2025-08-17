<script lang="ts">
	import ExtLink from '$lib/sfc/ext_link.svelte';
	import PageTopBtn from '$lib/sfc/page_top_btn.svelte';
	import CardList from '$lib/sfc/cardList.svelte';
	import TodayWord from './todayWord.svelte';
	import GithubMark from '$lib/sfc/github-mark.svelte';
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import { innerWidth } from 'svelte/reactivity/window';
	import UqTessLogo_2 from '$lib/sfc/uq-tess-logo-2.svelte';

	const { data: todayWord } = $props();

	const Title = $derived.by(() => {
		if (innerWidth.current && innerWidth.current < 768) {
			return PUBLIC_SITE_NAME.split('').join('\x20');
		} else {
			return PUBLIC_SITE_NAME.split('').join('\u2003');
		}
	});
</script>

<svelte:head>
	<meta name="description" content="創作言語など" />
	<!-- OGP -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={PUBLIC_SITE_NAME} />
	<meta property="og:description" content="創作言語など" />
	<!-- twitter card -->
	<meta name="twitter:title" content={PUBLIC_SITE_NAME} />
	<meta name="twitter:description" content="創作言語など" />
	<title>{PUBLIC_SITE_NAME}</title>
</svelte:head>

<header
	class="h-screen bg-linear-to-br/oklch from-title-s to-title-e flex flex-col gap-6 text-white justify-center overflow-x-clip items-center"
>
	<UqTessLogo_2
		class="fill-current block size-40 md:size-55 lg:size-85 2xl:size-115 animate-[slide-in_3.5s_cubic-bezier(0,1,1,1),fade-in_3.5s_linear]"
	/>
	<h1 class="font-semibold font-serif text-5xl lg:text-6xl xl:text-7xl text-center">
		{Title}
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
		<p class="text-red-600 font-semibold text-xl text-center">
			※ただいま大改訂中です。現行のバージョンではここに書かれている内容と大きく異なる可能性があります。
		</p>
		<p>
			わたし、斗琴庭暁響 (とことばあかね)
			が作っている創作言語をはじめとした諸創作物についてをまとめているサイトです。
		</p>
	</div>

	<section aria-labelledby="today-word">
		<h2 id="today-word" class="text-center">今日の単語</h2>
		<TodayWord {todayWord} />
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
			<li><ExtLink href="https://youtube.com/@tessyrrhaqt">Youtube</ExtLink></li>
			<li><ExtLink href="https://rechord.cc/users/triethylamineq">rechord</ExtLink></li>
			<li><ExtLink href="https://migdal.jp/tessyrrhaqt">Migdal</ExtLink></li>
			<li><ExtLink href="https://github.com/tktb-tess">GitHub</ExtLink></li>
			<li>
				<ExtLink href="https://tktb-tess.github.io/"
					>GitHub Pages (旧ホームページ, 現リンク集)</ExtLink
				>
			</li>
			<li>
				<ExtLink href="https://apps.tktb-tess.dev/">τὰ συστήματα (作ったアプリたち)</ExtLink>
			</li>
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
	<h3 class="text-red-600 text-center my-8">工事中……</h3>
</main>

<footer class="flex flex-col items-center my-5 px-3">
	<p>
		※当サイトで紹介・解説されている言語や文化などは、一部の解説中に出てきたものを除き、すべて著者の創作です。実在は一切しませんのでお気を付けください。
	</p>
	<p>© 2024-2025 Tessyrrhaqt / 斗琴庭暁響</p>
	<a href="https://github.com/tktb-tess/uq-tess-xi" target="_blank" rel="noopener" aria-label="Link to the GitHub Repository">
		<GithubMark class="any-hover:opacity-60 size-6 transition-opacity" />
	</a>
</footer>

<PageTopBtn />
