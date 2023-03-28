sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel", // 引入JSON模型的依赖
    "sap/ui/model/resource/ResourceModel" // 引入读取properties文件的依赖
], function (UIComponent, JSONModel, ResourceModel) {
    'use strict';
    // 返回一个Component
    return UIComponent.extend(
        // 第一个参数是对应的Component.js文件的路径
        "sap.ui5.walkthrough.Component",
        // 第二个参数是一个JSON对象
        {
            // 元数据 主要包含根视图，在这里写XML文件的路径
            metadata: {
                "interfaces": ["sap.ui.core.IAsyncContentCreation"],
                "rootView": {
                    "viewName": "sap.ui5.walkthrough.view.App",
                    "type": "XML",
                    "id": "app"
                }
            },
            init: function () {
                // 在这里写之前在controller.js里面写的一些初始化的代码
                UIComponent.prototype.init.apply(this, arguments); // 相当于调用父类的构造函数，这一句必须写
                // 创建一个普通的JS对象，一会通过API转化成JSON格式
                var oData = {
                    recipient: {
                        name: "第八节-多语言支持"
                    }
                };
                // 转化成JSON
                var oModel = new JSONModel(oData);
                // 将JSON模型同视图进行绑定
                // this.getView().setModel(oModel);
                this.setModel(oModel); // 在Component.js中不需要使用getView() 否则会报getView() is not a function 错误

                // 处理多语言环境
                var i18nModel = new ResourceModel({
                    // 这里要和文件名保持一致 i18n文件夹下的i18n.properties
                    bundleName: "sap.ui5.walkthrough.i18n.i18n"
                });
                // 将这个模型放入到视图层中
                this.setModel(i18nModel, "jerryi18n"); // 给这个model起名字jerryi18n，在xml视图层会用到
            }
        }

    );
});
// 关于在Component中的getView()

// 问题：Jerry大佬，我想请教一下，我发现在使用component之后，从controller.js复制过去的 var oModel = new JSONModel(oData);
// this.setModel(oModel); 没有了getView()这步 是为什么？

// 朋友，学习的很仔细啊，这也是个好问题。假设一个 SAP UI5 应用有多个 XML 视图，A, B, C. 如果在 Component js 里调用 setModel, 那么所有的视图都可以访问到 Component 里设置的 Model. 换言之，可以把 Component 设置的Model，理解成一个全局的模型。
// 当然 View 内部也可以手动调用 setModel 设置只能在本视图内访问的 Model，这些 Model 是局部模型。对于步骤 8 来说，因为还没有引入 Component 的概念，所以只有在控制器里调用其对应的视图，然后设置局部 Model.