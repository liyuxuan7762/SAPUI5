sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/Token',
	"sap/ui/model/json/JSONModel",
	'sap/ui/core/library'
], function (
	Controller,
	Token,
	JSONModel,
	coreLibrary
) {
	"use strict";

	var ValueState = coreLibrary.ValueState;

	return Controller.extend("sap.ui5.walkthrough.controller.App", {

		onInit: function () {
			// 给Tool Numbers Input里面生成两条模拟数据
			var oView = this.getView();
			var toolNumbers = oView.byId("toolNumbers");
			toolNumbers.setTokens([
				new Token({ text: "Token 1", key: "0001" }),
				new Token({ text: "Token 2", key: "0002" }),
			]);

			// 点击回车或失去焦点后创建一个新的Token
			var fnValidator = function (args) {
				var text = args.text;
				return new Token({ key: text, text: text });
			};
			toolNumbers.addValidator(fnValidator);

			// 创建一个JSON对象，用来保存状态
			var oData = {
				status : [
					{
						text : "Enable",
						key : 1
					},
					{
						text : "Disable",
						key : 2
					}
				]
			}; 
			// 转化成JSON
			var oModel = new JSONModel(oData);
			// 将JSON模型同视图进行绑定
			this.getView().setModel(oModel);
		},
		/**
		 * 清屏
		 */
		onEraser: function (oEvent) {
			var oView = this.getView();
			// 清空site输入框
			oView.byId("site").setValue();

			// 清空toolNumbers
			var toolNumbers = oView.byId("toolNumbers");
			toolNumbers.removeAllTokens();
		},

		handleChange: function (oEvent) {
			var oValidatedComboBox = oEvent.getSource();
			var sSelectedKey = oValidatedComboBox.getSelectedKey();
			var sValue = oValidatedComboBox.getValue();

			if (!sSelectedKey && sValue) {
				oValidatedComboBox.setValueState(ValueState.Error);
				oValidatedComboBox.setValueStateText("Please enter a valid status!");
			} else {
				oValidatedComboBox.setValueState(ValueState.None);
			}
		},

		/**
		 * 用来实现site数据框点击弹出显示所有site的对话框
		 */
		siteDialogPress : function() {
			// 调用Utils中方法
		}
	});
});