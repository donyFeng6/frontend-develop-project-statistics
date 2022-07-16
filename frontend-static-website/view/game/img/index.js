$(document).ready(function() {
	 Psychological()
	 timerinit(".timer",'10');
	var eyesAll="0"     	// 最强鹰眼全部题目
	var eyesCorrect="0" 	// 最强鹰眼正确回答题目
	var eyeserror="0"   	// 最强鹰眼错误回答题目
	var xlkyAll="0"     	// 心理抗压全部题目
	var xlkyCorrect="0" 	// 心理抗压正确回答题目
	var xlkyerror="0"   	// 心理抗压错误回答题目
	var fpltstAll="0"     	// 分配力测试全部题目
	var fpltstCorrect="0" 	// 分配力测试正确回答题目
	var fpltsterror="0"   	// 分配力测试错误回答题目
	
	/**
	 * 点击切换不同游戏关卡页面
	 */
	$(".js-pagecut").on("click",function(){		
		var index = $(this).data("link");
		var item = $("#js-main").find(".pg-item");
		item.removeClass("active").eq(index).addClass("active");
		if (index == "2") {
			eyesTest(); //最强鹰眼
		};
		if (index == "4") {
			Psychological(); //心理抗压
		};
		if (index == "6") {
			flyStateTst(); //分配力测试 
		};		
		timerinit(".timer",'10',function(){
			item.removeClass("active").eq(index+1).addClass("active");
			var answer = "<dl>"
			answer += "<dt>最强鹰眼：</dt>"
			answer += "<dd><span>全部题目："+eyesAll+"</span><span>正确回答题目："+eyesCorrect+"</span><span>错误回答题目："+eyeserror+"</span></dd>"
			answer += "<dt>心理抗压：</dt>"
			answer += "<dd><span>全部题目："+xlkyAll+"</span><span>正确回答题目："+xlkyCorrect+"</span><span>错误回答题目："+xlkyerror+"</span></dd>"
			answer += "<dt>分配力测试：</dt>"
			answer += "<dd><span>全部题目："+fpltstAll+"</span><span>正确回答题目："+fpltstCorrect+"</span><span>错误回答题目："+fpltsterror+"</span></dd>"
			answer += "</dl>"
			$("#js-consequence").html(answer);
		});
	});
	/**
  	 * 最强鹰眼测试 
  	 */
  	function eyesTest(){
  		// 是否在动画中
  		var motion = true; 
  		// 声明角度数据
  		var angular = [0,45,90,135,180,225,270,315];
  		var turnDir;	// 随机方向
  		randDirection();//初次调用方向
  		function randDirection(){
  			// 设置动画状态为true
  			motion = true;
  			// 赋值随机数
  			turnDir = (createRand(8)-1);
  			soundEffect("qgturn.wav",500);//转动音效开始
  			// 转动转盘
  			$("#js-turncircle").addClass("turncircle"); // 添加动画
			$("#js-turncircle").css("transform","rotate("+angular[turnDir]+"deg)"); //赋值随机数		
  			setTimeout(function(){
  				// 删除动画
  				$("#js-turncircle").removeClass("turncircle");
  				motion =false; //设置动画状态为false
  			},500);
  		}
  		// 鼠标移入选择方向
  		$('#js-direction').on('touchend','li',function(){
  			// 动画状态中不可选择答案
  			if(motion){
  				return false;
  			}
  			if($(this).index()  == turnDir){
  				eyesCorrect++;// 正确
  			}
  			eyesAll++; //全部
  			eyeserror = (eyesAll-eyesCorrect); //错误
  			// 重新随机正确方向
  			randDirection();
  		});
  	};
	/**
	 * 心理抗压测试函数
	 */
  	function Psychological(){

  		var result=""; //合成答案
  		addTopic(); //初次调用
  		/**
  		 * 添加题目和答案
  		 */
  		function addTopic(){
		  	var count1 = $("#js-count1").find(".exprs"); //第一个表达式
		  	var count2 = $("#js-count2").find(".exprs"); //第二个表达式
		  	var typeId =["+","-","+","-"]; //运算符号
		  	// 随机表达式
		  	var createE = createRandom(3,0,9);

		  	var roand1 = createRand(9)+typeId[createRand(4)-1]+createRand(9)+typeId[createRand(4)-1]+createRand(9);
		  	var roand2 = createRand(9)+typeId[createRand(4)-1]+createRand(9)+typeId[createRand(4)-1]+createRand(9);
		  	
		  	var roand3 = createE[0]+typeId[createRand(4)-1]+createE[1]+typeId[createRand(4)-1]+createE[2];
		  	console.log(roand3);
		  	//打印随机表达式
		  	count1.text(roand1);
		  	count2.text(roand2);


			//获取计算结果
		  	var answer1 = comSubDone(count1.text());
		  	var answer2 = comSubDone(count2.text());
			/**
			 * 计算三位运算函数
		     * @param {Object} str 计算表达式
		     * calculateDone('3+2+1')
			 */
		  	function calculateDone(str){
		    	var arr = str.split("");
		    	var num = 0;
		    	if(arr[1] == '+'){
		    		num = parseInt(arr[0]) + parseInt(arr[2]);
		    	}else{
		    		num = parseInt(arr[0]) - parseInt(arr[2]);
		    	};
		    	if(arr[3] == '+'){
		    		num = parseInt(num) + parseInt(arr[4]);
		    	}else{
		    		num = parseInt(num) - parseInt(arr[4]);
		    	}
		    	return num;
	  		};
		  	
		  	
		  	/*
		  	// 显示结果
		    $("#js-answer4").text(answer1);
		    $("#js-answer5").text(answer2);	
		    */
		    //	正确结果
		    result = answer1+'<span class="gap">,</span>'+answer2;	  			
		    console.log(answer1+","+answer2);
		    // 错误结果  
		    var diffRand = createRandom(4,-3,3);
		    var result1 = (answer1+diffRand[0])+'<span class="gap">,</span>'+(answer2+diffRand[1]);	  			
		    var result2 = (answer1+diffRand[3])+'<span class="gap">,</span>'+(answer2+diffRand[2]);	  			
    
		    // 打印结果到按钮
		    var btn = $("#js-answer").find(".btn");
		    var resultarr = [result,result1,result2];
		    // 随机排序
		    resultarr.sort(randomSort);
		    function randomSort(a, b){
			    return Math.random() - 0.5;
			};
			
			// 添加内容
		    $(resultarr).each(function(i,k){
		    	btn.eq(i).html(k);
		    });
		    
    	};
  		/**
	     * 计算三位运算函数
	     * @param {Object} str 计算表达式
	     *comSubDone('3+2+1')
	     */
	    function comSubDone(str){
	    	var arr = str.split("");
	    	var num = 0;
	    	if(arr[1] == '+'){
	    		num = arr[0] - arr[2];
	    	}else{
	    		num = parseInt(arr[0]) + parseInt(arr[2]);
	    	};
	    	if(arr[3] == '+'){
	    		num = num - arr[4];
	    	}else{
	    		num = parseInt(num) + parseInt(arr[4]);
	    	}
	    	return num;
  		};
  		// 鼠标移入选择事件			
  		$('#js-answer').on('touchend','.btn',function(){		  			
  			soundEffect("dianjibtn.wav",1000); //按钮点击音效
  			$("#js-answer").find(".btn").attr("disabled",true); //按钮禁用
  			// 如果选择正确答案
  			if ($(this).html() == result) {
  				xlkyCorrect++;
  			};
  			xlkyAll++; // 所有的题目数
  			addTopic();
  			setTimeout(function(){
	  			$("#js-answer").find(".btn").attr("disabled",false); //按钮可用
	  		},200);	
	  		xlkyerror = (xlkyAll-xlkyCorrect);			  
  		});
  	};
  	/**
	 *分配力测试 
	 */
  	function flyStateTst(){

  		var random; //随机数值
  		var arr = [
  			[-6,-2,30],[-4,-3,50],[-5,-2,45],[-2,1,35],[-1,1,40],
  			[-6,-3,50],[-4,-2,32],[0,1,25],[-4,-3,55],[-5,-3,43],
  			[-6,2,-38],[-3,0,-29],[-2,-6,-56],[1,2,-46],[-3,-5,-25],
  			[2,-2,-30],[-1,2,-34],[-4,-3,-26],[-3,-2,-55],[-2,0,-38],
  			[-2,1,-37],[1,-4,-26],[0,-2,-28],[-3,2,-10],[-4,2,-39],
  			[-1,-2,-46],[-4,-2,-38],[0,1,-40],[1,2,-48],[-2,2,-55],
  		];
  		randstate();//初次调用
  		function randstate(){
  			// 随机数赋值
  			random = (createRand(30)-1);
  			$("#js-velocity .meterva").css('top',(arr[random][0]*12));
  			$("#js-altitude .meterva").css('top',(arr[random][1]*12));
  			$("#js-levelness img").css('transform',"rotateZ("+arr[random][2]+"deg)");
  			console.log(random);
  		};
  		// 鼠标移入选择状态
  		$("#js-fpltest").on("touchend",'.btn',function(){
  			soundEffect("dianjibtn.wav",500); //按钮点击音效
  			$("#js-fpltest").find(".btn").attr("disabled",true); //按钮禁用
  			var index = $(this).index();  			
  			if (random<10 && index == "0") {
					// 正确
					fpltstCorrect++;
  			}else if (random >= 10 && random < 20 && index == "1"){
					// 正确
					fpltstCorrect++;
  			}else if (random >= 20 && random<30 && index == "2") {
					// 正确
					fpltstCorrect++;
				}
  			fpltstAll++;
  			randstate();
	  		setTimeout(function(){
	  			$("#js-fpltest").find(".btn").attr("disabled",false); //按钮可用
	  		},200);
	  		fpltsterror = (fpltstAll-fpltstCorrect);
  		});
  	};

	/**
  	 *获取随机数
  	 */
		function createRand(max){
		var ranNum=Math.ceil(Math.random()*max);
		return ranNum;
		};
   	/**
   	 * createRandom() 获取不相同的随机数
   	 * @param {Object} num 要产生多少个随机数
   	 * @param {Object} from 产生随机数的最小值
   	 * @param {Object} to 产生随机数的最大值
   	 *createRandom(10,0,50)生成10组0到50不重复的随机数
   	 */
    function createRandom(num , from , to)
    {
        var arr=[];
        var json={};
        while(arr.length<num)
        {
            //产生单个随机数
            var ranNum=Math.ceil(Math.random()*(to-from))+from;
            //通过判断json对象的索引值是否存在 来标记 是否重复
            if(!json[ranNum])
            {
                json[ranNum]=1;
                arr.push(ranNum);
            }
             
        }
        return arr;
    };

    /**
	 * 设置倒计时(60秒内)
	 * @param {Object} dom 倒计时盒子
	 * @param {Object} time 倒计时时间数(秒)
	 * @param {Object} callback 执行回调
	 */
	function timerinit(dom,time,callback){
		var arTi = time.split("");tenSeBit
		var tenSeBit = arTi[0];	//倒计时十秒位
		var seconds =arTi[1]; //倒计时秒位
		//初始时间
		var html = "<span>0</span><span>0</span>:<span class='shiwei'>"+tenSeBit+"</span><span class='seconds'>"+seconds+"</span>";
		$(dom).html(html);
		var timer = setInterval(function(){
			seconds--;
			time--;
			if (seconds < 0) {
				tenSeBit-- ;
				seconds = 9;
			};
			//计算时间
			$(dom).find(".shiwei").text(tenSeBit);
			$(dom).find(".seconds").text(seconds);
			if (time <= 0) {
				clearInterval(timer);//清除定时器
				if (typeof callback == 'function') {
					callback();
				};
			};				
		},1000);
	};

	/**
	 * 播放音效函数
	 * @param {Object} url 播放地址
	 * @param {Object} time 播放时间
	 */
	function soundEffect(url,time){
		var audio = document.createElement("audio");		
		$(audio).attr("src",url);
		$(audio).attr("autoplay","autoplay");
		setTimeout(function(){
			$(audio)[0].pause()
		},time);
	};
	
});

