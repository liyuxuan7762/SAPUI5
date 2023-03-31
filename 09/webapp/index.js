sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		// name定义了Component.js所在的路径
		name: "sap.ui5.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});

// 使用Component的作用是将公用的数据都放在一个js文件中
// 方便不同的view取值
// 不适用Component的时候，初始化的数据都是在view对应的controller.js文件中onInit方法中进行初始化的
// 如果多个XML共用数据，那么就可以将这些公共数据写入Component 避免重复加载