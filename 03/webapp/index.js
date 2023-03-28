sap.ui.define([
	"sap/m/Text" // 引入SAP Text控件的依赖
], function (Text) {
	"use strict"; // 严格模式，对JS中的语法更加严格，比如不能使用未定义的变量等

	var text = new Text({
		text: "Hello World", // 要显示的内容
		tooltip: "我是 Tooltip" // 鼠标放上去弹出的提示信息
	});
	
    // 将创建的Text空间的实例化对象放到 <div class="sapUiBody" id="content"> 中
    // 最后这个Text空间被渲染成了html中的<span>标签
	text.placeAt("content"); 
});

// sap.ui.define 方法接收两个参数，第一个参数的类型是数组，里面存放需要加载的 SAP UI5 库的 url 集合，本例为 sap/m/Text.
// 第二个参数是一个回调函数，当 sap.ui.define 
// 成功加载所需的库文件之后，会自动调用这个回调函数，并将加载成功的库文件的实现，作为输入参数，传递给回调函数。
// 在我们这个例子里，回调函数即代码第三行指定的 function 函数，输入参数 Text，即是 sap.ui.define 成功加载 sap.m.Text 库之后传递给回调函数的参数。