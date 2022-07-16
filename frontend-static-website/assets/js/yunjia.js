/*
charset=utf-8
*/
$(document).ready(function() {

	// 获取文档可视宽度
	var kswidth = $(document.body).width();
	$("#js-slider .banner").find("li").css("width",kswidth);
	$("#js-slider .banner").css("left",-kswidth);

	/*点击分类搜索*/
	$("#js-typebtn").on("click",function(e){
		$("#js-typebox").toggle(); //分类搜索
		e.stopPropagation(); //阻止事件冒泡
	});
	/*点击按类别搜索*/
	$("#js-typebox").on("click","li.item",function(){
		$("#js-typebox").find("li.item").removeClass("active");
		$(this).addClass("active");
		$("#js-sousuonr").attr('placeholder','搜索'+$(this)[0].innerText);
	});
	/*点击服务平台下拉菜单*/
	$("#js-lxjyfw").on("click",function(e){
		$("#js-xlmenu").toggle(); //下拉导航菜单
		e.stopPropagation(); //阻止事件冒泡
	});
	//点击文档时，隐藏显示层
	$(document).on("click",function() {
		$("#js-typebox").hide();//分类搜索
		$("#js-xlmenu").hide(); //下拉导航菜单
	});
	// 
	$("#js-djcdan").on("click",function(){
		var menu = $("#js-menunav");//导航菜单
		if (menu[0].className == 'm-menu') {
			menu.addClass('vanish');
			return;
		};
		menu.removeClass("vanish");

	});
	// 轮播图函数
	function banner(n){
		// 轮播id
		var slider = $(n.slider);//轮播盒子id
		var carouselbox = $(n.carousel); //banner盒子
		var banner = $(n.carousel).children(); //banner图片
		var toggle = $(n.toggles).children(); //选择当前内容
		var times = (n.Times);// 轮播时间
		var index=1;// 当前banner
		
		// 点击上一个banner
		slider.find(".up").on("click",function(){
			index--;
			carousel();
		});
		// 点击下一个banner
		slider.find(".down").on("click",function(){
			index++;
			carousel();
		});

		// 点击选择当前内容
		toggle.on("click",function(e){
			index= $(this).index();
			carousel();
		});

		//自动播放设置
		var timer = setInterval(function(){
			index++;
			carousel();
		},times);
		// 鼠标移出banner继续
		$("#js-slider").on("mouseleave",function(){
			timer = setInterval(function(){
				index++;
				carousel();
			},times);
		});
		// 鼠标移入暂停播放
		$("#js-slider").on("mouseover",function(){
			clearInterval(timer);
		});
		
		// 向末尾追加第一个内容
		var f_banner = banner.first().clone();
		carouselbox.append(f_banner);
		// 向前添加末尾内容
		var l_banner = banner.last().clone();;
		carouselbox.prepend(l_banner);


		// 轮播图切换
		function carousel(){

			// 当是大于最后一个的时候
			if (index>banner.length-1) {
				// carouselbox.css('left',-((kswidth*index)+kswidth));				
				index=0;//重置轮播状态
				// return;
			};
			// 当是小于第一个的时候
			if (index<0) {				
				// carouselbox.css('left',-((kswidth*index)+kswidth));
				index=(banner.length-1); //到最后一个
				// return;
			};
			// 轮播导航状态
			toggle.removeClass("active").eq(index).addClass("active");
			/*
			// li下的图片宽度
			var width = banner[index].clientWidth;			
			// 轮播向左移动
			carouselbox.css('left',-((width*index)+width));
			// 为当前轮播添加一个状态
			banner.removeClass("active").eq(index).addClass("active");			
			// 显示隐藏效果轮播
*/
		
			banner.stop(true,false).hide().removeClass("active").eq(index).show().addClass("active");

		}

	};
	banner({
		slider:"#js-slider",
		carousel:"#js-slider  .banner",
		toggles:"#js-slider  .toggle",
		Times:5000
	});



	$(window).scroll(function () {
		// 获取屏幕显示内容距离头部高度
		var wst = $(window).scrollTop();
		//高度小于200出现导航否则取消
		if (wst>200) {
			$("#js-menufixed").addClass("m-menufixed");
		}else{
			$("#js-menufixed").removeClass("m-menufixed");
		};
		// var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
	});

});
