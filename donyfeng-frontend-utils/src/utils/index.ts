import CryptoJS from "crypto-js";

import Storage from "./storage";
import Crypto from "./crypto";

class UtilsFun {
    /**
     * 获取连接参数
     * @param n url参数
     * @returns 参数对象
     */
    getUrlParam(n: string) {
        let h: any = location.hash.split("?")[1];
        const r = new RegExp(`(^|&)${n}=([^&]*)(&|$)`);
        if (h) {
            h = h.match(r);
        } else {
            h = null;
        }
        const e = location.search.substr(1).match(r) || h;
        return e !== null ? decodeURI(e[2]) : null;
    }

    /**
     * 生成指定位数的随机字符串
     * @param {string} chars 自定义字符串集
     * @param {number} length 生成随机字符串长度
     */
    randomString(chars: string, length = 8) {
        let result = "";
        const str =
            chars ||
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = length; i > 0; --i) {
            result += str[Math.floor(Math.random() * str.length)];
        }
        return result;
    }

    /**
     * 将 json 数据排序并拼成字符串 key=value&key=value
     * @param {object} json json 数据
     * @param {string} chars 连接字符
     */
    jsonSort(json: any, chars = "&") {
        const arr = [];
        for (const keys in json) {
            arr.push(keys);
        }
        arr.sort();
        let str = "";
        for (const val of arr) {
            str += `${val}=${json[val]}${chars}`;
        }
        return str.slice(0, str.length - 1);
    }

    /**
     * 序列表数据转为json
     * @param {*} option
     */
    searchOrJson(option: any) {
        if (!option) {
            return {};
        }
        const paramet: any = {};
        const search = option.replace(RegExp("?", "g"), "");
        const searchArr = search.split("&");
        if (searchArr.length) {
            searchArr.map((d: any) => {
                // eslint-disable-next-line prefer-destructuring
                paramet[d.split("=")[0]] = d.split("=")[1];
                return paramet;
            });
        }
        return paramet;
    }

    /**
     * 判断平台系统类型
     */
    getUA() {
        const u = navigator.userAgent;
        const app = navigator.appVersion;
        return {
            trident: u.indexOf("Trident") > -1, // IE内核
            presto: u.indexOf("Presto") > -1, // opera内核
            webKit: u.indexOf("AppleWebKit") > -1, // 苹果、谷歌内核
            gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") === -1, // 火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
            isIos: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
            isAndroid: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, // android终端或者uc浏览器
            iPhone: u.indexOf("iPhone") > -1, // 是否为iPhone或者QQHD浏览器
            iPad: u.indexOf("iPad") > -1, // 是否iPad
            weixin: u.indexOf("MicroMessenger") > -1, // 是否微信
            qq: `${u.match(/\sQQ/i)}` === " qq", // 是否QQ
            weibo: u.indexOf("weibo") > -1, //  是否sina weibo
            inNative: u.indexOf("iting") > -1, // 是否xmly app
            version: app,
        };
    }

    /**
     * 生成随机字符串，默认32位
     * @param {Number} n 需要生成字符串的位数
     */
    generateRandom(n = 32) {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
        let res = "";
        for (let i = 0; i < n; i += 1) {
            const id = Math.ceil(Math.random() * 35);
            res += chars[id];
        }
        return res;
    }

    /**
     * 获取喜马生成的H5标识_xmLog
     */
    getUUID() {
        let uuid = this.Cookies().get("_xmLog");
        if (!uuid) {
            uuid = this.generateRandom(6);
            this.Cookies().set("_xmLog", uuid, {
                expires: 1000 * 24 * 3600 * 365,
            });
        }
        if (uuid && uuid.includes("&")) {
            uuid = uuid.replace(/&/g, "_");
        }
        return uuid;
    }

    /**
     * 格式化日期
     * @param {*} date 格式化时间日期
     * @param {*} fmt 格式化格式 YYYY-MM-dd hh:mm:ss
     */
    FormatDate(date: any, fmt: string) {
        if (typeof date === "string" && this.getUA().isIos) {
            date = date.replace(RegExp("-", "g"), "/");
        }
        const Dates = new Date(date);
        const o: any = {
            "Y+": Dates.getFullYear(),
            "M+": Dates.getMonth() + 1,
            "d+": Dates.getDate(),
            "h+": Dates.getHours(),
            "m+": Dates.getMinutes(),
            "s+": Dates.getSeconds(),
        };
        for (let i = 0; i < Object.keys(o).length; i++) {
            const k = Object.keys(o)[i];
            if (new RegExp(k).test(fmt)) {
                let str = `${o[k]}`;
                if (o[k] < 10) {
                    str = `0${o[k]}`;
                }
                fmt = fmt.replace(RegExp(k), str);
            }
        }
        return fmt;
    }

    /**
     * 生成主站获取短信接口签名
     * @param {*} params
     */
    get_passport_Sign(params: any, key: string) {
        // 请求按照字典升序排序, 使用&连接 并大写显示
        const jsonSort = (jsonObj: any, Case?: string) => {
            const arr = [];
            for (const keys in jsonObj) {
                arr.push(keys);
            }
            arr.sort();
            let str = "";
            for (const i in arr) {
                str += `${arr[i]}=${jsonObj[arr[i]]}&`;
            }
            str = str.substr(0, str.length - 1);
            if (Case) {
                return str;
            }
            return str.toUpperCase();
        };
        const str = jsonSort(params); // json 数据排序并拼接成字符串
        const signature =
            str + key ||
            "&WEB-V1-PRODUCT-E7768904917C4154A925FBE1A3848BC3E84E2C7770744E56AFBC9600C267891F"; // 添加签名key
        return CryptoJS.SHA1(signature).toString(); // SHA1 进行 MD5 得到 32 位字符串，即为 sig
    }
}

interface UtilsFun extends Storage, Crypto {}

// 多重继承
function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            const Descriptor =
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null);
            Object.defineProperty(derivedCtor.prototype, name, Descriptor);
        });
    });
}

applyMixins(UtilsFun, [Storage, Crypto]);

export const Utils = new UtilsFun();

export default UtilsFun;
