# Miller&ndash;Rabin 素数判定法

## 前提知識

$p$ を奇素数とする。フェルマーの小定理より、 $p$ と互いに素な正整数 $a$ について

$$a^{p-1} \equiv 1 \pmod p \qquad (1)$$

である。

$p-1$ を $2$ で割れるだけ割って $2^{s} d$ と表す。ただし $s$ は正整数、 $d$ は奇数である。上の式は

$$a^{2^s d} \equiv 1 \pmod p \qquad (2)$$

と表せる。

このとき、次の定理が成り立つ。

- 定理①

  各変数を上のように定義したとき、

  $$\exists r\in ℤ(0 \le r \le s-1) \ \ a^{2^r d} \equiv {-1} \pmod p \qquad \mathrm{(a)}$$

  または

  $$a^d \equiv 1 \pmod p \qquad \mathrm{(b)}$$

  が成り立つ。

---

以下これを示す。

### 証明

$a^{2^{s-1} d} \pmod p$ の値について考える。

$a^{2^s d}$ の平方根なので、 $(2)$ よりこれは $1$ または $\-1$ と合同である。

$-1$ と合同なら $\mathrm{(a)}$ が成立。

$1$ と合同なら平方根 $a^{2^{s-2} d}$ を再びとり、同じように考える。

$0 \le r \le s-1$ の間で $-1$ と合同なものがあれば $\mathrm{(a)}$ が成立する。

そういうものがない場合、

$$a^{2^0 d} \equiv a^d \equiv 1 \pmod p$$

となるので $\mathrm{(b)}$ が成立。

---

これの対偶を取ると、

- 定理②

  $n$ を正整数、 $a$ を $n$ と互いに素な正整数として、

  $n-1 = 2^{s} d$ 、ただし $d$ は正奇数、 $s$ は正整数としたとき、

  $$\forall r \in ℤ(0 ≤ r ≤ s-1)\ \ a^{2^r d} \not\equiv {-1} \pmod n \qquad \mathrm{(c)}$$

  かつ

  $$a^d \not\equiv 1 \pmod n \quad \mathrm{(d)}$$

  ならば、 $n$ は合成数

---

がいえる。

## 判定法について

定理②を用いて確率的な素数判定をするものが **Miller&ndash;Rabin** 素数判定法である。

具体的には、 $n$ を素数判定したい正整数とすると、

1. $n-1$ を $2$ の冪 $2^s$ と奇数 $d$ の積に分解する
2. 以下の試行を何回か繰り返す
   1. 正整数 $0 \< a \le n\-1$ をランダムに選ぶ
   2. $a$ と $n$ が互いに素でないなら $n$ は合成数。_終了_
   3. 上の条件 $\mathrm{(c)}, \mathrm{(d)}$ をともに満たす場合、 $n$ は合成数。_終了_
   4. i\. に戻る
3. 試行に引っかからなかった場合、 $n$ は確率的素数である。_終了_

ここで、定理②の逆は成り立たない。つまり $n$ が合成数でも上の2つの条件 $\mathrm{(c)}, \mathrm{(d)}$ を満たさない場合がある。

しかし $a$ を様々に変えて試行すれば、いつかは $\mathrm{(c)}, \mathrm{(d)}$ を満たす $a$ が見つかる可能性が上がる。つまり $n$ を合成数と判定できる確率が上がる。

## 実装例

### TypeScript

```typescript
/**
 * Miller-Rabin 素数判定法 (n < 2^64 の場合決定的に判定)
 * @param n_ 判定したい整数
 */
const millerRabin = (n_: bigint) => {
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
```
