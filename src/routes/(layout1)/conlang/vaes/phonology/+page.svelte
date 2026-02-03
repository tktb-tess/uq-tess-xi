<script lang="ts">
  import XTable from '$lib/components/XTable.svelte';
</script>

<section aria-labelledby="legend">
  <h2 id="legend">凡例</h2>

  <ul>
    <li>以下の説明では、音声記号にはIPA（国際音声記号）を基にした音声記号を使用する。</li>
    <li>
      <span class="font-ipa">“[]”</span> で囲ったものがIPAの精密な音声表記で、<span class="font-ipa"
        >“//”</span
      > で囲ったものはヴェッセンズラン語の音韻論に準じた音素表記である。
    </li>
  </ul>
</section>

<section aria-labelledby="consonant">
  <h2 id="consonant">子音</h2>

  <XTable
    headRows={1}
    class="[&_:where(td:not(:first-child):not(:nth-child(2)))]:font-ipa [&_:where(td:first-child,td:nth-child(2))]:font-semibold"
    data={[
      ['＼', '', '両唇', '唇歯', '歯, 歯茎', '後部歯茎, そり舌, 硬口蓋', '軟口蓋', '声門'],
      ['破裂音', '有気', 'pʰ', '', 'tʰ', '', 'kʰ', ''],
      ['', '有声', 'b', '', 'd', '', 'ɡ', ''],
      ['', '喉頭化', 'ɓ', '', 'tʼ', '', 'kʼ', ''],
      ['摩擦音', '無声中央', '', 'f', 's', 'ɕ', 'x', ''],
      ['', '有声中央', '', '', 'z', 'ʑ', '', 'ɦ'],
      ['', '無声側面', '', '', 'ɬ', '', '', ''],
      ['鼻音', '', 'm', '', 'n', '', 'ŋ', ''],
      ['はじき音', '', '', '', '', 'ɽ', '', ''],
      ['接近音', '中央', '', 'ʋ', '', 'j', '', ''],
      ['', '側面', '', '', 'l', '', '', ''],
    ]}
  />

  <h3>説明</h3>
  <ul>
    <li>破裂音は有声・有気・喉頭化の3系列の対立がある。喉頭化音は語頭には現れない。</li>
    <li>
      有気破裂音 <span class="font-ipa">/pʰ/, /tʰ/, /kʰ/</span> の後ろに流音・接近音
      <span class="font-ipa">/l/, /ɽ/, /j/, /ʋ/</span>
      が後続する時、後続する音は無声音化する (<span class="font-ipa">[pɽ̊]</span> etc.)。
    </li>
    <li>
      喉頭化音は両唇音は入破音 (<span class="font-ipa">[ɓ]</span>)、歯茎音と軟口蓋音は放出音 (<span
        class="font-ipa">[tʼ], [kʼ]</span
      >) が標準であるが、 方言や年代によって両者の間で揺れる。
    </li>
    <li>
      <span class="font-ipa">/ð/</span> は歯間〜歯接近音 <span class="font-ipa">[ð̪͆˕ ~ ð̞]</span> である。
    </li>
    <li>
      <span class="font-ipa">/ɽ/</span>
      は前後の環境により実際の発音が変わり、また前後の子音の発音を変えることもある。
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
          <span class="font-ipa">/ɪ/, /iː/</span> に挟まれた環境では
          <span class="font-ipa">/ɽ/</span>
          は歯茎はじき音 <span class="font-ipa">[ɾ]</span> のようになる。
        </li>
      </ul>
    </li>
    <li>
      <span class="font-ipa">/x/</span> は実際は前部軟口蓋〜口蓋垂の間で変動する。<span
        class="font-ipa">[x̟ ~ χ]</span
      >
    </li>
  </ul>
</section>

<section aria-labelledby="vowel">
  <h2 id="vowel">母音</h2>
  <h3 class="ms-1">単母音</h3>

  <XTable
    headRows={3}
    caption="口母音"
    class="[&_:where(td:not(:first-child))]:font-ipa [&_:where(td:first-child)]:font-semibold"
    data={[
      ['＼', '前舌', '', '中舌', '', '中舌', '後舌', ''],
      ['', '非円唇', '', '円唇', '', '非円唇', '円唇', ''],
      ['', 'tense', 'lax', 'tense', 'lax', 'lax', 'tense', 'lax'],
      ['狭', 'iː', 'ɪ', 'yː', 'ʏ', '', 'uː', 'ʊ'],
      ['半狭', 'eː', 'e', 'øː', '', '', 'oː', ''],
      ['半広', 'ɛː', 'ɛ', '', 'œ', '', '', 'ɔ'],
      ['広', '', '', '', '', 'ä', '', 'ɑː'],
    ]}
  />

  <XTable
    caption="鼻母音"
    headRows={2}
    class="[&_:where(td:not(:first-child))]:font-ipa [&_:where(td:first-child)]:font-semibold"
    data={[
      ['＼', '前舌', '中舌', '後舌'],
      ['', '非円唇', '円唇', '円唇'],
      ['狭', 'ẽː', 'ø̃ː', 'õː'],
      ['広', 'ɛ̃ː', '', 'ɑ̃ː'],
    ]}
  />

  <p>※鼻母音は全て <em>tense</em> 母音である。</p>

  <h3>二重母音</h3>

  <XTable
    caption="口母音"
    headRows={1}
    class="[&_:where(:is(td,th):not(:first-child))]:font-ipa [&_:where(td:first-child)]:font-semibold"
    data={[
      ['核母音 ＼ オフグライド', 'ɪ', 'ʏ', 'ʊ'],
      ['半広', 'ɛɪ̯', 'œʏ̯', ''],
      ['広', 'aɪ̯', '', 'ɑʊ̯'],
    ]}
  />

  <XTable
    caption="鼻母音"
    headRows={1}
    class="[&_:where(:is(td,th):not(:first-child))]:font-ipa [&_:where(td:first-child)]:font-semibold"
    data={[
      ['核母音 ＼ オフグライド', 'ɪ', 'ʏ', 'ʊ'],
      ['半広', 'ɛ̃ɪ̯̃', 'œ̃ʏ̯̃', ''],
      ['広', 'ãɪ̯̃', '', 'ɑ̃ʊ̯̃'],
    ]}
  />

  <h3>説明</h3>
  <ul>
    <li>
      ヴェッセンズラン語の母音には <strong class="italic">tense</strong> と
      <strong class="italic">lax</strong>
      と呼ばれる区別があり、<i>lax</i>
      母音は別の母音や単語末に来ることはできない。ただし、曖昧母音の
      <span class="font-ipa">/ə/</span> に限っては語末に来ることができる。なお、二重母音は全て
      <i>tense</i> 母音である。
    </li>
    <li>
      <span class="font-ipa">/ɛː/</span> は実際は <span class="font-ipa">[ɛæ̯]</span> のような発音である。
    </li>
    <li>
      <span class="font-ipa">/eː/</span> は実際は <span class="font-ipa">[eː] ~ [ei̯]</span> のような発音である。
    </li>
    <li>
      <span class="font-ipa">/oː/</span> は実際は <span class="font-ipa">[oː] ~ [ou̯]</span> のような発音である。
    </li>
    <li>
      <span class="font-ipa">/øː/</span> は実際は <span class="font-ipa">[øː] ~ [øy̯]</span> のような発音である。
    </li>
    <li>
      <span class="font-ipa">/ə/</span> はアクセントの無い音節で
      <span class="font-ipa">/e(ː)/, /ɛ(ː)/, /ɔ/, /oː/</span>
      の異音 (allophone) として現れ、実際の音声は <span class="font-ipa">[ɘ]</span> である。 対応する鼻母音も同様。
    </li>
  </ul>
</section>

<h4 class="text-center my-8 text-3xl text-danger">工事中...</h4>
