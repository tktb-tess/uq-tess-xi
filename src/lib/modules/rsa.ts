import { millerRabin, getRandBIByBitLength, modPow, exEuclidean } from './util';
import Base64 from './base64';

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const e = 65537n;

export default class RSA {

    readonly #p;
    readonly #q;
    readonly #d;

    get [Symbol.toStringTag]() {
        return RSA.name;
    }

    /**
     * @param bits 素数のビット数
     */
    constructor(bits: number) {

        loop: while (true) {
            let [p_, q_] = [1n, 1n];
            let counter = 0;

            while (!millerRabin(p_)) {
                p_ = getRandBIByBitLength(bits, true);
                counter++;
                if (counter > 100000) throw Error('failed to construct.');
            }

            counter = 0;

            while (!millerRabin(q_)) {
                q_ = getRandBIByBitLength(bits, true);
                counter++;
                if (counter > 100000) throw Error('failed to construct.');
            }

            this.#p = p_;
            this.#q = q_;

            // λ(pq) = LCM(p-1, q-1) = (p-1) * (q-1) / GCD(p-1, q-1)

            const lambda = (() => {
                const phi = (p_ - 1n) * (q_ - 1n);
                const { gcd } = exEuclidean(p_ - 1n, q_ - 1n);

                return phi / gcd;
            })();

            const { x, gcd } = exEuclidean(e, lambda);

            // 互いに素でなければ選びなおし
            if (gcd !== 1n) continue loop;

            this.#d = (() => {
                let d_ = x;
                while (d_ < 0n) d_ += lambda;
                return d_;
            })();

            break loop;
        }
    }

    /**
     * @param radix 
     * @returns 
     */
    toString(radix?: number) {
        const n = this.#p * this.#q;
        return `n: ${n.toString(radix)}\ne: ${e.toString(radix)}`;
    }

    toJSON() {
        let n_hexstr = (this.#p * this.#q).toString(16);
        if (n_hexstr.length % 2 === 1) n_hexstr = '0' + n_hexstr;

        const n_bin = Uint8Array.from(n_hexstr.match(/.{2}/g) ?? [], d => Number.parseInt(d, 16));

        let e_hexstr = e.toString(16);
        if (e_hexstr.length % 2 === 1) e_hexstr = '0' + e_hexstr;
        const e_bin = Uint8Array.from(e_hexstr.match(/.{2}/g) ?? [], d => Number.parseInt(d, 16));

        return {
            n: Base64.binToB64(n_bin.buffer),
            e: Base64.binToB64(e_bin.buffer),
        };
    }

    toBin() {
        let n_hexstr = (this.#p * this.#q).toString(16);
        if (n_hexstr.length & 1) n_hexstr = '0' + n_hexstr;

        let e_hexstr = e.toString(16);
        if (e_hexstr.length & 1) e_hexstr = '0' + e_hexstr;

        const key_bin_str = n_hexstr + '0000' + e_hexstr;
        const key_bin = Uint8Array.from(key_bin_str.match(/.{2}/g) ?? [], n => Number.parseInt(n, 16));
        return key_bin.buffer;
    }

    /**
     * 暗号化
     * @param text 平文
     * @returns Base64形式の暗号文
     */
    encrypt(text: string) {
        const radix = this.#p * this.#q;
        const utf8 = encoder.encode(text);
        const m_hexstr = Array.from(utf8, n => n.toString(16).padStart(2, '0')).join('');
        let m_bigint = BigInt('0x' + m_hexstr);

        const c_arr: bigint[] = [];

        while (m_bigint > 0n) {
            const m_one = m_bigint % radix;

            const c_one = modPow(m_one, e, radix);

            c_arr.push(c_one);

            m_bigint /= radix;
        }

        let c_bigint = 0n;

        for (let i = 0n; i < c_arr.length; i++) {
            c_bigint += c_arr[Number(i)] * radix ** i;
        }

        let c_hexstr = c_bigint.toString(16);
        if (c_hexstr.length % 2 === 1) c_hexstr = '0' + c_hexstr;
        const c_bin = Uint8Array.from(c_hexstr.match(/.{2}/g) ?? [], n => Number.parseInt(n, 16));
        return Base64.binToB64(c_bin.buffer);
    }

    /**
     * 復号
     * @param base64 Base64形式の暗号文
     * @returns 平文
     */
    decrypt(base64: string) {

        const radix = this.#p * this.#q;
        const c_bin = new Uint8Array(Base64.b64ToBin(base64));
        const c_hexstr = Array.from(c_bin, n => n.toString(16).padStart(2, '0')).join('');
        let c_bigint = BigInt('0x' + c_hexstr);

        const m_arr: bigint[] = [];

        while (c_bigint > 0n) {
            const c_one = c_bigint % radix;

            const m_one = modPow(c_one, this.#d, radix);

            m_arr.push(m_one);

            c_bigint /= radix;
        }

        let m_bigint = 0n;

        for (let i = 0n; i < m_arr.length; i++) {
            m_bigint += m_arr[Number(i)] * radix ** i;
        }

        let m_hexstr = m_bigint.toString(16);

        if (m_hexstr.length & 1) m_hexstr = '0' + m_hexstr;

        const utf8 = Uint8Array.from(m_hexstr.match(/.{2}/g) ?? [], n => Number.parseInt(n, 16));

        return decoder.decode(utf8);
    }
}