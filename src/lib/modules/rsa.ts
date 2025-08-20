// assume to be used in server-side

import { getRandPrimeByBitLength } from './baillie-psw';
import { modPow, exEuclidean, residue } from './util';

const e = 65537n;

export type RSAData = {
	name: 'RSA';
	p: string;
	q: string;
	d: string;
};

/**
 * bigint -> Buffer
 * @param bigint
 * @returns
 */
const BIToBuf = (bigint: bigint) => {
	let str = bigint.toString(16);
	if (str.length % 2 === 1) str = '0' + str;
	return Buffer.from(str, 'hex');
};

/**
 * Buffer -> bigint
 * @param base64
 * @returns
 */
const bufToBI = (buf: Buffer) => {
	const hexStr = buf.toString('hex') || '00';
	return BigInt('0x' + hexStr);
};

export default class RSA {
	readonly #p;
	readonly #q;
	readonly #d;

	get [Symbol.toStringTag]() {
		return RSA.name;
	}

	private constructor(p: bigint, q: bigint, d: bigint) {
		this.#p = p;
		this.#q = q;
		this.#d = d;
	}

	static generate() {
		while (true) {
			const p = getRandPrimeByBitLength(1024, true);

			const q = (() => {
				while (true) {
					const q = getRandPrimeByBitLength(1024, true);
					if (p !== q) return q;
				}
			})();

			// λ(pq) = LCM(p-1, q-1) = (p-1) * (q-1) / GCD(p-1, q-1)

			const lambda = (() => {
				const phi = (p - 1n) * (q - 1n);
				const { gcd } = exEuclidean(p - 1n, q - 1n);
				return phi / gcd;
			})();

			const { x, gcd } = exEuclidean(e, lambda);

			// 互いに素でなければ選びなおし
			if (gcd !== 1n) continue;

			const d = residue(x, lambda);

			return new RSA(p, q, d);
		}
	}

	/**
	 *
	 * @param text JSON string
	 * @returns
	 */
	static parse(text: string) {
		const parsed = JSON.parse(text);
		const { p, q, d, name } = parsed;
		if (name !== 'RSA') throw Error('cannot parse');
		if (typeof p === 'string' && typeof q === 'string' && typeof d === 'string') {
			const p_ = bufToBI(Buffer.from(p, 'base64url'));
			const q_ = bufToBI(Buffer.from(q, 'base64url'));
			const d_ = bufToBI(Buffer.from(d, 'base64url'));
			return new RSA(p_, q_, d_);
		} else {
			throw Error('cannot parse');
		}
	}

	toJSON(): RSAData {
		return {
			name: 'RSA',
			p: BIToBuf(this.#p).toString('base64url'),
			q: BIToBuf(this.#q).toString('base64url'),
			d: BIToBuf(this.#d).toString('base64url')
		};
	}

	/**
	 * 暗号化
	 * @param text 平文
	 * @returns Base64URL形式の暗号文
	 */
	encrypt(text: string) {
		const mRadix = 1n << 2046n;
		const eRadix = 1n << 2048n;
		const n = this.#p * this.#q;

		const buf = Buffer.from(text, 'utf8');

		let mBI = bufToBI(buf);

		const cArr: bigint[] = [];

		while (mBI > 0n) {
			const mDigit = mBI & (mRadix - 1n);
			const cDigit = modPow(mDigit, e, n);
			cArr.push(cDigit);
			mBI >>= 2046n;
		}

		const cBI = cArr
			.map((cDigit, i) => cDigit * eRadix ** BigInt(i))
			.reduce((prev, cur) => prev + cur, 0n);
		
		return BIToBuf(cBI).toString('base64url');
	}

	/**
	 * 復号
	 * @param base64 Base64URL形式の暗号文
	 * @returns 平文
	 */
	decrypt(base64: string) {
		const mRadix = 1n << 2046n;
		const eRadix = 1n << 2048n;
		const n = this.#p * this.#q;

		const cBuf = Buffer.from(base64, 'base64url');
		let cBI = bufToBI(cBuf);

		const mArr: bigint[] = [];

		while (cBI > 0n) {
			const cDigit = cBI & (eRadix - 1n);
			const mDigit = modPow(cDigit, this.#d, n);
			mArr.push(mDigit);
			cBI >>= 2048n;
		}

		const mBI = mArr
			.map((mDigit, i) => mDigit * mRadix ** BigInt(i))
			.reduce((prev, cur) => prev + cur, 0n);

		return BIToBuf(mBI).toString('utf8');
	}
}
