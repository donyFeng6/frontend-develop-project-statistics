//google统计
//(function (i, s, o, g, r, a, m) {
//	i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
//        (i[r].q = i[r].q || []).push(arguments);
//    }, i[r].l = 1 * new Date(); a = s.createElement(o),
//  m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g;
//    m.parentNode.insertBefore(a, m);
//})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
//ga('create', 'UA-39065003-2', 'met365.com');
//ga('send', 'pageview');

//国双统计
(function () {
	var s = document.createElement('script');
	s.type = 'text/javascript';
	s.async = true;
	s.src = (location.protocol == 'https:' ? 'https://ssl.' : 'http://static.') + 'gridsumdissector.com/js/Clients/GWD-000746-CFDAB5/gs.js';
	var firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(s, firstScript);
})();

var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
//百度统计
document.write("<div style='display:none'>" + unescape("%3Cscript src='" + _protocol + "hm.baidu.com/h.js%3F1a57b066ab5ac0f3382d05bc7cfb37df' type='text/javascript'%3E%3C/script%3E") + "</div>");
//cnzz统计 
document.write("<div style='display:none'>" + unescape("%3Cspan id='cnzz_stat_icon_1253333984'%3E%3C/span%3E%3Cscript src='" + _protocol + "s9.cnzz.com/z_stat.php%3Fid%3D1253333984%26show%3Dpic' type='text/javascript'%3E%3C/script%3E") + "</div>");
//信誉名片代码
document.write("<div style='display:none'>" + unescape("%3Cscript src='" + _protocol + "hm.baidu.com/h.js%3F323288ddd20bffa5726cd8c7d68a8f6e' type='text/javascript'%3E%3C/script%3E") + "</div>");

//注册完成后统计
function statistic_register() {
    guoshuang_register();
}

//国双统计(注册)
function guoshuang_register() {
    if (window.GridsumWebDissector) {
        var _gsTracker = GridsumWebDissector.getTracker('GWD-000746');
        //_gsTracker.setCustomProperty('1', IdNo);
        _gsTracker.track('/targetpage/reg.html');
    }

}