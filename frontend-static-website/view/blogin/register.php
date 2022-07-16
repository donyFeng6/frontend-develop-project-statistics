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
			<!-- 用户注册 -->
			<article class="row fl-register"id="js-register">
				<div class="header form-inline">
					<h2 class="title">欢迎注册拖把儿爱飞行</h2>
					<div class="yyzh">已有账号？<a href="login.php">马上登录</a></div>
				</div>
				<!--  表单 -->
				<form class="" id="js-userregister" autocomplete="off">
					<!-- 切换 -->
					<ul class="tab col-md-12" id="js-rstrigger">
						<li class="col-md-6 active" data-id="0"><span class="icon"></span><span>手机号码注册</span></li>
						<li class="col-md-6" data-id="1"><span class="icon"></span><span>邮箱号注册</span></li>
					</ul>
					<!-- 手机注册 -->
					<div class="profil col-md-12">
						<div class="form-group">
							<input type="text" name="user" data-type="u" class="form-control" placeholder="用户名">
							<span></span>            
						</div>
						<div class="form-group">
							<input type="text"  name="tel" class="form-control" data-type="m" placeholder="手机号码">
							<span></span>            
						</div>
						<div class="form-group">
							<input type="password" name="pwd1" class="form-control" data-type="p" placeholder="密码">
							<span></span>            
						</div>
						<div class="form-group">
							<input type="password" name="pwd2" data-type="rp" class="form-control" placeholder="密码确认">
							<span></span>            
						</div>
						<div class="form-group verify">
							<div class=" col-md-8">
								<input type="password" name="imgcode" class="form-control" data-type="n" placeholder="右侧图文验证码">
								<span></span>            
							</div>
							<a class="btn btn-default col-md-4 teltxt" href="javascript:void(0)" onclick="this.childNodes[0].src = this.childNodes[0].src+'?'"><img src="http://www.tuobar.com/include/vdimgck.php" alt=""></a>
							<span></span>            
						</div>
						<div class="form-group verify">
							<div class=" col-md-8">
								<input type="password" name="telver" class="form-control" data-type="v" placeholder="手机验证码">
								<span></span>            
							</div>            
							<a class="btn btn-default col-md-4"  data-id="teldyreg" href="javascript:void(0)">获取手机验证码</a>
							<span></span>            
						</div>
					</div>

					<!-- 邮箱注册 -->
					<div class="profil col-md-12">
						<div class="form-group">
							<input type="text" name="user" class="form-control" data-type="u" placeholder="用户名">
							<span></span>            
						</div>
						<div class="form-group">
							<input type="email" name="email" class="form-control" data-type="e" placeholder="邮箱号">
							<span></span>            
						</div>
						<div class="form-group">
							<input type="password" name="pwd1" class="form-control" data-type="p" placeholder="密码">
							<span></span>            
						</div>
						<div class="form-group">
							<input type="password" name="pwd2" data-type="rp" class="form-control" placeholder="确认密码">
							<span></span>            
						</div>
						<div class="form-group verify">
							<div class=" col-md-8">
								<input type="password" name="imgcode" class="form-control" data-type="n" placeholder="右侧图文验证码">
								<span></span>            
							</div>
							<a class="btn btn-default  col-md-4 teltxt" href="javascript:void(0)" onclick="this.childNodes[0].src = this.childNodes[0].src+'?'"><img src="http://www.tuobar.com/include/vdimgck.php" alt=""></a>
							<span></span>            
						</div>
						<div class="form-group verify">
							<div class=" col-md-8">
								<input type="password" name="emver" class="form-control" data-type="v" placeholder="邮箱验证码">
								<span></span>            
							</div>            
							<a class="btn btn-default  col-md-4" data-id="emailverify" href="javascript:void(0)">获取验证码</a>
							<span></span>            
						</div>
					</div>
					<button type="submit" class="submit btn btn-danger">注册</button>
				</form>
			</article>
			<!-- 用户注册结束 -->

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