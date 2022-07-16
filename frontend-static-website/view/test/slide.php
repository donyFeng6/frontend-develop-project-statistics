<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>幻灯片</title>
<style type="text/css">

	ol,ul{ margin: 0; padding: 0;}
	ol li,ul li{list-style: none;}

	.fxpx-slider{ position: relative;width: 1000px; height: 336px; margin: 0 auto; border-radius: 8px; overflow: hidden;}
	.fxpx-slider .banner{position: relative;width: 100%;height: 0;padding-bottom: 33.5% ; overflow: hidden;}
	.fxpx-slider .banner>li{position:absolute;top: 0;left: 0;right: 0;display: none;}
	.fxpx-slider .banner>li.active{display: block;}
	.fxpx-slider .banner>li a{width: 100%; display:block;}
	.fxpx-slider .banner>li img{width: 100%; display:block;border: 0;}

	.fxpx-slider .carousellist{width: 100%; position:absolute;bottom: 5%;left: 0%; margin: 0;}
	.fxpx-slider .carousel{text-align: center;}
	.fxpx-slider .carousel>li{display:inline-block; *zoom:1;*display:inline; width: 13px;height: 13px;padding: 10px;cursor: pointer; list-style: none; background:url(assets/point1.png);background-position: center center;background-repeat: no-repeat;}
	.fxpx-slider .carousel>li:hover{background:url(assets/point2.png);background-position: center center;background-repeat: no-repeat;}
	.fxpx-slider .carousel>li.now{background:url(assets/point2.png);background-position: center center;background-repeat: no-repeat;}

	.fxpx-slider>a{display: none;width: 45px;height: 220px; position: absolute;top: 18%;}
	.fxpx-slider:hover>a{display: block;}
	.fxpx-slider>.left{left: 5%; background:url(assets/left.png);background-position: center center;background-repeat: no-repeat;}
	.fxpx-slider>.right{right: 5%; background:url(assets/right.png);background-position: center center;background-repeat: no-repeat;}
</style>
</head>
<body>
	<header class="fxpx-header">
      <!-- 幻灯片 -->
      <div class="fxpx-slider" id="js-slider">
        <ul class="banner">
          <li class="active"><a href="javascript:void(0);"><img src="assets/slide_01.jpg"></a></li>
          <li class="active"><a href="javascript:void(0);"><img src="assets/slide_02.jpg"></a></li>
          <li class="active"><a href="javascript:void(0);"><img src="assets/slide_03.jpg"></a></li>
          <li class="active"><a href="javascript:void(0);"><img src="assets/slide_05.jpg"></a></li>
        </ul>
        <div class="carousellist">
 	        <ol class="carousel"><li class="now"></li><li></li><li></li><li></li></ol>       	
        </div>

        <a class="left" href="javascript:void(0)"></a><a class="right" href="javascript:void(0)"></a>
      </div>
      <!-- 幻灯片结束 -->
	</header>
	<script type="text/javascript" src="http://libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript">
		// 幻灯片函数
	    sliderInit();
	    function sliderInit(){
	        var slider = $("#js-slider"); //幻灯片
	        var banner = slider.find(".banner").children(); //轮播图
	        var carousel = slider.find(".carousel").children();  //列表显示
	        var index = 0; //当前值
	        var timer = 0 ; //定时器
	        var time = 4000; //动画间隔时间
	        // 侦听点击事件
	        carousel.on("click",function(){
		        index = $(this).index();
		        lunbotu();
	        });
	        // 点击向左切换移动
	        slider.on("click","a.left",function(){
		        index--;
		        lunbotu();
	        });
	        // 点击向右切换移动
	        slider.on("click","a.right",function(){
		        index++;
		        lunbotu();
	        });
	        timer = setInterval(aototime,time); //设置设置定时器
	        // 鼠标移入清除定时器，移出恢复定时器
	        slider.hover(function(){
	          	clearInterval(timer);
	        },function(){
	          	timer = setInterval(aototime,time);
	        });
	        // 定时器函数
	        function aototime(){
	          	index++;
	          	lunbotu();
	        };
	        function lunbotu(){
	          	if (index > banner.length-1) {
	           	 	index = 0; 
	         	}else if (index < 0) {
	            	index = banner.length-1;
	          	};
	          	// 当前列表切换
	          	carousel.removeClass("now").eq(index).addClass("now");
	          	// 幻灯片播放
	          	banner.stop(true,false).fadeOut(500).removeClass("active").eq(index).fadeIn(500).addClass("active");
	        }
	    };
	</script>
</body>
</html>
