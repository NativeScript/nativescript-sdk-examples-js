"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = require("tns-core-modules/ui/button");
function onPageLoaded(args) {
    var page = args.object;
    var stacklayout = page.getViewById("container");
    page.css = "Button { background-color: red; color: white; } .testClass { color: blue; } #myButton { color: yellow; } .testClass:pressed { color: green; }";
    var btn = new button_1.Button();
    btn.text = "Sample button";
    var btnWithClass = new button_1.Button();
    btnWithClass.text = "Button with class";
    btnWithClass.className = "testClass";
    var btnStyledViaID = new button_1.Button();
    btnStyledViaID.text = "Button with ID";
    btnStyledViaID.id = "myButton";
    stacklayout.addChild(btn);
    stacklayout.addChild(btnWithClass);
    stacklayout.addChild(btnStyledViaID);
}
exports.onPageLoaded = onPageLoaded;
