<script lang="ts">
  import ExtLink from '$lib/components/ext_link.svelte';
  import PageTopBtn from '$lib/components/page_top_btn.svelte';
  import CardList from '$lib/components/cardList.svelte';
  import TodayWord from './todayWord.svelte';
  import GithubMark from '$lib/components/github-mark.svelte';
  import XSection from '$lib/components/XSection.svelte';
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  import ToggleColorSchemeBtn from '$lib/components/toggle-color-scheme-btn.svelte';
  import TopHeader from '$lib/components/TopHeader.svelte';
  import XTable from '$lib/components/XTable.svelte';
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

<TopHeader />

<main>
  <div>
    <div class="m-2 flex justify-end">
      <ToggleColorSchemeBtn />
    </div>
    <h2 id="subtitle">〜ようこそ〜</h2>
    <p>
      ※ただいま大改訂中です。現行のバージョンではここに書かれている内容と大きく異なる可能性があります。
    </p>
    <p>
      わたし、斗琴庭暁響 (とことばあかね)
      が作っている創作言語をはじめとした諸創作物についてをまとめているサイトです。
    </p>
  </div>

  <XSection title="今日の単語">
    <TodayWord />
  </XSection>
  <XSection title="メニュー">
    <CardList
      contents={[
        { title: '人工言語', desc: '斗琴庭暁響が制作している人工言語について。', href: '/conlang' },
        { title: 'データ', desc: '言語に関連するデータなど。', href: '/data' },
        { title: 'その他', desc: 'その他の話題。', href: '/others' },
      ]}
    />
  </XSection>
  <XSection title="頂いた名前">
    <p>他の人工言語作者などから頂いた、その言語での名前を掲載しています。</p>
    <div class="table-container">
      <table>
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
            <td><span lang="x-v3-karphnpn">常代 方累</span> (常代 方累, Xûyâo Zùngwíl)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </XSection>
  <XSection title="相互リンク">
    <p>敬称略。追加や削除を希望される方は、下記SNSなどより連絡お願いします。</p>
    <ul>
      <li>
        <ExtLink href="https://kaeru2193.net" noIcon class="no-underline">
          <img
            class="inline-block m-0"
            src="https://kaeru2193.net/banner.png"
            width="200"
            height="40"
            alt="之機堂"
          />
        </ExtLink>
        (かえる)
      </li>
    </ul>
  </XSection>
  <XSection title="外部リンク">
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
  </XSection>
  <h3 class="ctext-caution text-center my-8">工事中……</h3>
</main>

<footer>
  <p>
    ※当サイトで紹介・解説されている言語や文化などは、一部の解説中に出てきたものを除き、すべて著者の創作です。実在は一切しませんのでお気を付けください。
  </p>
  <p>© 2024-2026 Tessyrrhaqt / 斗琴庭暁響</p>
  <div class="__github-icon">
    <ExtLink
      href="https://github.com/tktb-tess/uq-tess-xi"
      title="Link to the GitHub Repository"
      class="any-hover:opacity-60 transition-opacity"
      noIcon
    >
      <GithubMark class="size-6 inline-block" />
    </ExtLink>
  </div>
</footer>

<div class="h-6"></div>

<PageTopBtn />

<style lang="postcss">
  @reference '../app.css';
  @layer components {
    main {
      @apply mx-auto max-w-7xl shadow-sm l:shadow-black/15 d:shadow-white/15 [&_:where(h2)]:text-center;
    }

    footer {
      @apply text-center;

      > .__github-icon {
        @apply block mt-3;
      }
    }
  }
</style>
