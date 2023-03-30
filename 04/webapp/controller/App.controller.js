sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/Token'
], function(
	Controller,
	Token
) {
	"use strict";

	return Controller.extend("sap.ui5.walkthrough.controller.App", {

		onInit: function () {
			var oView = this.getView();
			
			var toolNumbers = oView.byId("toolNumbers");
			toolNumbers.setTokens([
				new Token({text: "Token 1", key: "0001"}),
				new Token({text: "Token 2", key: "0002"}),
			]);


			// add validator
			var fnValidator = function(args){
				var text = args.text;

				return new Token({key: text, text: text});
			};

			toolNumbers.addValidator(fnValidator);

		},

		onEraser : function(oEvent) {
			var oView = this.getView();
			oView.byId("site").setValue();
		}
	});
});