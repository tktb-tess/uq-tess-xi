<script lang="ts">
  import { PUBLIC_SITE_NAME } from '$env/static/public';
  import ExtLink from '$lib/components/ext_link.svelte';
  const ogTitle = '創作言語';
  const ogDesc = 'こんらんぐ！';
</script>



<h2 class="my-8 text-center" id="conlang">創作言語</h2>

<section aria-labelledby="vaes">
  <h2 class="border-b-3 border-double ps-1" id="vaes">ヴェッセンズラン語 (Vässenzländisķ)</h2>
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
</section>
<section aria-labelledby="jaes">
  <h2 class="border-b-3 border-double ps-1" id="jaes"><s>ヤズニェル語 (Ásnélnowy, 凍結)</s></h2>
  <p class="font-semibold">
    「まず古語を作り、そこからの音変化を想定して現代語を作る」という方針に変更したため現在制作中断中。
  </p>
  <p>
    最初に作り始めた言語。単語などは基本現実世界に依存しない、ある程度自然言語らしさを求める芸術言語。日本語の直拗音やロシア語の硬音軟音よろしく、ほとんどの子音に硬口蓋化の有無による対立がある。
    文法は日本語やフィンランド語などの膠着語といわれる言語を中心に参考にしている。
  </p>
</section>
<section aria-labelledby="old-jaes">
  <h2 class="border-b-3 border-double ps-1" id="old-jaes">古ヤズニェル語 (?????)</h2>
  <p>
    ヤズニェル語の古語にあたる言語。若干屈折語気味の膠着語の予定。古典ギリシア語、ラテン語、フィンランド語などを参考にする予定。
  </p>
</section>
