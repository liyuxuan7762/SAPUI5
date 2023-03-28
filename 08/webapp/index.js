sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";
	XMLView.create({
		viewName: "sap.ui5.walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
});

// 执行顺序
// STEP1 首先执行index.html data-sap-ui-oninit="module:sap/ui5/walkthrough/index"
// STEP2 然后会加载对应的index.js文件，在JS文件中会创建一个XML视图，然后这个视图会找到对应的App.view.xml文件
// STEP3 xml文件会根据下面这个controllerName="sap.ui5.walkthrough.controller.App" 建立和App.controller.js文件的关联
// STEP4 页面交互信息都保存在controller.js文件中
