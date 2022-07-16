 $(function(){
 	// 幻灯片
 	sliderInit();
 	// 侧边导航
  var tagArr = [];
  // 侧边导航检测id移动
  $('#js-aside li').each(function(i,k){
    tagArr[i] = $($(this).data('link')).position().top;
  });
  // 点击侧边导航移动到相对应内容
  $('#js-aside').on('click','li',function(){
    $('html,body').animate({scrollTop:tagArr[$(this).index()]},400);
  });

  $(window).on('scroll',function(){
    var stop = $(this).scrollTop(); // 获取距离屏幕顶部的高度
    if(stop > 400){
      $('#js-aside').addClass('fix-cb');//添加导航固定样式
      $(tagArr).each(function(i,k){
        if(k > (stop+200)){
          if (i<=0) {i=1;};//个数不能小于0
          $('#js-aside').find('li').removeClass('active').eq(i-1).addClass('active');
          return false;
        };
        if (i === tagArr.length-1) {
          $('#js-aside').find('li').removeClass('active').eq(i).addClass('active');
          console.log(tagArr.length+","+i);
        };
         
      });
    }else{
      $('#js-aside').removeClass('fix-cb'); //导航去掉固定定位
      $('#js-aside').find('li').removeClass('active').eq(0).addClass('active');//恢复默认状态
    }
  });
});
$(function(){
  //点击屏蔽罩隐藏表单 
  $("#js-pingbizhao").on("click",function(){
    $("#js-yyzxcon").addClass("fxpx-hide");
  });
  // 预约咨询点击弹出表单
  $('a[data-zhixun="yuyue"]').on("click",function(){
      $("#js-yyzxcon").removeClass("fxpx-hide");
  });
  // 预约咨询点击隐藏表单
  $("#js-cancel").on("click",function(){
      $("#js-yyzxcon").addClass("fxpx-hide");
  });
  // 
  $("#js-bdqueding").on("click",function(){
    $("#js-zxbiaodan").reset();
    location.href = location.href ;
  });

  // 表单提交数据
  $("#js-zxbiaodan").on("submit",function(){

  	$(this).find('input').next().text('');

    var yname = $(this).find('input[name=name]'); // 预约咨询人姓名
    var sex = $(this).find('input[name=sex]'); // 预约咨询人性别
    var age = $(this).find('input[name=age]');// 预约咨询人年龄
    var moblie = $(this).find('input[name=phone]');// 预约咨询人手机号
    var email = $(this).find('input[name=email]');// 预约咨询人邮箱
    var linktime =$(this).find('input[name="linktime"]:checked').val(); // 顾问联系时间
    // 验证姓名
    if (!/^[\u4e00-\u9fa5]+$/.test(yname.val())) {
     	yname.next().text('姓名只能是中文');
      yname.focus();
      return false;
    };
    // 验证年龄
		if(!/^[0-9]{1,2}$/.test(age.val())){
			age.next().text('请输入正确的年龄!');
      age.focus();
			return false;
    };      	
    // 验证手机号码输入不为空
  	if(moblie.length < 1){      				
			moblie.next().text('请输入手机号码');
      moblie.focus();
			return false;
  	};	
    // 验证手机号码格式
    if(!(/^1\d{10}$/.test(moblie.val()))){
      moblie.next().text('手机号码错误');
      moblie.focus();
      return false;
    };  	
		// 验证邮箱格式 
		if((email.val()!= "") && !(/\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/.test(email.val()))){
			email.next().text('邮箱错误');
      email.focus();
			return false;
		};
    var datum = $(this).serialize(); //序列化表单获取数据
    $.ajax({
      type:"post",
      url:"http://baidu.com",
      dataType:"json",
      data:datum
    })
    .done(function(res){
      if (res=="success") {
        console.log("success");
      };
    }).error(function(){

    });

		$("#js-zxbiaodan").addClass("fxpx-hide").next().removeClass("fxpx-hide");//提交完成后显示倒计时页面
    return false;
  });


  // 设置倒计时时间  按秒计
  function countdown(eid,nb){
  	var djshj=nb;
    var time = setInterval(function(){
      djshj--;
      if (djshj < 1) {
      	clearInterval(time);
      	location.reload();
      };          
      $(eid).text(djshj);
    },1000);
  };

});
function sliderInit(){
  var oSlider = $('#js-slider');
  var oTag = oSlider.find('.carousel li');
  var oTab = oSlider.find('.banner ul').children();
  var index = 0; //当前值
  var time = 4000;//动画切换时间
  var timer;//定时时间
  var nTop = 79;
  if($.browser.msie && jQuery.browser.version < 8){
    nTop = 83;
  }
  oSlider.find('.up').on("click",function(){
    index--;
    gotopage();
  });
  oSlider.find('.down').on("click",function(){
    index++;
    gotopage();
  });
  // 侦听点击事件
  oTag.on('click',function(){
      index = $(this).index();
      gotopage();
  });
  //  定时器
  timer = setInterval(aototime,time);
  oSlider.hover(function(){
      clearInterval(timer);
  },function(){
      timer = setInterval(aototime,time);
  });
  // 定时函数
  function aototime(){
    index++;
    gotopage();
  }
  // 跳转函数
  function gotopage(){
    if(index > oTag.length-1){
        index = 0;
    }else if(index < 0){
        index = oTag.length-1;
    }
    // oTab.css('top',-index*310);
    //oTag.removeClass('now').eq(index).addClass('now');

    oTab.stop(true,false).fadeOut(600).eq(index).fadeIn(600);
    if (index>2) {
      oTag.parent().css("top",-(index-2)*nTop);
    }else{
      oTag.parent().css("top",0);
    };
    oTag.removeClass('now').eq(index).addClass('now');
  }
}
