function share(type) {
   /*
	* 作者：叶世立
	* 通过ajax交互读取数据
	* */  
   $.ajax({
	type:'get',
	url:'/youxiw/woyaowan_share/ty/'+type,
	dataType:"json",
	success:function(data){
	 }
	});
}