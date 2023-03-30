sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui5.walkthrough.controller.HelloPanel", {
      onShowHello: function () {
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         MessageToast.show(sMsg);
      },
      onOpenDialog: function () {

         // create dialog lazily 这个pDialog只是一个变量，也可以写this.abc 
         // 第一次打开对话框的时候，pDialog因为没有赋值过，所以肯定是空
         // 之后再次点击，因为已经创建过对话框，所以直接显示就可以了
         if (!this.pDialog) {
            this.pDialog = this.loadFragment({
               name: "sap.ui5.walkthrough.view.HelloDialog"
            });
         }
         this.pDialog.then(function (oDialog) {
            oDialog.open();
         });
      }
   });
});