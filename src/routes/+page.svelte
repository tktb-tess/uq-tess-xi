<svelte:options runes={true} />

<script lang="ts">
  import ExtLink from '$lib/components/ExtLink.svelte';
  import PageTopBtn from '$lib/components/PageTopBtn.svelte';
  import CardList from './CardList.svelte';
  import TodayWord from './todayWord.svelte';
  import XSection from '$lib/components/XSection.svelte';
  import ToggleColorSchemeBtn from '$lib/components/ToggleColorSchemeBtn.svelte';
  import TopHeader from './TopHeader.svelte';
  import LinkList from './LinkList.svelte';
  import MyFooter from '$lib/components/MyFooter.svelte';
</script>

<TopHeader />

<main>
  <div>
    <div class="m-2 flex justify-end">
      <ToggleColorSchemeBtn class="btn-theme-1 leading-none" />
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
        { title: '創作言語', desc: '斗琴庭暁響が制作している人工言語について。', href: '/conlang' },
        { title: 'データ', desc: '言語に関連するデータなど。', href: '/data' },
        { title: 'その他', desc: 'その他の話題。', href: '/others' },
      ]}
    />
  </XSection>
  <XSection title="頂いた名前">
    <p>他の人工言語作者などから頂いた、その言語での名前を掲載しています。</p>
    <table style:--rows={2} style:--cols={3}>
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
          <td>
            <div>
              <span lang="x-v3-karphnpn">常代 方累</span> (常代 方累, Xûyâo Zùngwíl)
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </XSection>
  <XSection title="相互リンク">
    <p>敬称略。追加や削除を希望される方は、下記SNSなどより連絡お願いします。</p>
    <ul class="mutual-links">
      <li>
        <ExtLink href="https://kaeru2193.net" noIcon class="no-underline inline-block">
          <img src="https://kaeru2193.net/banner.png" width="200" height="40" alt="之機堂" />
        </ExtLink>
      </li>
    </ul>
  </XSection>
  <XSection title="外部リンク">
    <h3>各種SNS</h3>
    <LinkList
      links={[
        ['https://x.com/triethylamineq', '𝕏witter'],
        ['https://bsky.app/profile/tktb-tess.dev', 'Bluesky'],
        ['https://misskey.io/@tessy_tktb', 'Misskey.io'],
      ]}
    />
    <h3>その他</h3>
    <LinkList
      links={[
        ['https://tesyrrhaqt.hatenablog.com/', 'はてなブログ (あかねの多目的室)'],
        ['https://youtube.com/@tessyrrhaqt', 'Youtube'],
        ['https://rechord.cc/users/triethylamineq', 'rechord'],
        ['https://migdal.jp/tessyrrhaqt', 'Migdal'],
        ['https://github.com/tktb-tess', 'GitHub'],
        ['https://tktb-tess.github.io/', 'GitHub Pages (旧ホームページ, 現リンク集)'],
        ['https://apps.tktb-tess.dev/', 'τὰ συστήματα (作ったアプリたち)'],
        [
          'https://docs.google.com/spreadsheets/d/1rxeounm1eLGbv_KaIC7LGAdRiBZIWSWZON2EQZz6Y-0/edit?usp=sharing',
          'Xenharmonic_calc',
          '…各平均律の特定音程への近似度合い、特定コンマをテンパーアウトするかどうかの計算ができるスプレッドシート。',
        ],
      ]}
    />
  </XSection>
  <h3 class="ctext-caution text-center my-8">工事中……</h3>
</main>

<MyFooter />
<PageTopBtn />

<style lang="postcss">
  @reference '../app.css';
  @layer components {
    main {
      @apply mx-auto max-w-7xl border-l border-r border-b cborder-border-light;

      :global(:where(h2)) {
        @apply text-center ps-0;
      }
    }

    .mutual-links {
      @apply list-none p-0 flex flex-wrap gap-2;

      > li {
        @apply block;
      }

      img {
        @apply inline-block m-0;
      }
    }
  }
</style>
