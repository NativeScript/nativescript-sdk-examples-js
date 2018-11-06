"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("tns-core-modules/application");
function onGridLoaded(args) {
    var grid = args.object;
    var lbl = grid.getViewById("lbl");
    var iconLabel = grid.getViewById("iconLabel");
    iconLabel.className = "fa";
    iconLabel.textAlignment = "center";
    iconLabel.verticalAlignment = "middle";
    iconLabel.fontSize = 40;
    lbl.textAlignment = "center";
    lbl.verticalAlignment = "middle";
    lbl.fontSize = 24;
    if (application.android) {
        console.log("We are running on Android device!");
        iconLabel.text = String.fromCharCode(0xff17b);
        lbl.text = "Android Applicaiton";
    }
    else if (application.ios) {
        console.log("We are running on iOS device");
        iconLabel.text = String.fromCharCode(0xf179);
        lbl.text = "iOS Applicaiton";
    }
}
exports.onGridLoaded = onGridLoaded;
function onNavigatingTo(args) {
    var page = args.object;
    page.actionBar.title = args.context.title;
}
exports.onNavigatingTo = onNavigatingTo;
