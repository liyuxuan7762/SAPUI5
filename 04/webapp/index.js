sap.ui.define([
	"sap/ui/core/mvc/XMLView" // 引入XMLView依赖
], function (XMLView) {
	"use strict";
	XMLView.create({viewName: "sap.ui5.walkthrough.view.App"}) // 这里对应的是当前目录下的view下的App.view.xml文件
	// 当XMLView创建完成后，会执行then()函数，这个函数里面主要写创建完XML视图之后要干什么
	// then()的参数为一个函数，其中oView就是刚刚创建完成的视图对象
	.then(function (oView) { 
		oView.placeAt("content"); // 将视图放在id为content的div中
	});
});
