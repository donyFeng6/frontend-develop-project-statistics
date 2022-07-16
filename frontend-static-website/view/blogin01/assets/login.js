$(function () {
	
	var personal =  $("#js-personal");  //信息DOM
	var register =  $("#js-register");  //用户注册DOM
	var login =  $("#js-login"); 		//登录DOM
	var retrieve =  $("#js-retrieve");  //密码找回DOM
	var triggerstars = false;			// 防止循环点击
     
	// 切换登录模块html
	var userbox = login.find(".profil").eq(0).clone();
	var phonebox = login.find(".profil").eq(1).clone();
	login.find(".profil").eq(1).remove();
	// 用户登录切换开关
	$("#js-lgtrigger").on('click',"li",function(){
		// 防阻止冒泡
		if($(this).hasClass("active")|| triggerstars){
			return false;
		};
		// 防止循环点击
		triggerstars = true;
		setTimeout(function(){triggerstars = false;	},1000);
		// 当前状态
		$(this).addClass("active").siblings("li").removeClass("active");
		// 添加动画
		loadAnimat(personal,"animation",1000);

		login.find(".profil").eq(0).before(userbox );
		login.find(".profil").eq(1).remove();	
		// 显示或隐藏密码找回
		login.find(".resetpaw").removeClass("hidden");
		if ($(this).data("id") == 1) {
			login.find(".resetpaw").addClass("hidden");
			login.find(".profil").eq(0).before(phonebox);
			login.find(".profil").eq(1).remove();
		};
	});
	// 切换注册模块html
	var regtelbox = register.find(".profil").eq(0).clone();
	var regemailbox = register.find(".profil").eq(1).clone();
	register.find(".profil").eq(1).remove();
	// 用户注册切换开关
	$("#js-rstrigger").on('click',"li",function(){
		// 防阻止冒泡
		if($(this).hasClass("active")|| triggerstars){
			return false;
		};
		// 防止循环点击
		triggerstars = true;
		setTimeout(function(){triggerstars = false;	},1000);
		// 当前状态
		$(this).addClass("active").siblings("li").removeClass("active");
		// 添加动画
		loadAnimat(personal,"animation",1000);
		// 切换注册内容
		register.find(".profil").eq(0).before(regtelbox);
		register.find(".profil").eq(1).remove();
		if ($(this).data("id")) {
			register.find(".profil").eq(0).before(regemailbox);
			register.find(".profil").eq(1).remove();
		};
	});

	// 切换注册模块html
	var resetTelbox = retrieve.find(".profil").eq(0).clone();
	var resetEmailbox = retrieve.find(".profil").eq(1).clone();
	retrieve.find(".profil").eq(1).remove();
	// 密码找回切换开关
	$("#js-zhhtrigger").on('click',"li",function(){
		// 防阻止冒泡
		if($(this).hasClass("active") || triggerstars){
			return false;
		};
		triggerstars = true;
		setTimeout(function(){triggerstars = false;	},1000);
		// 当前状态
		$(this).addClass("active").siblings("li").removeClass("active");
		// 添加动画
		loadAnimat(retrieve,"animation",1000);
		// 切换注册内容
		retrieve.find(".profil").eq(0).before(resetTelbox);
		retrieve.find(".profil").eq(1).remove();
		if ($(this).data("id")) {
			retrieve.find(".profil").eq(0).before(resetEmailbox);
			retrieve.find(".profil").eq(1).remove();
		};
	});

	// 注册切换到登录事件
	personal.on('click','a[href="#login"]',function(){
		// 切换动画
		loadAnimat(personal,"animation",1000);
		// 内容切换
		register.addClass("hidden");
		login.removeClass("hidden");
	});
	// 登录切换到注册事件
	personal.on('click','a[href="#register"]',function(){
		// 切换动画
		loadAnimat(personal,"animation",1000);
		// 内容切换
		login.addClass("hidden");
		register.removeClass("hidden");
	});
	// 登录切换到密码找回事件
	personal.on('click','a[href="#retrieve"]',function(){
		// 内容切换
		personal.addClass("hidden");
		retrieve.removeClass("hidden");
		// 切换动画
		loadAnimat(retrieve,"animation",1000);
	});
	// 注册切换到登录事件
	retrieve.on('click','a[href="#login"]',function(){
		// 切换动画
		loadAnimat(personal,"animation",1000);
		// 内容切换
		personal.removeClass("hidden");
		retrieve.addClass("hidden");
	});

	// 手机动态密码登录点击获取验证码
	login.on("click",'a[data-id="teldylogin"]',function(){
		var phone = login.find('input[name="tel"]'); //获取手机号
		if(!dynapwdver(phone,phone.data('type'))){
			console.log("error");
			return false;
		};
		// 重发验证码
		jgTime($(this),10);
		console.log("手机动态登录");
	});


	// 手机动态密码注册点击获取验证码
	register.on("click",'a[data-id="teldyreg"]',function(){
		var phone = register.find('input[name="tel"]'); //获取手机号
		if(!dynapwdver(phone,phone.data('type'))){
			console.log("error");
			return false;
		};
		// 重发验证码
		jgTime($(this),10);
		console.log("手机验证注册");
	});
	// 邮箱获取验证码点击事件
	register.on("click",'a[data-id="emailverify"]',function(){
		var email = register.find('input[name="email"]'); //获取手机号
		if(!dynapwdver(email,email.data('type'))){
			console.log("error");
			return false;
		};
		// 重发验证码
		jgTime($(this),10);
		console.log("邮箱验证注册");
	});



	// 手机密码找回点击获取验证码
	retrieve.on("click",'a[data-id="telforgotpwd"]',function(){
		var phone = retrieve.find('input[name="tel"]');
		if(!dynapwdver(phone,phone.data('type'))){
			console.log("error");
			return false;
		};
		// 重发验证码
		jgTime($(this),10);
		console.log("手机密码密码找回");
	});
	//  邮箱密码找回点击获取验证码
	retrieve.on("click",'a[data-id="emaforgotpwd"]',function(){
		var email = retrieve.find('input[name="email"]');
		if(!dynapwdver(email,email.data('type'))){
			console.log("error");
			return false;
		};
		// 重发验证码
		jgTime($(this),10);
		console.log("邮箱密码找回");
	});

	// 用户登录提交表单
	$("#js-userlogin").on("submit",function(){
		
		if (!verifyCode('#js-userlogin')) {
			console.log('error');
			return false;
		};
		console.log($(this).serialize());
		console.log('done');
		return false;
	});
	// 用户注册提交表单
	$("#js-userregister").on("submit",function(){

		var pwd1 = register.find('input[name="pwd1"]'); //密码验证
		var pwd2 = register.find('input[name="pwd2"]'); //密码验证
		if(pwd1.val() != pwd2.val()){
			pwd2.next('span').text("输入密码不一致");
			return false;
		};
		if (!verifyCode('#js-userregister')) {
			console.log('error');
			return false;
		};
		console.log($(this).serialize());
		console.log('done');
		return false;
	});
	// 密码重置提交表单
	$("#js-forgotpwd").on("submit",function(){
		if (!verifyCode('#js-forgotpwd')) {
			console.log('error');
			return false;
		};
		console.log($(this).serialize());
		console.log('done');
		return false;
	});

	// 密码重置
	$("#js-resetpwd").on("submit",function(){
	    var pwd1 = $(this).find("input[name=pwd1]");
	    var pwd2 = $(this).find("input[name=pwd2]");
	    if (!(/^([A-Za-z0-9]){2,16}$/.test(pwd1.val()))) {
	      pwd1.focus().next("span").text("请输入正确的密码");
	      return false;
	    };
	    pwd1.next("span").text("");
	    if (pwd1.val() != pwd2.val()) {
	      pwd2.focus().next("span").text("两次密码不一致");
	      return false;
	    };
	    pwd2.next("span").text("");
	    
	    console.log($(this).serialize());
	    
	    return false;
	}); 


	/**
	 *动态加载动画类
	 *box 动画类id claName动画类 time间隔时间
	 */
	function loadAnimat(box,claName,time){
		box.addClass(claName);
		setTimeout(function(){
			box.removeClass(claName);
		},time);
	};

	/**
	 *时间间隔函数
	 * btn 按钮触发，time时间停止
	 */
	function jgTime(btn,time){		
		// 时间
		var time = time;
		var Interval = setInterval(function(){
			time--;
			// 添加禁用
			btn.addClass("disabled").text('重发验证码（'+time+'）');
			if (time <= 0) {
				// 清除禁用状态
				btn.removeClass("disabled").text('重发验证码');
				//清除时间
				clearInterval(Interval); 
			};
		},1000);
	};
	/**
	 *num 获取号码对象
	 *type 类型
	 *动态密码验证
	 */
	function dynapwdver(num,type){
		var number = num; //获取手机号
		var rxpOBJ = {
			'm' 	: /^0?(11|12|13|14|15|16|17|18|19)[0-9]{9}$/, 	// 手机号码
			'e' 	: /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/ // 邮件
		};
		// 预设错误提示
		var rxpOBJ_tips = {
			'm' 	: '手机号码格式错误', 	// 手机号码
			'e' 	: '输入邮箱不正确'		// 邮件
		};
		if (number.val() == '') {
			if (type == "m") {
				number.focus().next("span").text("请输入手机号");
			};
			if (type == "e") {
				number.focus().next("span").text("请输入邮箱");
			};			
			return false;
		};
		if (!(rxpOBJ[type].test(number.val()))) {
			number.focus().val('').next("span").text(rxpOBJ_tips[type]);
			return false;			
		};		
		number.next("span").text("");
		return true;
	};
	/**
	 *form 表单id
	 * 表单提交验证码函数
	 */
	function verifyCode(form){
		var form = $(form);
		var formState = false;
		// 预设正则匹配
		var rxpOBJ = {
			'*' 	: /^\S/,						// 非空
			'n' 	: /^([+-]?)\d*\.?\d+$/, 		// 数字类型
			'u' 	: /^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/, // 用户名验证
			'zh' 	: /^[\u4e00-\u9fa5]+$/, 		// 仅中文
			'm' 	: /^0?(11|12|13|14|15|16|17|18|19)[0-9]{9}$/, 	// 手机号码
			'e' 	: /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/, // 邮件
			'p'		: /^([A-Za-z0-9]){2,16}$/,		// 密码
			'v'		: /^([A-Za-z0-9]){4,8}$/		// 验证码
		};
		// 预设错误提示
		var rxpOBJ_tips = {
			'*' 	: '不能为空',			// 非空
			'n' 	: '只能输入数字', 		// 数字类型
			'u' 	: '请输入正确的用户名',	// 用户名验证
			'zh' 	: '只能输入中文', 		// 仅中文
			'm' 	: '手机号码格式错误', 	// 手机号码
			'e' 	: '错误的邮件地址',		// 邮件
			'p'		: '请输入正确的密码',	// 密码
			'v'		: '验证码输入错误'		// 验证码
		};
		form.find('input[data-type]:enabled').each(function(i,k){
			var type = $(this).data('type');	// 验证类型
			var val = $(this).val();	// 验证类型
			var state = false;					// 验证状态，默认为不通过验证
			var rxp = (type == 'rxp') ? $(this).data('rxp') : rxpOBJ[type]; // 获取验证规则
			rxp = new RegExp(rxp);
			state = rxp.test(val);
			if (!state) {
				$(this).focus().val('').next("span").text(rxpOBJ_tips[type]);
				return state;
			};
			$(this).next("span").text('');

			formState = state;
		});
		return  formState;
	};

});

$(document).ready(function(){
		
	var bimg = [['assets/flg_01.jpg'],['assets/flg_02.jpg'],['assets/flg_03.jpg']];
	/*function loadImage(){
		var bgd = $("#js-bgload"); //图片box
		var index = 0;
		var interval;
		triggerbg(bgd.find('div'),5000);	
		// 加载切换图片 
		function triggerbg(box,time){
			interval = setInterval(function(){
			 	index++;
			 	if (index>bimg.length-1) {
			 		index = 0;
			 	};
			 	loadImg(bimg[index],function(img){
			 		box.html(img);
			 	});
			},time);
		};
		// 加载完成执行函数
	    function loadImg(url,callback){
			var img = new Image();
	   		img.src = url;
			img.onload = function () { //图片下载完毕时异步调用callback函数。
				if (img.complete) {
					callback(img);//将回调函数的this替换为Image对象
				}
			}; 
	    };		
	};*/


	// 执行图片加载函数并使用回调函数
	loadImg(bimg,function(){
		// 切换代码
	});
	function loadImg(arr,callback){
		var index = 0;
		$(arr).each(function(i,k){
			var img = new Image();
   			img.src = k;
			img.onload = function () { //图片下载完毕时异步调用callback函数。
				index ++;
				if (index == 1) {
					callback();//将回调函数的this替换为Image对象
				}
			}; 
		});
	}
});



