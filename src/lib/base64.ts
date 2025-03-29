const encoder = new TextEncoder();
const decoder = new TextDecoder();

export default class Base64<T extends ArrayBufferLike = ArrayBufferLike> {

    readonly buffer;

    constructor(data: string | T) {

        if (typeof data === 'string') {
            this.buffer = Base64.b64ToBin(data) as T;
        } else {
            this.buffer = data;
        }
        
    };

    get base64() {
        return Base64.binToB64(this.buffer);
    }

    toString() {
        return this.base64;
    }

    getUint8() {
        return new Uint8Array(this.buffer);
    }

    getDataView() {
        return new DataView(this.buffer);
    }

    toJSON() {
        return this.base64;
    }

    get [Symbol.toStringTag]() {
        return Base64.name;
    }

    

    /**
     * Base64エンコード
     * @param text テキスト
     * @returns エンコードされたBase64テキスト
     */
    static encode(text: string) {
        const utf8 = encoder.encode(text); // UTF-8(整数)にエンコード
        
        return this.binToB64(utf8.buffer);
    }

    /**
     * Base64デコード
     * @param base64 Base64テキスト
     * @returns デコードされたテキスト
     */
    static decode(base64: string) {
        const binStr = this.b64ToBin(base64); // 疑似的な文字列にデコード
        return decoder.decode(binStr);
    }

    /**
     * バイナリデータをBase64形式のテキストに変換する
     * @param bin バイナリデータ
     */
    static binToB64<T extends ArrayBufferLike>(bin: T) {
        return btoa(Array.from(new Uint8Array(bin), n => String.fromCodePoint(n)).join(''));
    }

    /**
     * Base64テキストをバイナリデータに変換する
     * @param base64 
     */
    static b64ToBin(base64: string) {

        return Uint8Array.from(atob(base64), s => s.charCodeAt(0)).buffer;
    }

    /**
     * SHA-256ハッシュのBase64
     * @param str 
     * @returns 
     */
    static async getHashb64(str: string) {
        const encoded = encoder.encode(str);
        const hash = new Uint8Array(await crypto.subtle.digest('SHA-256', encoded));
        return Base64.binToB64(hash.buffer);
    }
}

declare global {
    interface ArrayBuffer {
        toString(): string;
    }
    interface SharedArrayBuffer {
        toString(): string;
    }
}

ArrayBuffer.prototype.toString = function() {
    return Base64.binToB64(this);
}

SharedArrayBuffer.prototype.toString = function() {
    return Base64.binToB64(this);
};

