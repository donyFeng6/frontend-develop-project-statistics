var _IE = (function () {
    var v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
    return v > 4 ? v : false;
}());

//检测函数
var check = function (r) {
    return r.test(navigator.userAgent.toLowerCase());
};
var statics = {
    /**
    * 是否为webkit内核的浏览器
    */
    isWebkit: function () {
        return check(/webkit/);
    },
    /**
    * 是否为火狐浏览器
    */
    isFirefox: function () {
        return check(/firefox/);
    },
    /**
    * 是否为谷歌浏览器
    */
    isChrome: function () {
        return !statics.isOpera() && check(/chrome/);
    },
    /**
    * 是否为Opera浏览器
    */
    isOpera: function () {
        return check(/opr/);
    },
    /**
    * 检测是否为Safari浏览器
    */
    isSafari: function () {
        // google chrome浏览器中也包含了safari
        return !statics.isChrome() && !statics.isOpera() && check(/safari/);
    }
};