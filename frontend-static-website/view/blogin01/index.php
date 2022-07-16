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
    <script type="text/javascript"src="/website/assets/plugins/html5shiv/html5shiv.js"></script>
  <![endif] -->
  <!-- fxpx.css -->
  <link rel="stylesheet" type="text/css" href="/website/assets/plugins/bootstrap-3.3.5/dist/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="assets/login.css">
</head>
<body>
    <header class="fl-header">
      <ul>
        <li><img src="assets/20141009164227.png" alt=""></li>
      </ul>
    </header>
    <section class="fl-personal" id="js-personal">
      <!-- 用户登录 -->
      <article class="row fl-login" id="js-login">
        <div class="header form-inline">
          <h2 class="title">欢迎登录拖把儿爱飞行</h2>
          <div class="yyzh">还没有账号？<a href="#register">来这里注册吧</a></div>
        </div>
        <!--  表单 -->
        <form class="" id="js-userlogin" autocomplete="off">
          <!-- 切换 -->
          <ul class="tab col-md-12" id="js-lgtrigger">
            <li class="col-md-6 active" data-id="0"><span class="icon"></span><span>普通账号登录</span></li>
            <li class="col-md-6" data-id="1"><span class="icon"></span>手机动态密码登录</span></li>
          </ul>
          <!-- 普通登录 -->
          <div class="profil col-md-12">
            <div class="form-group">
              <input type="text"  class="form-control" data-type="u" name="user" value="" placeholder="手机号">
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
        <div class="resetpaw">咦？忘记密码了！ <a href="#retrieve">点我找回</a></div>
      </article> 
      <!-- 用户登录结束 -->

      <!-- 用户注册 -->
      <article class="row fl-register hidden"id="js-register">
        <div class="header form-inline">
          <h2 class="title">欢迎注册拖把儿爱飞行</h2>
          <div class="yyzh">已有账号？<a href="#login">马上登录</a></div>
        </div>
        <!--  表单 -->
        <form class="" id="js-userregister" autocomplete="off">
          <!-- 切换 -->
          <ul class="tab col-md-12" id="js-rstrigger">
            <li class="col-md-6 active" data-id="0"><span class="icon"></span><span>手机号码注册</span></li>
            <li class="col-md-6" data-id="1"><span class="icon"></span>邮箱号注册</span></li>
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
              <input type="password" name="pwd2"  class="form-control" placeholder="密码确认">
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
              <input type="password" name="pwd2" class="form-control" placeholder="确认密码">
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
    <!-- 找回密码 -->
    <section class="row fl-personal fl-retrieve hidden" id="js-retrieve">
      <article class="retrieve">
        <div class="header form-inline">
          <h2 class="title">找回密码</h2>
        </div>
        <!--  表单 -->
        <form class="" id="js-forgotpwd" autocomplete="off">
          <!-- 切换 -->
          <ul class="tab col-md-12" id="js-zhhtrigger">
            <li class="col-md-6 active" data-id="0"><span class="icon"></span><span>手机找回</span></li>
            <li class="col-md-6" data-id="1"><span class="icon"></span>邮箱找回</span></li>
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
          <a href="#login" class="btn btn-primary backtrack">返回登录</a>
        </form>
      </article>
    </section>  
    <!-- 找回密码结束 -->

    <div class="fl-bg" id="js-bgload">
      <div class="item"><img src="assets/flg_03.jpg" alt=""> </div>
    </div>    
  <script type="text/javascript" src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
  <script type="text/javascript" src="assets/login.js"></script>
</body>
</html>