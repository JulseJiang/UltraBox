$(function(){
	layer.open({
		type: 0,
		title: "提示",
		shadeClose: true,
		shade: ['0.7','#000'],
		content: "<img src='img/qRcode.jpg' style='width:80px;height:80px;'/><span style='margin-left:20px;'>请关注微信号</span>"
	});
	
	$('.box-height').height($('.box-height').width());
	$('.box').height((($('.box-width').width()-38)/5)+"px");
	$('.box').width((($('.box-width').width()-38)/5)+"px");
	
	var sHeight = document.documentElement.scrollHeight;
	var sWidth = document.documentElement.scrollWidth;
	$('.info').height(sHeight);
	$('.info').width(sWidth*0.8);
	
	var oMask = $('.mask');
	oMask.height(sHeight+'px');
	oMask.width(sWidth+'px');
});
	function user(){
		layer.open({
			type: 2,
			title: false,
			closeBtn: 0, //不显示关闭按钮
			shadeClose: true,
			shade: ['0.45','#000000'],
			area: ['80%', '100%'],
			offset: 'lt', //右下角弹出
			content: ['user.html', 'no'], //iframe的url，no代表不显示滚动条
		});
	}