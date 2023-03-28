sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast", // 引入控制器的依赖
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("sap.ui5.walkthrough.controller.App", {
		// 初始化的时候，创建JSON对象，将值传给View层
		onInit : function() {
			// 创建一个普通的JS对象，一会通过API转化成JSON格式
			var oData = {
				recipient : {
					name : "world"
				}
			}; 
			// 转化成JSON
			var oModel = new JSONModel(oData);
			// 将JSON模型同视图进行绑定
			this.getView().setModel(oModel);
		},
		// 实现在XML中定义的一些事件
		onShowHello : function () {
			MessageToast.show("Hello World!");
			var oInput = this.byId("myInput");
			console.log(oInput);
		}
	});
});