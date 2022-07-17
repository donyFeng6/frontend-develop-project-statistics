class Storage {
    /**
     * 操作cookie信息
     * get set remove
     */
    Cookies() {
        return {
            set(name: string, val: any, option: any) {
                let d;
                let domain = option && option.domain;
                const path = (option && option.path) || "/";
                if (/ximalaya\.com$/.test(location.hostname)) {
                    domain = ".ximalaya.com";
                }
                if (option && option.expires) {
                    d = new Date();
                    d.setTime(d.getTime() + option.expires * 1000);
                }
                const cookieDomain = domain ? `; domain=${domain}` : "";
                const cookieExpires = d ? `; expires=${d.toUTCString()}` : "";
                const cookieSecure = option && option.secure ? "; secure" : "";
                const cookiePath = path ? `; path=${path}` : "";
                if (typeof val === "object") {
                    val = JSON.stringify(val);
                }
                const res = `${name}=${val}${cookieDomain}${cookiePath}${cookieExpires}${cookieSecure}`;
                document.cookie = res;
                return res;
            },
            get(name: string, chars?: string) {
                const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
                const re = reg.exec(document.cookie);
                let res = re ? re[2] : "";
                if (chars) {
                    res = res ? JSON.parse(res) : {};
                }
                return res;
            },
            remove(name: string) {
                this.set(name, "", {
                    expires: -1000,
                });
            },
        };
    }

    /**
     * 设置sessionStorage函数
     * get set remove
     */
    session_storage() {
        return {
            get: (key: string) => {
                let val = {};
                let value: any = sessionStorage.getItem(key);
                if (value && value.includes("{")) {
                    value = JSON.parse(value);
                }
                if (value && value.data) {
                    if (typeof value.data === "string") {
                        value.data = decodeURIComponent(value.data);
                        if (value.data.includes("{")) {
                            val = JSON.parse(value.data);
                        }
                    } else {
                        val = value.data;
                    }
                } else if (value) {
                    val = value;
                }
                return val;
            },
            set: (key: string, value: Record<string, any>) => {
                const val = JSON.stringify({
                    data: encodeURIComponent(JSON.stringify(value)),
                });
                sessionStorage.setItem(key, val);
            },
            remove: (key: string) => {
                if (key === "all") {
                    sessionStorage.clear();
                } else {
                    sessionStorage.removeItem(key);
                }
            },
        };
    }

    /**
     * 设置localStorage函数
     * get set remove
     */
    local_storage() {
        return {
            get: (key: string) => {
                let val = {};
                let value: any = localStorage.getItem(key);
                if (value) {
                    value = JSON.parse(value);
                }
                if (value && value.data) {
                    if (typeof value.data === "string") {
                        value.data = decodeURIComponent(value.data);
                        if (value.data.includes("{")) {
                            val = JSON.parse(value.data);
                        }
                    } else {
                        val = value.data;
                    }
                } else if (value) {
                    val = value;
                }
                return val;
            },
            set: (key: string, value: Record<string, any>) => {
                const val = JSON.stringify({
                    data: encodeURIComponent(JSON.stringify(value)),
                });
                localStorage.setItem(key, val);
            },
            remove: (key: string) => {
                if (key === "all") {
                    localStorage.clear();
                } else {
                    localStorage.removeItem(key);
                }
            },
            getAllList: () => {
                const len = localStorage.length;
                const list = [];
                for (let i = 0; i < len; i++) {
                    const getKey: any = localStorage.key(i);
                    const getVal = localStorage.getItem(getKey);
                    list.push({
                        key: getKey,
                        val: getVal,
                    });
                }
                return list;
            },
        };
    }
}

export default Storage;
