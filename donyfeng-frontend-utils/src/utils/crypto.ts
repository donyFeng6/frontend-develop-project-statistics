import CryptoJS from "crypto-js";

// 加解密参数
interface EncryptParam {
    key?: string;
    iv?: string;
}
class Crypto {
    /**
     * 加密函数
     * @param {string} word 要加密的数据
     * @param {object} param 加密所需 key 等
     */
    encrypt(word: any, param: EncryptParam = {}) {
        param.key = param.key ? param.key : "";
        param.iv = param.iv ? param.iv : "";
        const key = CryptoJS.enc.Utf8.parse(param.key);
        const iv = CryptoJS.enc.Utf8.parse(param.iv);
        const srcs = CryptoJS.enc.Utf8.parse(word);
        const encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encrypted.toString();
    }

    /**
     * 解密函数
     * @param {string} word 要解密的数据
     * @param {object} param 解密所需 key 等
     */
    decrypt(word: any, param: EncryptParam = {}) {
        param.key = param.key ? param.key : "";
        param.iv = param.iv ? param.iv : "";
        const key = CryptoJS.enc.Utf8.parse(param.key);
        const iv = CryptoJS.enc.Utf8.parse(param.iv);
        const decrypt = CryptoJS.AES.decrypt(word, key, {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return CryptoJS.enc.Utf8.stringify(decrypt).toString();
    }
}

export default Crypto;
