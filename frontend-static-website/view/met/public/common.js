//数据验证格式
var validateFormat = {
    mobile: /^1[0-9][0-9]{9}$/i,
    email: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/i
};

//多条件过滤 涉及所有查询条件，修改后请全局测试
function FilterCondition(obj) {
    var that = obj;
    var dataKey = $(that).attr("data-key") || "";
    var dataFilterType = $(that).attr("data-filter-type");

    if (dataKey == "") {
        //不限
        $(that).parent("div").find("a").removeClass("bg-success");
        $(that).addClass("bg-success");
        $(that).parentsUntil(".searchbar").find("#" + dataFilterType).val(dataKey);
    } else {
        //其他
        var oldValeStr = $(that).parentsUntil(".searchbar").find("#" + dataFilterType).val();
        var oldValeData = oldValeStr.split(",");

        $(that).parent("div").find("a:first").removeClass("bg-success");
        if ($(that).hasClass("bg-success")) {
            $(that).removeClass("bg-success");
            var tempData = oldValeData;
            tempData.forEach(function (dat, i) {
                if (dat == dataKey)
                    oldValeData.splice(i, 1);
            });

            $(that).parentsUntil(".searchbar").find("#" + dataFilterType).val(oldValeData.join(","));
        } else {
            $(that).addClass("bg-success");
            oldValeData.push(dataKey);
            $(that).parentsUntil(".searchbar").find("#" + dataFilterType).val(oldValeData.join(","));
        }
    }
}

//输入字数限制方法
function SetMaxInputCount(obj, id, count) {
    $("#" + id + " .lengthContainer").html($(obj).val().length + "");//初始化计数器，开始的时候显示0
    if (!count) {
        count =parseInt($("#" + id + " .maxLength").text());
    }
    if ($(obj).val().length <= count) {
        $("#" + id + " .lengthContainer").html($(obj).val().length);
    } else {
        $("#" + id + " .lengthContainer").html(count);
        $(obj).val($(obj).val().substr(0, count));
    }
}

//弹出登录框
function GoLogin(url,isLogin) {
    Modal_Resize(700);
    if (!isLogin) {
        isLogin = false;
    }
    OpenModal("/Shared/Login", { IsLogin: isLogin });
    SetCurrPageUrl(url);
}
//弹出模态框
function OpenModal(url,option) {
    var modal = $("#StudentModal");
    var flag = IsOpenModal();
    if (!option) {
        option = {};
    }
    modal.find("div.modal-content").load(url,option, function () {
        if (!flag) {
            modal.modal('show');
        }
    });
}
//模态框是否弹出
function IsOpenModal(modal) {
    if (!modal) {
        modal = '#StudentModal';
    }
    return $(modal).hasClass("in");
}

//记录当前页面路径(登录前)
function SetCurrPageUrl(url) {
    var data = {};
    if (url) {
        data.Url = url;
    }
    $.post("/Passport/SetCurrPageUrl",data);
}
//跳转记录的页面路径
function GoCurrPageUrl() {
    window.location.href = "/Passport/GoCurrPageUrl";
}

//格式化金额  
function fmoney(s, n) {
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";//更改这里n数也可确定要保留的小数位  
    var l = s.split(".")[0].split("").reverse(),
    r = s.split(".")[1];
    t = "";
    for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r.substring(0, 2);//保留2位小数  如果要改动 把substring 最后一位数改动就可  
}

//格式化编号(按长度用空格隔开)
function separationInput(element, len) {
    var arrOld = [];
    var arrNew = [];
    var value = $(element).val();
    for (var i = 0; i < value.length; i++) {
        if (value[i] !== " ") {
            arrOld.push(value[i]);
        }
    }
    for (i = 0; i < arrOld.length; i++) {
        arrNew.push(arrOld[i]);
        if ((i + 1) % len === 0 && i < (arrOld.length-1)) {
            arrNew.push(" ");
        }
    }
    $(element).val(arrNew.join(""));
}

//placeholder(兼容低版本浏览器)
jQuery.fn.placeholder = function () {
    var i = document.createElement('input'),
		placeholdersupport = 'placeholder' in i;
    if (!placeholdersupport) {
        var inputs = jQuery(this);
        inputs.each(function () {
            var input = jQuery(this),
				text = input.attr('placeholder'),
				pdl = 0,
				height = input.outerHeight(),
				width = input.outerWidth(),
				placeholder = jQuery('<span class="phTips">' + text + '</span>');
            if ($(this).hasClass("freeRedInput")) width = 230;
            try {
                pdl = input.css('padding-left').match(/\d*/i)[0] * 1;
            } catch (e) {
                pdl = 5;
            }
            placeholder.css({ 'margin-left': -(width - pdl - 5), 'height': height, 'line-height': height + "px", 'position': 'absolute', 'color': "#797874", 'font-size': "14px" });
            placeholder.click(function () {
                input.focus();
            });
            if (input.val() !== "") {
                placeholder.css({ display: 'none' });
            } else {
                placeholder.css({ display: 'inline' });
            }
            placeholder.insertAfter(input);
            input.keyup(function (e) {
                if (jQuery(this).val() !== "") {
                    placeholder.css({ display: 'none' });
                } else {
                    placeholder.css({ display: 'inline' });
                }
            });
        });
    }
    return this;
};

//用户信息展示
//教师
function ShowTeacherInfo(obj, id, container) {
    ShowUserInfo(obj, id, container, "/Shared/UserInfo", "教师信息");
}

//obj传this
//id为用户Id
function ShowUserInfo(obj, id, container, url, title) {
    HideUserInfo();
    container = container ? ('#' + container) : "body";
    var placement =($(document).outerWidth() / $(obj).offset().left < 2)?"left":"right";
    $.post(url, { Id: id }, function (data) {
        $(obj).popover({
            container: container,
            html: true,
            content: data,
            placement: placement,
            title: "<i class='icon-user'></i>&nbsp;"+title+"<button type='button' class='close' onclick='HideUserInfo()'><span aria-hidden='true'>&times;</span></button>",
            trigger: 'manual',
            template: '<div class="popover userinfo-show"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        });
        $(obj).popover('show');
    });
}

function HideUserInfo() {
    $("div.userinfo-show").remove();
}


//收藏教师
function CollectTeacher(id,obj) {
    $.post("/Stu/Teacher/Collect", { Id: id}, function (data) {
        if (data.Result) {
            if (data.Operate) {
                $(obj).html("<span><i class='glyphicon glyphicon-star'></i>取消收藏</span>");
            } else {
                $(obj).html("<span><i class='glyphicon glyphicon-star-empty'></i>收藏教师</span>");
            }
            $("form.refresh-collectionTeacher").submit();
        }
    });
}
