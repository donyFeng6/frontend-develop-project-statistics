<!DOCTYPE html>
<html class="ks-webkit537 ks-webkit ks-chrome45 ks-chrome">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="keywords" content="">
	<meta name="author" content="">
	<meta name="description" content="">
	<title>用户登录-注册</title>
	<link rel="shortcut icon" href="http://www.tuobar.com/favicon.ico" type="image/x-icon">
	<!--[if lte IE 9]>
		<script type="text/javascript"src="assets/html5shiv.js"></script>
	<![endif] -->
	<!-- fxpx.css -->
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="assets/login.css">
</head>
<body>
		<header class="fl-header">
			<ul>
				<li><img src="assets/20141009164227.png" alt=""></li>
			</ul>
		</header>
		<section class="fl-personal " id="js-personal">
			<!-- 用户登录 -->
			<article class="row fl-login" id="js-login">
				<div class="header form-inline">
					<h2 class="title">欢迎登录拖把儿爱飞行</h2>
					<div class="yyzh">还没有账号？<a href="register.php">来这里注册吧</a></div>
				</div>
				<!--  表单 -->
				<form class="" id="js-userlogin" autocomplete="off">
					<!-- 抵消浏览器自动填充表单 -->
					<input type="password" class="sr-only">
					<!-- 切换 -->
					<ul class="tab col-md-12" id="js-lgtrigger">
						<li class="col-md-6 active" data-id="0"><span class="icon"></span><span>普通账号登录</span></li>
						<li class="col-md-6" data-id="1"><span class="icon"></span><span>手机动态密码登录</span></li>
					</ul>
					<!-- 普通登录 -->
					<div class="profil col-md-12">
						<div class="form-group">
							<input type="text"  class="form-control" data-type="u" name="user" value="" placeholder="手机号 / 邮箱 / 账户">
							<span></span>            
						</div>
						<div class="form-group">
							<input type="password" name="pwd" data-type="p" class="form-control" placeholder="登录密码">
							<span></span>            
						</div>
					</div>
					<!-- 手机动态登录 -->
					<div class="profil col-md-12">
						<div class="form-group">
							<input type="text" name="tel" data-type="m" class="form-control" placeholder="手机号">
							<span></span>            
						</div>
						<div class="form-group verify">
							<div class=" col-md-8">
								<input type="password" name="pwd" data-type="p" class="form-control" placeholder="收到的动态密码">
								<span></span>            
							</div>            
							<a class="btn btn-default  col-md-4" data-id="teldylogin" href="javascript:void(0)">获取动态密码</a>
							<span></span>            
						</div>
					</div>
					<button type="submit" class="submit btn btn-danger">立即登录</button>
				</form>
				<div class="resetpaw">咦？忘记密码了！ <a href="retrieve.php">点我找回</a></div>
			</article> 
			<!-- 用户登录结束 -->
			<div class="fl-elselogin">
				<h3 class="title">第三方登录</h3>
				<a class="btn iconfont btn1" href="javascript:void(0)">&#xe648;</a>
				<a class="btn iconfont btn2" href="javascript:void(0)">&#xe657;</a>
				<a class="btn iconfont btn3" href="javascript:void(0)">&#xe636;</a>
			</div>         
				
		</section>
		<ul id="js-bg" class="u-togglebg"></ul>
	<script type="text/javascript" src="http://libs.baidu.com/jquery/1.8.1/jquery.min.js"></script>
	<script type="text/javascript" src="assets/login.js"></script>
</body>
</html>