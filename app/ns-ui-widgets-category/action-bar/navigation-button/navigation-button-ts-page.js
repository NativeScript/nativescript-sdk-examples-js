"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = observable_1.fromObject({
        title: "ActionBar's Navigation Button demo"
    });
}
exports.onNavigatingTo = onNavigatingTo;
function onNavBtnTap(args) {
    console.log("Navigation button tapped!");
    var navigationButton = args.object;
    var frame = navigationButton.page.frame;
    frame.goBack();
}
exports.onNavBtnTap = onNavBtnTap;
