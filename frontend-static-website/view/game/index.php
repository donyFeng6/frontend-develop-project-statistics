<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<!-- pc端 移动端缩放及布局 -->
	<meta name="viewport"content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<!-- 360浏览器优先使用 chrome内核 -->
	<meta name='renderer' content='webkit'>
	<title>飞行员超能力测试游戏--拖把儿爱飞行</title>
	<link rel="stylesheet" type="text/css" href="img/index.css">
</head>
<body >
	<div class="pg-main" id="js-main">
		<section class="pg-item active">
			<div class="avindex"style="margin:45% auto;text-align:center;">
			<p>首页</p>
			<a class="js-pagecut"data-link="1"style="height: 25px; display:block;" href="javascript:void(0)">下一页</a>				
			</div>
		</section>
		<!-- 最强鹰眼 -->
		<!-- 转场 -->
		<section class="gz-compressive pg-item ">
			<h2 class="title"><img class="slogan" src="img/chnlz.png"><img class="slogan genre"src="img/zqyinyan.png"></h2>
			<div class="gz-tbg"><img src="img/zhuangchang_04.png"></div>
			<div class="gz-con">
				<h2 class="title"><img src="img/youxigz.png"></h2>
				<p class="explain">10s内，选择C表缺口的指向方向。 </p>
				<div class=" vision"><img src="img/zhuangchangfx_03.png"><img src="img/zhuangchangfx_01.png"></div> 
				<a class="statenow js-pagecut" data-link="2" href="#eyesTest"></a>  
			</div>
		</section>

		<section class="pg-item"id="eyesTest">
			<div class="m-alarmclock"><img src="img/alarm.png"><div class="timer"></div></div>
			<div class="m-turncircle"><img class="turncircle" id="js-turncircle" src="img/direction.png"></div>
			<footer class="m-direction">
				<ul id="js-direction">
					<li class="btn cen"></li>
					<li class="btn1"></li>
					<li class="btn2"></li>
					<li class="btn3"></li>
					<li class="btn4 cen"></li>
					<li class="btn5 foot"></li>
					<li class="btn6 foot"></li>
					<li class="btn7 foot"></li>
				</ul>
			</footer>
		</section>
		<!-- 最强鹰眼结束 -->

		<!-- 心理抗压 -->
		<!-- 转场 -->
		<section class="gz-compressive pg-item ">
			<h2 class="title"><img class="slogan" src="img/chnlz.png"><img class="slogan genre"src="img/xinliky.png"></h2>
			<div class="gz-tbg"><img src="img/zhuangchang_04.png"></div>
			<div class="gz-con">
				<h2 class="title"><img src="img/youxigz.png"></h2>
				<p class="explain">10s内，加减相反运算，加就是减， 减就是加。</p>
				<div class="example"><img src="img/jisuanti.png"></div> 
				<a class="statenow js-pagecut" data-link="4" href="#mentalitytst"></a>  
			</div>
		</section>

		<section class="pg-item " id="mentalitytst">
			<div class="m-alarmclock"><img src="img/alarm.png"><div class="timer"></div></div>
			<div class="m-content">
				<div class="formula" id="js-count1">
					<span class="exprs"></span>=<span class="answer" id="js-answer4"></span>
				</div>
				<div class="formula" id="js-count2">
					<span class="exprs"></span>=<span class="answer"id="js-answer5"></span>
				</div>			
			</div>
			<footer class="m-answerbtn"id="js-answer">
				<a class="btn" href="javascript:void(0)"></a>
				<a class="btn btn1" href="javascript:void(0)"></a>
				<a class="btn btn2" href="javascript:void(0)"></a>
			</footer>
		</section>
		<!-- 心理抗压结束 -->

		<!-- 分配力测试 -->
		<!-- 转场 -->
		<section class="gz-compressive pg-item">
			<h2 class="title"><img class="slogan" src="img/chnlz.png"><img class="slogan genre"src="img/fplcs.png"></h2>
			<div class="gz-tbg"><img src="img/zhuangchang_04.png"></div>
			<div class="gz-con">
				<h2 class="title"><img src="img/youxigz.png"></h2>
				<p class="explain">10s内，根据仪表变化判断飞机飞行状态。  </p>
				<div class="meterset"><img src="img/fpl_01.png"></div> 
				<a class="statenow js-pagecut" data-link="6" href="#flyStateTst"></a>  
			</div>
		</section>

		<section class="pg-item " id="flyStateTst">
			<div class="m-alarmclock"><img src="img/alarm.png"><div class="timer"></div></div>
			<div class="m-flystate">
				<div class="meter sudu" id="js-velocity">
					<img src="img/fpxs_021.png" alt="">
					<div>
						<ul class="meterva">
							<li>200</li>
							<li>180</li>
							<li>160</li>
							<li>140</li>
							<li>120</li>
							<li>100</li>
							<li>80</li>
							<li>60</li>
							<li>40</li>
							<li>20</li>
						</ul>						
					</div>
				</div>				
				<div class="meter gaodu" id="js-altitude">
					<img src="img/fpxs_031.png" alt="">
					<div>
						<ul class="meterva">
							<li>2000</li>
							<li>1800</li>
							<li>1600</li>
							<li>1400</li>
							<li>1200</li>
							<li>1000</li>
							<li>800</li>
							<li>600</li>
							<li>400</li>
							<li>200</li>
							<li>0</li>
						</ul>						
					</div>						
				</div>
				<div class="leveldu" id="js-levelness"><img src="img/flyjq06.png" alt=""></div>
			</div>
			<footer class="m-fpltest" id="js-fpltest">
				<a class="btn" href="javascript:void(0)"></a>
				<a class="btn btn1" href="javascript:void(0)"></a>
				<a class="btn btn2" href="javascript:void(0)"></a>
			</footer>
		</section>		
		<!-- 分配力测试结束 -->
		<section class="pg-item">
			<div class="acas" id="js-consequence"></div>
		</section>				
	</div>

	<!-- 心理抗压结束 -->
	<script type="text/javascript" src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="img/index.js"></script>
</body>
</html>
