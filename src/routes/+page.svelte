<script lang="ts">
	import TessLogo from '$lib/tess_logo.svelte';
	import '../app.css';
</script>

<header
	class="min-h-screen bg-gradient-to-b from-mnlila2 to-mnlila grid grid-cols-1 gap-y-6 place-content-center place-items-center"
>
	<TessLogo class="fill-white w-[200px] lg:w-[300px] h-auto" fadein />
	<h1 class="text-white font-semibold font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
		悠　久　肆　方　体
	</h1>
</header>

<main
	class="
        container mx-auto bg-slate-50 px-5 min-h-screen
        [&_section_h2]:text-center [&_section_h2]:border-b [&_section_h2]:mb-4 [&_:where(h2,h3)]:font-serif [&_:where(h2,h3)]:font-medium 
        [&_:where(h2,h3)]:text-mnlila [&_:where(h2)]:text-3xl/10 [&_:where(h3)]:text-2xl
        flex flex-col gap-y-5 py-2
    "
>
	<h2 class="text-center text-mnlila my-8">〜ようこそ〜</h2>
	<p class="text-red-500 font-semibold text-xl text-center">
		※ただいま大改訂中です。現行のバージョンではここに書かれている内容と大きく異なる可能性があります。
	</p>
	<p>
		わたし、斗琴庭暁響（とことばあかね）が作っている創作言語をはじめとした諸創作物についてをまとめているサイトです。
	</p>

	<section>
		<h2 class="text-center">今日の単語</h2>
		<!-- あとで -->
	</section>
	<section>
		<h2 class="">創作言語</h2>
		<h3>ヴェッセンズラン語 (Vässenzländisķ)</h3>
		<p>
			「もしも古英語の屈折がほとんど残った言語があったら？」というコンセプトでつくられている言語。
			下位世界の地球のヴェッセンズラン島のヴェッセンズラン共和国で話される、複雑な形態変化を維持した屈折語。
			古英語の他、ゲルマン語派の他言語、特にドイツ語やアイスランド語、古ノルド語を参考にしている。
		</p>
		<ul>
			<li>概説</li>
			<li>音韻論</li>
			<li>文字と発音</li>
			<li>りんごを食べたい58文（準備中）</li>
			<li>数詞</li>
			<li>辞書 (ZpDIC Online)</li>
		</ul>
		<h3><s>ヤズニェル語 (Ásnélnowy)（凍結）</s></h3>
		<p class="font-semibold">
			「まず古語を作り、そこからの音変化を想定して現代語を作る」という方針に変更したため現在制作中断中。
		</p>
		<p>
			最初に作り始めた言語。単語などは基本現実世界に依存しない、ある程度自然言語らしさを求める芸術言語。日本語の直拗音やロシア語の硬音軟音よろしく、ほとんどの子音に硬口蓋化の有無による対立がある。
			文法は日本語やフィンランド語などの膠着語といわれる言語を中心に参考にしている。
		</p>
		<h3>古ヤズニェル語（?????）</h3>
		<p>
			ヤズニェル語の古語にあたる言語。若干屈折語気味の膠着語の予定。古典ギリシア語、ラテン語、フィンランド語などを参考にする予定。
		</p>
	</section>
	<section>
		<h2>言語関連のデータ</h2>
		<ul>
			<li>人工言語作成者に50の質問</li>
			<li>古英語の動詞活用まとめ（準備中）</li>
			<li>人工言語ガチャ …日本語圏の人工言語をランダムに1つ表示する。</li>
		</ul>
	</section>
	<section>
		<h2>頂いた名前</h2>
		<table
			class="grid [&_:is(thead,tbody,tr)]:contents [&_td]:bg-slate-200 [&_td]:border [&_td]:border-slate-400 [&_td]:px-3 [&_td]:py-1 gap-3 grid-cols-[repeat(2,auto)] place-content-center"
		>
			<thead class="">
				<tr>
					<td class="text-center">言語</td>
					<td class="text-center">名</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>雰語・雰名</td>
					<td>常代 方累 (Xûyâo Zùngwíl)</td>
				</tr>
			</tbody>
		</table>
	</section>
	<section>
		<h2>その他の活動</h2>
		<h3>音楽</h3>
        <p>一応リンクを貼っておきます。断片みたいなのしかないです。</p>
        <ul>
            <li>いくつかの曲</li>
            <li>SoundCloud</li>
            <li>YouTube</li>
        </ul>
		<h3>雑多</h3>
        <ul>
            <li>n次元超立体の命名案（準備中）</li>
            <li>ジョンソンの立体のcrown jewelsの命名案（準備中）</li>
            <li>ツール</li>
            <li>終末式ローマ字 «Syuğmatusǐkiro–mázi» …舊仮名遣ひと教育ローマ字ベースのアクセント表記を両立した非実用的な日本語のローマ字表記。製作中。</li>
            <li>グレゴリオ聖歌の音階について</li>
            <li>日本語 チベット文字表記</li>
            <li>当サイトで使用しているフォントのライセンス</li>
        </ul>
		<h3>メモ</h3>
        <ul>
            <li>Miller–Rabin 素数判定法</li>
        </ul>
	</section>
	<section>
		<h2>外部リンク</h2>
		<h3>各種SNS</h3>
        <ul>
            <li>𝕏witter</li>
            <li>Bluesky</li>
            <li>Misskey.io</li>
        </ul>
		<h3>その他</h3>
        <ul>
            <li>はてなブログ（あかねの多目的室）</li>
            <li>rechord</li>
            <li>Xenharmonic_calc …各平均律の特定音程への近似度合い、特定コンマをテンパーアウトするかどうかの計算ができるスプレッドシート。</li>
        </ul>
	</section>
	<p class="font-serif font-semibold text-red-600 text-center text-xl">工事中…</p>
	
</main>

<footer class="flex flex-col items-center my-5">
    <p>※当サイトで紹介・解説されている言語や文化などは、一部の解説中に出てきたものを除き、すべて著者の創作です。実在は一切しませんのでお気を付けください。</p>
	<p class="">© 2025 Tessyrrhaqt / 斗琴庭暁響</p>
</footer>

<style>
    
</style>
