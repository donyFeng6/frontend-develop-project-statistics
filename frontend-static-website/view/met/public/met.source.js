//路径参数设置
$(function () {
    $.post("http://www.met365.com/Shared/SetUrlParam", GetRequestParm());
});

///获取url中指定参数值  
// <param name="url">url</param>  
// <param name="paras">参数名称</param>  
function GetRequestParmValue(url, para) {
    var paraObj = GetRequestParm(url);
    var returnValue = paraObj[para.toLowerCase()];
    if (typeof (returnValue) == "undefined") {
        return "";
    } else {
        return returnValue;
    }
}

///获取url中所有参数值  
function GetRequestParm(url) {
    if (!url) {
        url = document.URL;
    }
    var paraObj = {};
    if (url.indexOf("?") >= 0) {
        var paraString = url.substring(url.indexOf("?") + 1, url.length).replace(/^\s+|\s+$/g, "");
        if (paraString !== "") {
            var paraArr = paraString.split("&");
            var i, j;
            for (i = 0; j = paraArr[i]; i++) {
                paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
            }
        }
    }
    return paraObj;
}