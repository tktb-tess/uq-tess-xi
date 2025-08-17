<script lang="ts">
	import { PUBLIC_SITE_NAME } from '$env/static/public';
	import Katex from '$lib/sfc/katex.svelte';

	const ogTitle = 'Miller–Rabin 素数判定法';
	const ogDesc = '確率的素数判定法';
</script>

<svelte:head>
	<meta name="description" content={ogDesc} />
	<!-- OGP -->
	<meta property="og:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
	<meta property="og:description" content={ogDesc} />
	<!-- twitter card -->
	<meta name="twitter:title" content="{ogTitle} | {PUBLIC_SITE_NAME}" />
	<meta name="twitter:description" content={ogDesc} />
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css"
		integrity="sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP"
		crossorigin="anonymous"
	/>
	<title>{ogTitle} | {PUBLIC_SITE_NAME}</title>
</svelte:head>

<h2 class="text-center my-8">{ogTitle}</h2>
<section aria-labelledby="pree">
	<h2 class="border-b-3 border-double ps-1" id="pree">前提知識</h2>
	<p>
		<Katex math="p" /> を奇素数とする。フェルマーの小定理より、 <Katex math="p" /> と互いに素な正整数
		<Katex math="a" /> について
	</p>
	<Katex math={`a^{p-1} \\equiv 1 \\pmod p \\qquad (1)`} displayMode />
	<p>である。</p>
	<p>
		<Katex math="p-1" /> を <Katex math="2" /> で割れるだけ割って <Katex math={`2^{s} d`} /> と表す。ただし
		<Katex math="s" /> は正整数、 <Katex math="d" /> は奇数である。上の式は
	</p>
	<Katex math={`a^{2^s d} \\equiv 1 \\pmod p \\qquad (2)`} displayMode />
	<p>と表せる。</p>
	<p>このとき、次の定理が成り立つ。</p>
	<div class="bg-sky-50 rounded-lg border border-black/20 px-3 flow-root pt-3 mb-3">
		<h3>定理①</h3>
		<p>各変数を上のように定義したとき、</p>

		<Katex
			math={`\\exists r\\in \\mathbb{Z}(0 \\le r \\le s-1) \\ \\ a^{2^r d} \\equiv {-1} \\pmod p \\qquad \\mathrm{(a)}`}
			displayMode
		/>

		<p>または</p>
		<Katex math={`a^d \\equiv 1 \\pmod p \\qquad \\mathrm{(b)}`} displayMode />
		<p>が成り立つ。</p>
	</div>

	<p>以下これを示す。</p>

	<div class="bg-fuchsia-50 rounded-lg border border-black/20 px-3 flow-root pt-3 mb-3">
		<h3>証明</h3>
		<p><Katex math={`a^{2^{s-1} d} \\pmod p`} /> の値について考える。</p>
		<p>
			<Katex math={`a^{2^s d}`} /> の平方根なので、 <Katex math="(2)" /> よりこれは <Katex
				math="1"
			/> または <Katex math="-1" /> と合同である。
		</p>
		<p><Katex math="-1" /> と合同なら <Katex math={`\\mathrm{(a)}`} /> が成立。</p>
		<p>
			<Katex math="1" /> と合同なら平方根 <Katex math={`a^{2^{s-2} d}`} /> を再びとり、同じように考える。
		</p>
		<p>
			<Katex math="0 \le r \le s-1" /> の間で <Katex math="-1" /> と合同なものがあれば <Katex
				math={`\\mathrm{(a)}`}
			/> が成立する。
		</p>
		<p>
			そういうものがない場合、 <Katex math={`a^{2^0 d} \\equiv a^d \\equiv 1 \\pmod p`} /> となるので
			<Katex math={`\\mathrm{(b)}`} /> が成立。
		</p>
		<p class="text-end">証明終わり</p>
	</div>

	<p>これの対偶を取ると、</p>
	<div class="bg-sky-50 rounded-lg border border-black/20 px-3 flow-root pt-3 mb-3">
		<h3>定理②</h3>
		<p>
			<Katex math="n" /> を正整数、 <Katex math="a" /> を <Katex math="n" /> と互いに素な正整数として、
		</p>
		<p>
			<Katex math={`n-1 = 2^{s} d`} /> 、ただし <Katex math="d" /> は正奇数、 <Katex math="s" /> は正整数としたとき、
		</p>
		<Katex
			math={`\\forall r \\in \\mathbb{Z}(0\\le r\\le s-1)\\ \\ a^{2^r d} \\not\\equiv {-1} \\pmod n \\qquad \\mathrm{(c)}`}
			displayMode
		/>
		<p>かつ</p>
		<Katex math={`a^d \\not\\equiv 1 \\pmod n \\quad \\mathrm{(d)}`} displayMode />
		<p>ならば、 <Katex math="n" /> は合成数</p>
	</div>
	<p>がいえる。</p>
</section>
<section aria-labelledby="judge">
	<h2 class="border-b-3 border-double ps-1" id="judge">判定法</h2>
	<p>
		定理②を用いて確率的な素数判定をするものが <strong>Miller–Rabin</strong> 素数判定法である。
	</p>
	<p>具体的には、 n を素数判定したい正整数とすると、</p>
	<div class="bg-sky-50 rounded-lg border border-black/20 px-3 flow-root pt-3 mb-3">
		<ol>
			<li>
				<Katex math="n-1" /> を <Katex math="2" /> の冪 <Katex math="2^s" /> と奇数 <Katex
					math="d"
				/> の積に分解する
			</li>
			<li>
				以下の試行を何回か繰り返す
				<ol class="list-[lower-roman]">
					<li>正整数 <Katex math="0 < a \le n-1" /> をランダムに選ぶ</li>
					<li>
						<Katex math="a" /> と <Katex math="n" /> が互いに素でないなら <Katex math="n" /> は合成数。<em
						>
							終了
						</em>
					</li>
					<li>
						上の条件 <Katex math={`\\mathrm{(c)}, \\mathrm{(d)}`} /> をともに満たす場合、 <Katex
							math="n"
						/> は合成数。<em>終了</em>
					</li>
					<li>i. に戻る</li>
				</ol>
			</li>
			<li>試行に引っかからなかった場合、 <Katex math="n" /> は確率的素数である。<em>終了</em></li>
		</ol>
	</div>

	<p>
		ここで、定理②の逆は成り立たない。つまり <Katex math="n" /> が合成数でも上の2つの条件 <Katex
			math={`\\mathrm{(c)}, \\mathrm{(d)}`}
		/>
		を満たさない場合がある。
	</p>
	<p>
		しかし <Katex math="a" /> を様々に変えて試行すれば、いつかは <Katex
			math={`\\mathrm{(c)}, \\mathrm{(d)}`}
		/> を満たす <Katex math="a" /> が見つかる可能性が上がる。つまり
		<Katex math="n" /> を合成数と判定できる確率が上がる。
	</p>
	<h3>条件付き決定的判定</h3>
	<p>
		また、特定の底 <Katex math="a" /> について判定を行えば、ある範囲では素数であると決定的に判定できるような
		<Katex math="a" /> と範囲がいくつか発見されている。
	</p>
	<p>
		例えば、 <Katex math={`2^{64}`} /> 未満の数は、 <Katex
			math={`a=2,325,9375,28178,450775,9780504,1795265022`}
		/> の7つの底について判定を行えば、素数であると決定的に判定できることが分かっている。
	</p>
</section>
<section aria-labelledby="jissou">
	<h2 class="border-b-3 border-double ps-1" id="jissou">実装例</h2>
	<h3>TypeScript</h3>
	<pre class="bg-slate-200 px-3"><code
			>{`
export const millerRabin = (n: bigint) => {
	if (n < 0n) throw Error('引数は正の整数でなければなりません');

	// 2, 2の倍数 の場合の判定
	if (n === 2n) return true;
	if (n === 1n || n % 2n === 0n) return false;

	const bit_num = n.toString(2).length;


	const s = BigInt((n - 1n).toString(2).match(/0+$/g)?.[0].length ?? 0);
	const d = (n - 1n) >> s;

	if (n < 2n ** 64n) {
		/** n が 2^64 未満の時、決定的に判定できる 参考: https://miller-rabin.appspot.com/#bases7 */
		const bases_under_64 = [2n, 325n, 9375n, 28178n, 450775n, 9780504n, 1795265022n] as const;

		challenge: for (const b_ of bases_under_64) {
			const base = b_ >= n ? b_ % n : b_;

			if (base === 0n) continue challenge;

			if (exEuclidean(base, n).gcd != 1n) return false;

			let y = modPow(base, d, n);

			if (y === 1n) continue challenge;

			for (let i = 0n; i < s; i++) {
				if (y === n - 1n) continue challenge;

				y = (y * y) % n;
			}
			return false;
		}
		return true;
	} else {
		/** 試行回数 */
		const max_rot = 40;

		challenge2: for (let i = 0; i < max_rot; i++) {
			let b_ = 0n;

			while (b_ < 2n || b_ >= n) {
				b_ = getRandBIByBitLength(bit_num); // bit_num ビット以下の乱数を出力
			}

			if (exEuclidean(b_, n).gcd !== 1n) return false;

			const base = b_;

			let y = modPow(base, d, n);

			if (y === 1n) continue challenge2;

			for (let i = 0n; i < s; i++) {
				if (y === n - 1n) continue challenge2;
				y = (y * y) % n;
			}
			return false;
		}
		return true;
	}
};

`}</code
		></pre>
</section>

<div class="h-10"></div>
