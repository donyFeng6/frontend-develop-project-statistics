$(function(){
	var num = 1;
	$('#js-popup').on('click',function(index){
		// $('#js-menu').toggle(function(){});
		if(num==1){
			$('#js-menu').addClass('popup');
			num++
			return;
		}
		$('#js-menu').removeClass('popup');
		num = 1;
		console.log(index);
	});
});
/*
//原始js代码
function popup(){
	var menu = document.getElementById('js-menu');
	console.log(menu.className);
	if (menu.className=="menu  popup") {
		menu.className = "menu";
		return;
	};
	menu.className = menu.className+'  popup';
};
document.getElementById('js-popup').onclick=function(){
	popup();
};

*/