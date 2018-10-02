"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var html_view_1 = require("tns-core-modules/ui/html-view");
function onPageLoaded(args) {
    var page = args.object;
    var container = page.getViewById("container");
    var vm = new observable_1.Observable();
    var myHtmlString = "<span>\n        <h1><font color=\"blue\">NativeScript HtmlView</font></h1></br>\n        <h3>This component accept simple HTML strings</h3>\n    </span>";
    vm.set("htmlString", myHtmlString);
    page.bindingContext = vm;
    container.removeChildren();
    container.addChild(createHtmlView());
}
exports.onPageLoaded = onPageLoaded;
function createHtmlView() {
    var myHtmlView = new html_view_1.HtmlView();
    myHtmlView.html = "<span>\n        <h1><font color=\"blue\">NativeScript HtmlView</font></h1></br>\n        <h3>This component accept simple HTML strings</h3>\n    </span>";
    return myHtmlView;
}
