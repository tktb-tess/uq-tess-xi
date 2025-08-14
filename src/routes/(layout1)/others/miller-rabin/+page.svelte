<script lang="ts">
	import { PUBLIC_SITE_NAME } from "$env/static/public";

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
	<title>{ogTitle} | {PUBLIC_SITE_NAME}</title>
</svelte:head>

<h2 class="text-center my-8">{ogTitle}</h2>
<section aria-labelledby="pree">
	<h2 id="pree">前提知識</h2>
	<p>$p$ を奇素数とする。フェルマーの小定理より、 $p$ と互いに素な正整数 $a$ について</p>
	<p>{`$$a^{p-1} \equiv 1 \pmod p \qquad (1)$$`}</p>
	<p>である。</p>
	<p>
		{`$p-1$`} を {`$2$`} で割れるだけ割って {`$2^{s} d$`} と表す。ただし $s$ は正整数、 $d$ は奇数である。上の式は
	</p>
	<p>{`$$a^{2^s d} \equiv 1 \pmod p \qquad (2)$$`}</p>
	<p>と表せる。</p>
	<p>このとき、次の定理が成り立つ。</p>
	<ul>
		<li>
			<p>定理①</p>
			<p>各変数を上のように定義したとき、</p>
			<p>
				{`$$\exists r\in \mathbf(0 \le r \le s-1) \ \ a^{2^r d} \equiv {-1} \pmod p \qquad \mathrm{(a)}$$`}
			</p>
			<p>または</p>
			<p>{`$$a^d \equiv 1 \pmod p \qquad \mathrm{(b)}$$`}</p>
			<p>が成り立つ。</p>
		</li>
	</ul>
	<p>以下これを示す。</p>
	<h3>証明</h3>
	<p>{`$a^{2^{s-1} d} \pmod p$`} の値について考える。</p>
	<p>{`$a^{2^s d}$ の平方根なので、 $(2)$ よりこれは $1$ または $-1$ と合同である。`}</p>
	<p>{`$-1$ と合同なら $\mathrm{(a)}$ が成立。`}</p>
	<p>$1$ と合同なら平方根 {`$a^{2^{s-2} d}$`} を再びとり、同じように考える。</p>
	<p>$0 \le r \le s-1$ の間で $-1$ と合同なものがあれば {`$\mathrm{(a)}$`} が成立する。</p>
	<p>そういうものがない場合、</p>
	<p>{`$$a^{2^0 d} \equiv a^d \equiv 1 \pmod p$$`}</p>
	<p>となるので {`$\mathrm{(b)}$`} が成立。</p>
    
	<p>これの対偶を取ると、</p>
	<ul>
		<li>
			<p>定理②</p>
			<p>$n$ を正整数、 $a$ を $n$ と互いに素な正整数として、</p>
			<p>{`$n-1 = 2^{s} d$`} 、ただし $d$ は正奇数、 $s$ は正整数としたとき、</p>
			<p>
				{`$$\forall r \in \mathbf{Z}(0 ≤ r ≤ s-1)\ \ a^{2^r d} \not\equiv {-1} \pmod n \qquad \mathrm{(c)}$$`}
			</p>
			<p>かつ</p>
			<p>{`$$a^d \not\equiv 1 \pmod n \quad \mathrm{(d)}$$`}</p>
			<p>ならば、 $n$ は合成数</p>
		</li>
	</ul>
    
	<p>がいえる。</p>
</section>
<section aria-labelledby="judge">
	<h2 id="judge">判定法</h2>
	<p>
		定理②を用いて確率的な素数判定をするものが <strong>Miller&ndash;Rabin</strong> 素数判定法である。
	</p>
	<p>具体的には、 $n$ を素数判定したい正整数とすると、</p>
	<ol>
		<li>$n-1$ を $2$ の冪 $2^s$ と奇数 $d$ の積に分解する</li>
		<li>
			以下の試行を何回か繰り返す
			<ol>
				<li>正整数 $0 &lt; a \le n-1$ をランダムに選ぶ</li>
				<li>$a$ と $n$ が互いに素でないなら $n$ は合成数。<em>終了</em></li>
				<li>
					上の条件 {`$\mathrm{(c)}, \mathrm{(d)}$`} をともに満たす場合、 $n$ は合成数。<em>終了</em>
				</li>
				<li>i. に戻る</li>
			</ol>
		</li>
		<li>試行に引っかからなかった場合、 $n$ は確率的素数である。<em>終了</em></li>
	</ol>
	<p>
		ここで、定理②の逆は成り立たない。つまり $n$ が合成数でも上の2つの条件 {`$\mathrm{(c)}, \mathrm{(d)}$`}
		を満たさない場合がある。
	</p>
	<p>
		しかし $a$ を様々に変えて試行すれば、いつかは {`$\mathrm{(c)}, \mathrm{(d)}$`} を満たす $a$ が見つかる可能性が上がる。つまり
		$n$ を合成数と判定できる確率が上がる。
	</p>
</section>
<section aria-labelledby="jissou">
	<h2 id="jissou">実装例</h2>
	<h3>TypeScript</h3>
	<pre><code>
{`
/**
 * Miller-Rabin 素数判定法 (n < 2^64 の場合決定的に判定)
 * @param n_ 判定したい整数
 */
export const millerRabin = (n_: bigint) => {
	if (n_ < 0n) throw Error('引数は正の整数でなければなりません');
	const n = n_;

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
				b_ = getRandBIByBitLength(bit_num);
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

`}</code></pre>
</section>
