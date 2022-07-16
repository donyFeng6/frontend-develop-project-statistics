// seajs 配置
seajs.config({
	charset : 'utf-8',
	paths : {
		module : '../module/'
	},
  // 别名配置
  alias : {
  	'jquery' : 'jquery.min.js',
  	'seacss' : 'sea-css.js',
  	'seatext': 'sea-text.js',
  	'TGM'		 : 'tbrGames.js',
  	'package': 'package-config.js'
  }
});