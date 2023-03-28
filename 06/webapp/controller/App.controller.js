sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast" // 引入控制器的依赖
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("sap.ui5.walkthrough.controller.App", {
		// 实现在XML中定义的一些事件
		onShowHello : function () {
			MessageToast.show("Hello World!");
		}
	});
});