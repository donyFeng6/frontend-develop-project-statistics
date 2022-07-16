define(function(require,exports,module){
	require("jquery");
	// 导航搜索输入框获取焦点
	$("#js-textsear").on("focus",function(){
		$("#js-sousuocp").addClass("m-search-focus");
	}).on("blur",function(){
		$("#js-sousuocp").removeClass("m-search-focus");
	});
	var menu =  $("#js-menu>li"); //获取导航菜单
	// 鼠标移入导航菜单时下拉选项
	menu.on("mouseenter",function(){
		$(this).siblings('li').find('.m-product').slideUp().stop();
		$(this).find(".m-product").slideDown();
	});
	// 鼠标移出导航菜单时收回
	menu.on("mouseleave",function(){
		menu.find(".m-product").stop().slideUp();
	});

	var ksdh = $("#js-kuaishudaohang>li"); //获取快速导航栏菜单
	// 鼠标移入快速导航栏菜单时出现相对应的产品
	ksdh.on("mouseenter",function(){
		$(this).siblings('li').find('.m-xxcplist').hide().stop();
		$(this).find(".m-xxcplist").show();
	});
	// 鼠标移入快速导航栏菜单时隐藏产品
	ksdh.on("mouseleave",function(){
		ksdh.find(".m-xxcplist").stop().hide();
	});
}); 
