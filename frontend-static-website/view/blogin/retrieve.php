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
		<!-- 找回密码 -->
		<section class="row fl-personal fl-retrieve " id="js-retrieve">
			<article class="retrieve">
				<div class="header form-inline">
					<h2 class="title">找回密码</h2>
				</div>
				<!--  表单 -->
				<form class="" id="js-forgotpwd" autocomplete="off">
					<!-- 抵消浏览器自动填充表单 -->
					<input type="password" class="sr-only">
					<!-- 切换 -->
					<ul class="tab col-md-12" id="js-zhhtrigger">
						<li class="col-md-6 active" data-id="0"><span class="icon"></span><span>手机找回</span></li>
						<li class="col-md-6" data-id="1"><span class="icon"></span><span>邮箱找回</span></li>
					</ul>
					<!-- 手机找回 -->
					<div class="profil col-md-12 ">
						<div class="form-group">
							<input type="text" name="tel" data-type="m" class="form-control" placeholder="您之前注册的手机号">
							<span></span>            
						</div>
						<div class="form-group verify">
							<div class=" col-md-8">
								<input type="password" name="telver" data-type="v" class="form-control" placeholder="收到的短信验证码">
							</div>            
							<a class="btn btn-default  col-md-4"  data-id="telforgotpwd"  href="javascript:void(0)">获取短信验证码</a>
							<span></span>            
						</div>
					</div>

					<!-- 邮箱找回 -->
					<div class="profil col-md-12">
						<div class="form-group">
							<input type="email" name="email" data-type="e" class="form-control" placeholder="您之前注册的邮箱号">
							<span></span>            
						</div>
						<div class="form-group verify">
							<div class=" col-md-8">
								<input type="password" name="emver" data-type="v" class="form-control" placeholder="收到的邮箱验证码">
							</div>            
							<a class="btn btn-default  col-md-4"  data-id="emaforgotpwd"  href="javascript:void(0)">获取邮箱验证码</a>
							<span></span>            
						</div>
					</div>
					<button type="submit" class="submit btn btn-danger">立即找回</button>
					<a href="login.php" class="btn btn-primary backtrack">返回登录</a>
				</form>
			</article>
		</section>  
		<!-- 找回密码结束 -->
		<ul id="js-bg" class="u-togglebg"></ul>
	<script type="text/javascript" src="http://libs.baidu.com/jquery/1.8.1/jquery.min.js"></script>
	<script type="text/javascript" src="assets/login.js"></script>
</body>
</html>