sap.ui.define([
	"sap/ui/core/mvc/Controller",  // 引入控制器的依赖
	"sap/m/MessageToast", // 引入弹出式提示框的依赖
	"sap/ui/model/json/JSONModel", // 引入JSON模型的依赖
	"sap/ui/model/resource/ResourceModel" // 引入读取properties文件的依赖
], function (Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	return Controller.extend("sap.ui5.walkthrough.controller.App", {
		// 初始化的时候，创建JSON对象，将值传给View层
		onInit : function() {
			// 创建一个普通的JS对象，一会通过API转化成JSON格式
			var oData = {
				recipient : {
					name : "第八节-多语言支持"
				}
			}; 
			// 转化成JSON
			var oModel = new JSONModel(oData);
			// 将JSON模型同视图进行绑定
			this.getView().setModel(oModel);

			// 处理多语言环境
			var i18nModel = new ResourceModel({
				// 这里要和文件名保持一致 i18n文件夹下的i18n.properties
				bundleName : "sap.ui5.walkthrough.i18n.i18n"
			});
			// 将这个模型放入到视图层中
			this.getView().setModel(i18nModel, "jerryi18n"); // 给这个model起名字jerryi18n，在xml视图层会用到
		},
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