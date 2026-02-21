<script lang="ts">
  import ExtLink from '$lib/components/ExtLink.svelte';
  import XSection from '$lib/components/XSection.svelte';
  const {}: {} = $props();
</script>

<XSection title="音楽">
  <p>一応リンクを貼っておきます。断片みたいなのしかないです。</p>
  <ul>
    <li><a href="/others/musik">いくつかの曲</a></li>
    <li><ExtLink href="https://soundcloud.com/tessyrrhaqtluaming">SoundCloud</ExtLink></li>
    <li><ExtLink href="https://www.youtube.com/@tessyrrhaqt">YouTube</ExtLink></li>
  </ul>
</XSection>
<XSection title="雑多">
  <ul>
    <li><a aria-disabled="true">n次元超立体の命名案 (準備中)</a></li>
    <li><a aria-disabled="true">ジョンソンの立体のcrown jewelsの命名案 (準備中)</a></li>
    <li><a href="/others/tools">ツール</a></li>
    <li>
      <ExtLink href="https://shuuro.tktb-tess.dev">終末式ローマ字 «Syuğmatusǐkiro–mázi»</ExtLink><br
      />
      …舊仮名遣ひと教育ローマ字ベースのアクセント表記を両立した非実用的な日本語のローマ字表記。製作中。
    </li>
    <li><a href="/others/gregorian-chants">グレゴリオ聖歌の音階について</a></li>
    <li><a href="/others/ja-tibetan">日本語 チベット文字表記</a></li>
    <li><a href="/others/license">ライセンス</a></li>
    <li>
      <a href="/like-programmer">
        表示するだけでなんかすごいハッカーみたいなことやってるように見えるページ
      </a>
    </li>
    <li>
      <ExtLink href="https://apps.tktb-tess.dev/">τὰ συστήματα (作ったアプリたち)</ExtLink>
    </li>
  </ul>
</XSection>
<XSection title="メモ">
  <ul>
    <li>
      <a href="/others/miller-rabin">Miller–Rabin 素数判定法</a>
    </li>
  </ul>
</XSection>
