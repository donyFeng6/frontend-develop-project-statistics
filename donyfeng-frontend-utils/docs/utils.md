---
nav:
  title: 文档
  path: /utils
  order: 1
group:
  title: 快速上手
---

## 快速上手

#### 安装 -utils

```bash
  yarn add -utils
```

> 需要将 npm 源切换到公司环境

## 使用
<br/>
## 函数方法API目录
<br/>

```
├─ Utils 工具函数库
│  ├─ encrypt  api接口加密函数
│  ├─ decrypt  api接口解密函数
│  ├─ randomString  生成指定位数的随机字符串
│  ├─ jsonSort  将 json 数据排序并拼成字符串
│  ├─ getUrlParam  获取连接参数
│  ├─ searchOrJson  序列表数据转为json
│  ├─ FormatDate  格式化日期
│  ├─ getUA  判断平台系统类型
│  ├─ getUUID  获取喜马生成的H5标识_xmLog
│  ├─ generateRandom  生成随机字符串，默认32位
│  ├─ Cookies  操作cookie信息
│  │  ├─ set  设置
│  │  ├─ get  获取
│  │  └─ remove  删除
│  ├─ session_storage  设置sessionStorage函数
│  │  ├─ set  设置
│  │  ├─ get  获取
│  │  └─ remove  删除
│  ├─ local_storage  设置localStorage函数
│  │  ├─ set  设置
│  │  ├─ get  获取
│  │  ├─ remove  删除
│  │  └─ getAllList  获取List全部
│  └─ get_passport_Sign  生成主站获取短信接口签名

```
<br/>
<br/>

## 函数API方法
<br/>

#### API 接口加解密方法
``` javascript

  /**
   * 加密函数
   * @param {string} word 要加密的数据
   * @param {object} param 加密所需 key 等
   */
  encrypt(word: any, param: EncryptParam = {}) {
    param.key = param.key ? param.key : '加密key';
    param.iv = param.iv ? param.iv : '加密iv';
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
    param.key = param.key ? param.key : '解密key';
    param.iv = param.iv ? param.iv : '解密iv';
    const key = CryptoJS.enc.Utf8.parse(param.key);
    const iv = CryptoJS.enc.Utf8.parse(param.iv);
    const decrypt = CryptoJS.AES.decrypt(word, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  }

```

#### 生成指定位数的随机字符串

``` javascript

  /**
   * 生成指定位数的随机字符串
   * @param {string} chars 自定义字符串集
   * @param {number} length 生成随机字符串长度
   */
  randomString(chars: string, length = 8) {
    let result = '';
    const str = chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = length; i > 0; --i) {
      result += str[Math.floor(Math.random() * str.length)];
    }
    return result;
  }

```

#### 将 json 数据排序并拼成字符串

``` javascript

  /**
   * 将 json 数据排序并拼成字符串 key=value&key=value
   * @param {object} json json 数据
   * @param {string} chars 连接字符
   */
  jsonSort(json: any, chars = '&') {
    const arr = [];
    for (const keys in json) {
      arr.push(keys);
    }
    arr.sort();
    let str = '';
    for (const val of arr) {
      str += `${val}=${json[val]}${chars}`;
    }
    return str.slice(0, str.length - 1);
  }

```

#### 获取连接参数

``` javascript

  // 获取连接参数
  getUrlParam(n: string) {
    let h: any = window.location.hash.split('?')[1];
    const r = new RegExp(`(^|&)${n}=([^&]*)(&|$)`);
    if (h) {
      h = h.match(r);
    } else {
      h = null;
    }
    const e = window.location.search.substr(1).match(r) || h;
    return e !== null ? decodeURI(e[2]) : null;
  }

```

#### 序列表数据转为json

``` javascript

  /**
   * 序列表数据转为json
   * @param {*} option
   */
  searchOrJson(option: any) {
    if (!option) {
      return {};
    }
    const paramet: any = {};
    const search = option.replace(/\?/g, '');
    const searchArr = search.split('&');
    if (searchArr.length) {
      searchArr.map((d: any) => {
        // eslint-disable-next-line prefer-destructuring
        paramet[d.split('=')[0]] = d.split('=')[1];
        return paramet;
      });
    }
    return paramet;
  }

```

#### 格式化日期

``` javascript

  /**
   * 格式化日期
   * @param {*} date 格式化时间日期
   * @param {*} fmt 格式化格式
   */
  FormatDate(date: any, fmt: string) {
    if (typeof date === 'string' && this.getUA().isIos) { date = date.replace(/\\-/g, '/'); }
    const Dates = new Date(date);
    const o: any = {
      'Y+': Dates.getFullYear(),
      'M+': Dates.getMonth() + 1,
      'd+': Dates.getDate(),
      'h+': Dates.getHours(),
      'm+': Dates.getMinutes(),
      's+': Dates.getSeconds(),
    };
    for (let i = 0; i < Object.keys(o).length; i++) {
      const k = Object.keys(o)[i];
      if (new RegExp(k).test(fmt)) {
        let str = `${o[k]}`; if (o[k] < 10) { str = `0${o[k]}`; }
        fmt = fmt.replace(RegExp(k), str);
      }
    }
    return fmt;
  }

```


#### 判断平台系统类型

``` javascript

  /**
   * 判断平台系统类型
   */
  getUA() {
    const u = window.navigator.userAgent;
    const app = window.navigator.appVersion;
    return {
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      isIos: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      isAndroid: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      weixin: u.indexOf('MicroMessenger') > -1, // 是否微信
      qq: `${u.match(/\sQQ/i)}` === ' qq', // 是否QQ
      weibo: u.indexOf('weibo') > -1, //  是否sina weibo
      inNative: u.indexOf('iting') > -1, // 是否xmly app
      version: app,
    };
  }

```


#### 生成随机字符串，默认32位

``` javascript

  /**
   * 生成随机字符串，默认32位
   * @param {Number} n 需要生成字符串的位数
   */
  generateRandom(n = 32) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    let res = '';
    for (let i = 0; i < n; i += 1) {
      const id = Math.ceil(Math.random() * 35);
      res += chars[id];
    }
    return res;
  }

```


#### 获取喜马生成的H5标识_xmLog

``` javascript

  /**
   * 获取喜马生成的H5标识_xmLog
   */
  getUUID() {
    let uuid = this.Cookies().get('_xmLog');
    if (!uuid) {
      uuid = this.generateRandom(6);
      this.Cookies().set('_xmLog', uuid, {
        expires: 1000 * 24 * 3600 * 365,
      });
    }
    if (uuid && uuid.includes('&')) {
      uuid = uuid.replace(/&/g, '_');
    }
    return uuid;
  }

```


#### 操作cookie信息

``` javascript

  /**
   * 操作cookie信息
   */
  Cookies() {
    return {
      set(name: string, val: any, option: any) {
        let d;
        let domain = option && option.domain;
        const path = (option && option.path) || '/';
        if (/ximalaya\.com$/.test(window.location.hostname)) {
          domain = '.ximalaya.com';
        }
        if (option && option.expires) {
          d = new Date();
          d.setTime(d.getTime() + option.expires * 1000);
        }
        const cookieDomain = domain ? `; domain=${domain}` : '';
        const cookieExpires = d ? `; expires=${d.toUTCString()}` : '';
        const cookieSecure = option && option.secure ? '; secure' : '';
        const cookiePath = path ? `; path=${path}` : '';
        if (typeof val === 'object') { val = JSON.stringify(val); }
        const res = `${name}=${val}${cookieDomain}${cookiePath}${cookieExpires}${cookieSecure}`;
        window.document.cookie = res;
        return res;
      },
      get(name: string, chars?: string) {
        const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
        const re = reg.exec(window.document.cookie);
        let res = re ? re[2] : '';
        if (chars) { res = res ? JSON.parse(res) : {}; }
        return res;
      },
      remove(name: string) {
        this.set(name, '', {
          expires: -1000,
        });
      },
    };
  }

```


#### 设置sessionStorage函数

``` javascript

  /**
   * 设置sessionStorage函数
   * get set remove
   */
  session_storage() {
    return {
      get: (key: string) => {
        let val = {};
        let value: any = window.sessionStorage.getItem(key);
        if (value && value.includes('{')) {
          value = JSON.parse(value);
        }
        if (value && value.data) {
          if (typeof value.data === 'string') {
            value.data = decodeURIComponent(value.data);
            if (value.data.includes('{')) {
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
        window.sessionStorage.setItem(key, val);
      },
      remove: (key: string) => {
        if (key === 'all') {
          window.sessionStorage.clear();
        } else {
          window.sessionStorage.removeItem(key);
        }
      },
    };
  }

```



#### 设置localStorage函数

``` javascript

  /**
   * 设置localStorage函数
   * get set remove
   */
  local_storage() {
    return {
      get: (key: string) => {
        let val = {};
        let value: any = window.localStorage.getItem(key);
        if (value) {
          value = JSON.parse(value);
        }
        if (value && value.data) {
          if (typeof value.data === 'string') {
            value.data = decodeURIComponent(value.data);
            if (value.data.includes('{')) {
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
        window.localStorage.setItem(key, val);
      },
      remove: (key: string) => {
        if (key === 'all') {
          window.localStorage.clear();
        } else {
          window.localStorage.removeItem(key);
        }
      },
      getAllList: () => {
        const len = window.localStorage.length;
        const list = [];
        for (let i = 0; i < len; i++) {
          const getKey: any = window.localStorage.key(i);
          const getVal = window.localStorage.getItem(getKey);
          list.push({
            key: getKey,
            val: getVal,
          });
        }
        return list;
      },
    };
  }

```



#### 生成主站获取短信接口签名

``` javascript

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
      let str = '';
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
    const signature = str + key || '主站签名key'; // 添加签名key
    return CryptoJS.SHA1(signature).toString(); // SHA1 进行 MD5 得到 32 位字符串，即为 sig
  }

```
