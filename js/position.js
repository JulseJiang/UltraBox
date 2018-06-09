var sHeight = document.documentElement.scrollHeight;
	var bBox = (sHeight-80)+"px";
	$('.box').height(bBox);
	var points = [{
		id: 1,
		lng: 103.6198880237,
		lat: 31.0025500756,
		title: "都江堰景点",
		content: ["地址：中国四川省成都市都江堰市"]
	}, {
		id: 2,
		lng: 103.5793387365,
		lat: 30.9035167823,
		title: "青城前山",
		content: ["地址：中国四川省成都市都江堰市"]
	}, {
		id: 3,
		lng: 103.5013892309,
		lat: 30.9244925962,
		title: "青城后山",
		content: ["地址：中国四川省成都市都江堰市"]
	}, {
		id: 4,
		lng: 103.6029948257,
		lat: 30.8941122777,
		title: "成都东软学院",
		content: ["地址：中国四川省成都市都江堰市东软大道1号"]
	}, {
		id: 5,
		lng: 104.0835892718,
		lat: 30.6614060680,
		title: "成都春熙路",
		content: ["地址：中国四川省成都市锦江区春熙路北段17号"]
	}];

	var map = new BaiduMap({
		id: "container3",
		level: 16, //  选填--地图级别--(默认15)
		zoom: true, // 选填--是否启用鼠标滚轮缩放功能--(默认false)
		type: ["地图", "卫星"], // 选填--显示地图类型--(默认不显示)
		width: 320, // 选填--信息窗口width--(默认自动调整)
		height: 70, // 选填--信息窗口height--(默认自动调整)
		titleClass: "title",
		contentClass: "content",
		showPanorama: true, // 是否显示全景控件(默认false)
		showMarkPanorama: true, // 是否显示标注点全景图(默认false)
		showLabel: false, // 是否显示文本标注(默认false)
		mapStyle: "normal", // 默认normal,可选dark,light
		icon: { // 选填--自定义icon图标
			url: "img/marker2.png",
			width: 34,
			height: 94
		},
		centerPoint: { // 中心点经纬度
			lng: 103.6029948257,
			lat: 30.8941122777
		},
		index: 2, // 开启对应的信息窗口，默认-1不开启
		animate: true, // 是否开启坠落动画，默认false
		points: points, // 标注点--id(唯一标识)
		callback: function(id) {
			$(".list").find("li").eq(id - 1).addClass("active").siblings().removeClass("active");
		}
	});

	var data = map.getPosition();
	var $li = $(".list").find("li");

	$li.each(function(i) {
		$(this).data("id", i + 1);
	}).on("click", function() {
		map.openInfoWindow($(this).data("id"));
		$(this).addClass("active").siblings().removeClass("active");
	}).eq(data.id - 1).addClass("active");