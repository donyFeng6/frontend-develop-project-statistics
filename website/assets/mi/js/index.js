define(function(require,exports,module){
	require("jquery");
	// ��������������ȡ����
	$("#js-textsear").on("focus",function(){
		$("#js-sousuocp").addClass("m-search-focus");
	}).on("blur",function(){
		$("#js-sousuocp").removeClass("m-search-focus");
	});
	var menu =  $("#js-menu>li"); //��ȡ�����˵�
	// ������뵼���˵�ʱ����ѡ��
	menu.on("mouseenter",function(){
		$(this).siblings('li').find('.m-product').slideUp().stop();
		$(this).find(".m-product").slideDown();
	});
	// ����Ƴ������˵�ʱ�ջ�
	menu.on("mouseleave",function(){
		menu.find(".m-product").stop().slideUp();
	});

	var ksdh = $("#js-kuaishudaohang>li"); //��ȡ���ٵ������˵�
	// ���������ٵ������˵�ʱ�������Ӧ�Ĳ�Ʒ
	ksdh.on("mouseenter",function(){
		$(this).siblings('li').find('.m-xxcplist').hide().stop();
		$(this).find(".m-xxcplist").show();
	});
	// ���������ٵ������˵�ʱ���ز�Ʒ
	ksdh.on("mouseleave",function(){
		ksdh.find(".m-xxcplist").stop().hide();
	});
}); 
