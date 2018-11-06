"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = require("tns-core-modules/ui/button");
function onNavigatingTo(args) {
    var page = args.object;
    var container = page.getViewById("container");
    var myButton = new button_1.Button();
    myButton.text = "Tap me!";
    myButton.className = "btn btn-primary btn-active";
    myButton.on(button_1.Button.tapEvent, function (data) {
        alert("Button Tapped!");
    });
    container.addChild(myButton);
}
exports.onNavigatingTo = onNavigatingTo;
