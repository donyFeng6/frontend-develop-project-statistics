$(function () {
    $("a.course-video-show").each(function() {
        var dialogid = $(this).data("dialogid");
        var url = "http://meteni.gensee.com/training/site/v/" + dialogid + "?nickname=" + encodeURIComponent("为您提供英语口语服务");
        $(this).attr("href", url).attr("target", "_blank");
    });

    $("a.course-enter").each(function () {
        var dialogid = $(this).data("dialogid");
        var nickname = $(this).data("nickname");
        var token= $(this).data("token");
        var url = "http://meteni.gensee.com/training/site/s/" + dialogid + "?nickname=" + encodeURIComponent(nickname) + "&token=" + token + "&sec=md5";
        $(this).attr("href", url).attr("target", "_blank");
    });
});