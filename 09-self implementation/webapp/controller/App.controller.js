sap.ui.define([
	"sap/ui/core/mvc/Controller",  // 引入控制器的依赖
	"sap/m/MessageToast", // 引入弹出式提示框的依赖
	"sap/ui/model/json/JSONModel", // 引入JSON模型的依赖
	"sap/ui/model/resource/ResourceModel" // 引入读取properties文件的依赖
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	return Controller.extend("sap.ui5.walkthrough.controller.App", {
		// 实现在XML中定义的一些事件
		onShowHello : function () {
			// 获取jerryi18n中的数据
			var oBundle = this.getView().getModel("jerryi18n").getResourceBundle();
			// 获取JSONModel中的数据
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			// 创建字符串 在properties中查找key为helloMsg的字符串，并将其中的占位符替换成sRecipient字符串
			// helloMsg=Hello {0}
			var msg = oBundle.getText("helloMsg", [sRecipient]);
			MessageToast.show(msg);
		}
	});
});