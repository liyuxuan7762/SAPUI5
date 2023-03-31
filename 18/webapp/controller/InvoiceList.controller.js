sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"    
], function (
    Controller,
	JSONModel,
	formatter,
	Filter,
	FilterOperator
) {
    "use strict";

    return Controller.extend("sap.ui5.walkthrough.controller.InvoiceList", {
        /**
         * @override
         */
        onInit: function () {
            var oviewModel = new JSONModel({
                currency: "EUR"
            });
            // 将MODEL放入视图中
            this.getView().setModel(oviewModel, "view");
        },
        formatter : formatter,
        
        onFilterInvoice : function (oEvent) {
            // 创建一个过滤器数组，数组中的值为Filter对象，每一个Filter对象代表一个过滤条件
            var aFilter = [];
            // 获取查询条件
            var sQuery = oEvent.getParameter("query");
            if (sQuery) {
                // 如果查询条件不为空，则创建Filter对象
                // 在这个Filter对象中指定要搜索的字段，如何搜索，以及输入的条件
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }
            // 获取到List对象
            var oList = this.byId("invoiceList");
            // 获取到List中的item
            var oBinding = oList.getBinding("items");
            // 使用新的条件对item进行过滤
            oBinding.filter(aFilter);
        }
    });
});