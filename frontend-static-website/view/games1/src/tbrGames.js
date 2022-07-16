define(function(require,exports,module){
	$.ajaxSetup({
		cache : false
	});
	// 创建TGM游戏引擎
	var TGM = TGM || {
		// 配置文件
		config : {
			level 			: 0,				// 开始关卡
			levelAll 		: 0,				// 总关卡
			levelTime		: 10,				// 关卡倒计时，可以是数字或者数组
			Package			: null,			// 资源列表
			// 音效
			Audio : null
		},
		// 游戏数据统计
		statistics : {
			level				: 0,				// 当前关卡
		},
		/**
		 * 资源加载策略
		 * @param {字符串} type	要加载的资源类型如 IMG,CSS,JS
		 * @param {array} list	资源列表，数组形式
		 * @param {函数} fn 每次加载完的回调函数
		 */
		loadPackage : function(type,list,fn){
			// 加载CSS资源
			if(type == 'IMG'){
				var ii = 0;
				$(list).each(function(i,k){
					// 创建图片对象
					var imgID = new Image(); 
		      imgID.src = k; 
		      // 图片加载
		      imgID.onload = function(){
		      	ii++;
		      	if(!!fn){
		      		fn(ii,k,list.length);
		      	}
		      }
	      });
	    // 加载CSS / JS / HTML 资源
			}else{
				var ii = 0;
				$(list).each(function(i,k){
					// 使用GET加载资源
      		$.post(k,function(){
      			if(!!fn){
      				ii++;
		      		fn(ii,k,list.length);
		      	}
      		});
      	});
			}
		},
		// 初始化游戏资源
		initPackage : function(){
			var PackageState = 0;
			// 加载图片资源包
			TGM.loadPackage('IMG',TGM.config.Package.IMG,function(i,k,l){
				//$('#games-loading').find('.img').html('第'+i+'张图片加载完成，总共'+l+'张图片');
				if(i==l){
					PackageState ++;
					initPackageComplete();
				}
			});
			
			// 加载JS资源包
			TGM.loadPackage('file',TGM.config.Package.JS,function(i,k,l){
				$('#games-loading').find('.js').html('第'+i+'个JS加载完成，总共'+l+'个JS');
				if(i==l){
					PackageState ++;
					initPackageComplete();
				}
			});
			// 加载CSS资源包
//			TGM.loadPackage('file',TGM.config.Package.CSS,function(i,k,l){
//				$('#games-loading').find('.css').html('第'+i+'个CSS加载完成，总共'+l+'个CSS');
//				if(i==l){
//					PackageState ++;
//					initPackageComplete();
//				}
//			});
			// 加载音效资源包
			TGM.loadPackage('file',TGM.config.Package.Audio,function(i,k,l){
				$('#games-loading').find('.audio').html('第'+i+'个音频加载完成，总共'+l+'个音频');
				if(i==l){
					PackageState ++;
					initPackageComplete();
				}
			});
			// 加载模板资源包
			TGM.loadPackage('file',TGM.config.Package.module,function(i,k,l){
				if(i==l){
					PackageState ++;
					initPackageComplete();
				}
			});
			// 检查资源加载完成状态
			function initPackageComplete(){
				$('#games-loading').find('p').css('width',PackageState*25+'%');
				$('#games-loading').find('.number').text(PackageState*25+'%');
				if(PackageState * 0.25 == 1){
					$('#games-loading').find('.number').text('正在进入游戏界面');
					// 清除超时加载
					clearTimeout(chaoshi);
					// 停留1S钟进入游戏
					setTimeout(TGM.gameInit,1000);
				}
			}
			// 超时资源加载超时则直接进入游戏
			var chaoshi = setTimeout(function(){
				$('#games-loading').find('p').css('width','100%');
				$('#games-loading').find('.number').text('100%');
				$('#games-loading').find('.number').text('正在进入游戏界面');
				setTimeout(TGM.gameInit,1000);
			},10000);
		},
		/**
		 * 播放音效函数，可以播放指定的音效
		 * @param {字符串} name 音效名字
		 * @param {数字} time 持续时间 毫秒
		 * @param {布尔值} loop 是否循环
		 */
		palyAudio : function(name,loop,time){
			// 设置初始化值
			var audioURL = TGM.config.Audio[name];
			var loop = loop ? 'loop="loop"' : '';
			// 生成DOM结构
			var html = '<audio id="gamesAudio" src="'+audioURL+'" autoplay="autoplay" '+loop+'></audio>';
			// 添加新的音效
			$('#gamesAudio').remove();
			$('#gamesapp').after(html);
			// 如果设置了时间则到指定的时间就暂停声音
			if(!!time){
				setTimeout(function(){
					document.getElementById('gamesAudio').pause();
				},time);
			}
		},
		// 场景动画
		Animate : function(){
			$('#gamesapp').find('.animated').each(function(){
				var amType = $(this).data('am-type');
				var amTime = $(this).data('am-time');
				var _this = $(this);
				$(this).hide();
				setTimeout(function(){
					_this.show().addClass(amType);
				},amTime);
			});
		},
		timerinit : function(dom,time,callback){
			var html = '<div class="box"><span class="m">00</span>:<span class="s">'+time+'</span>:<span class="ms">00</span></div>';
			var sStr = time;
			$(dom).html(html);
			var mstimer = setInterval(function(){
				$(dom).find(".ms").text(Math.ceil(Math.random()*60));
			},10);
			
			var stimer = setInterval(function(){
				time--;
				sStr = time;
				if(sStr < 10){
					sStr = "0"+time;
				}
				$(dom).find(".s").text(sStr);
				
				// 时间结束执行回调函数
				if (time <= 0) {
					clearInterval(stimer);//清除定时器
					clearInterval(mstimer);//清除定时器
					if (typeof callback == 'function') {
						callback();
					};
				};			
			},1000);
		},
		// 游戏开始
		gameStart : function(opt){
			
		},
		// 游戏结束
		gameOver : function(){
			// 加载游戏结束页面
			$.ajax({
				type:"post",
				url:"module/gameover.html",
				dataType : 'html',
				success : function(data){
					setTimeout(function(){
						// 载入场景到页面中
						$('#gamesapp').html(data);
						// 激活场景动画
						TGM.Animate(); 
					},1000);
				}
			});
		},
		// 游戏封面
		gameInit : function(){
			$.ajax({
				type:"post",
				// url:"module/gameinit.html",
				// url:"module/cover.html",
				// url:"module/cover_pk.html",
				url:"module/gameover_an.html",
				// url:"module/gameover_pk.html",
				dataType : 'html',
				success : function(data){
					setTimeout(function(){
						// 载入场景到页面中
						$('#gamesapp').html(data);
						// 激活场景动画
						TGM.Animate(); 
					},1000);
				}
			});
		},
		// 下一关
		nextlevel : function(){
			// 关卡+1
			TGM.statistics.level  ++;
			if(TGM.statistics.level > TGM.config.levelAll){
				TGM.gameOver();
				return false;
			}
			// 加载关卡页面
			$.ajax({
				type:"post",
				url:"module/level"+TGM.statistics.level+".html",
				dataType : 'html',
				success : function(data){
					/*alert("module/level"+TGM.statistics.level+".html");
					alert(data);*/
					setTimeout(function(){
						// 载入场景到页面中
						$('#gamesapp').html(data);
						// 激活场景动画
						TGM.Animate(); 
					},1000);
				}
			});
		},
		gameReset : function(){
			TGM.statistics = [];
			TGM.statistics.level = 0;
			TGM.gameInit();
		}
	}
	module.exports = TGM;
});