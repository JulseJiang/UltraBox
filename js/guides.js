$('.pic_place').width($('.pic').width());
	var oNav = $('.nav').width()/3;
	$('.guides').width(oNav-1);
	$('.food').width(oNav);
	$('.culture').width(oNav-1);
	
	
	var oHeight = $(window).height();
	$('.panel').height(oHeight-$('.pic_place').height()-$('.nav').height()-30-17);
	$('.panel').width($('.nav').width()-2);
	
	$('.guides').hover(function(){
		$('.guides').css("background","#61C8B4");
		$('.food').css("background","none");
		$('.culture').css("background","none");
		$('.panel-food').css("display","none");
		$('.panel-culture').css("display","none");
		$('.panel-gulide').css("display","block");
	});
	
	$('.food').hover(function(){
		$('.food').css("background","#61C8B4");
		$('.guides').css("background","none");
		$('.culture').css("background","none");
		$('.panel-gulide').css("display","none");
		$('.panel-food').css("display","block");
	});
	
	$('.culture').hover(function(){
		$('.culture').css("background","#61C8B4");
		$('.food').css("background","none");
		$('.guides').css("background","none");
		$('.panel-gulide').css("display","none");
		$('.panel-food').css("display","none");
		$('.panel-culture').css("display","block");
	})
	
	var vm = new Vue({
	el: '#box',
	data: {
		guides: {
			one:{
				title:"一天搞定青城后山（全程无辅助）",
				context:"实践证明，半天时间无辅助爬完青城山后山是完全可行的。准确来说，整个行程是一天，但实际爬山只花了5个小时，其他时间...",
				num:"123",
				time:"13:32",
				source:"http://www.baidu.com",
			},
			two:{
				title:"带雨衣，带雨衣！！",
				context:"刚到半山腰就下雨了，带了一把伞，但很多地方比较危险，拿着雨伞不太方便，雨天爬山太危险了，后悔出门没看天气预报，下次...",
				num:"56",
				time:"2018/4/20 13:32",
				source:"http://www.baidu.com",
			},
			three:{
				title:"买早一点的票",
				context:"4月23号和两个同学一起去了青城山，青城山分前山和后山，前山主要是道观、烧香拜佛的地方，没什么爬山的地方，要想爬山，观...",
				num:"77",
				time:"2018/4/20 13:32",
				source:"http://www.baidu.com",
			},
		},
		food: {
			one:{
				title:"青城后山美食集合",
				context:"实践证明，半天时间无辅助爬完青城山后山是完全可行的。准确来说，整个行程是一天，但实际爬山只花了5个小时，其他时间...",
				num:"321",
				time:"13:32",
				source:"http://www.baidu.com",
			},
			two:{
				title:"美食让人流连忘返",
				context:"刚到半山腰就下雨了，带了一把伞，但很多地方比较危险，拿着雨伞不太方便，雨天爬山太危险了，后悔出门没看天气预报，下次...",
				num:"78",
				time:"2018/4/30 13:32",
				source:"http://www.baidu.com",
			},
			three:{
				title:"美食一条街",
				context:"4月23号和两个同学一起去了青城山，青城山分前山和后山，前山主要是道观、烧香拜佛的地方，没什么爬山的地方，要想爬山，观...",
				num:"999",
				time:"2018/4/20 13:32",
				source:"http://www.baidu.com",
			},
		},
		culture: {
			one:{
				title:"青城后山人文历史",
				context:"实践证明，半天时间无辅助爬完青城山后山是完全可行的。准确来说，整个行程是一天，但实际爬山只花了5个小时，其他时间...",
				num:"123",
				time:"13:32",
				source:"http://www.baidu.com",
			},
			two:{
				title:"文化传承",
				context:"刚到半山腰就下雨了，带了一把伞，但很多地方比较危险，拿着雨伞不太方便，雨天爬山太危险了，后悔出门没看天气预报，下次...",
				num:"88",
				time:"2018/4/20 13:32",
				source:"http://www.baidu.com",
			},
			three:{
				title:"山美水美人更美",
				context:"4月23号和两个同学一起去了青城山，青城山分前山和后山，前山主要是道观、烧香拜佛的地方，没什么爬山的地方，要想爬山，观...",
				num:"666",
				time:"2018/4/20 13:32",
				source:"http://www.baidu.com",
			},
		}
	}
})