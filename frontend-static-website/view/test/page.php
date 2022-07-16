<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>分页</title>
<style type="text/css">
	a,a:hover,a:visited,a:link{text-decoration: none;}
	ol,ul{ margin: 0; padding: 0;}
	ol li,ul li{list-style: none;}
	.zly-news-list {margin-top: 5%; text-align: center; font-family: "Microsoft YaHei",SimHei,Verdana,Arial,sans-serif;}

	.zly-news-list .pg{line-height: 26px; position: absolute; right: 15px; margin: 0 auto; font-size: 14px; font-weight: 600;}
	.zly-news-list .pg a,.zly-news-list .pg strong{display: inline-block; line-height: 28px; float: left; padding: 0 10px; margin-left: -1px;  border: 1px solid #e6e9ed; text-align: center; vertical-align: middle; color: #6f6f6f;}
	.zly-news-list .pg a:hover{background-color: #E2E2E2; text-decoration: underline; color: #ff6f3d;}
	.zly-news-list .pg strong{color: #FFF;background-color: #ff6f3d;border: 0;}
	.zly-news-list .pg a{line-height: 26px;}
	.zly-news-list .pg label{display: none; float: left; margin:0 5px; vertical-align:middle;}

</style>
</head>
<body>
	<div class="zly-news-list">
		<div class="pg">
			<a href="index-2#news" class="prev">上一页</a>
			<strong>1</strong>
			<a href="index-2#news">2</a>
			<a href="index-3#news">3</a>
			<a href="index-3#news">3</a>
			<label>
				<input type="text" name="custompage" class="px" size="2" title="输入页码，按回车快速跳转" value="1" onkeydown="if(event.keyCode==13) {window.location='index-'+this.value;; doane(event);}">
				<span title="共 3 页"> / 3页</span>
			</label>
			<a href="index-2#news" class="nxt">下一页</a>
		</div>	
	</div>


	<script type="text/javascript" src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
</body>
</html>
