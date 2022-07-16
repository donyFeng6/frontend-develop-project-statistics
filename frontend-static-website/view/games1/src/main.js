define(function(require,exports,module){
	require('jquery'); // 导入jquery支持
	var TGM = require('TGM');	// 导入TGM支持
	
	// 配置游戏
	TGM.config.levelAll = 3;				// 共三个关卡
	TGM.config.levelTime = 20;			// 关卡倒计时
	
	// 导入资源包配置文件
	Package = require('package');
	TGM.config.Package = Package;
	TGM.initPackage();
	
	// 定义音效
	TGM.config.Audio = {
		'dianji' : Package.Audio[0],				// 点击
		'zhuanpan' : Package.Audio[1]				// 转盘
	};
	
	// 游戏开始
	TGM.gameStart = function(){
		TGM.nextlevel();	// 激活下一个关卡
	}
});