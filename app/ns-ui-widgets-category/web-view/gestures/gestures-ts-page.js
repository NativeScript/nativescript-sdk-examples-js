"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var platform_1 = require("tns-core-modules/platform");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("webViewSrc", "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>");
    vm.set("touchResult", "Touch: x: _ y: _");
    vm.set("panResult", "Pan: deltaX: _ deltaY: _");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onWebViewLoaded(webargs) {
    var webview = webargs.object;
    if (platform_1.isAndroid) {
        webview.android.getSettings().setDisplayZoomControls(false);
    }
}
exports.onWebViewLoaded = onWebViewLoaded;
function webViewTouch(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    vm.set("touchResult", "Touch: x: " + args.getX().toFixed(3) + " y: " + args.getY().toFixed(3));
    console.log("Touch: x: " + args.getX().toFixed(3) + " y: " + args.getY().toFixed(3));
}
exports.webViewTouch = webViewTouch;
function webViewPan(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    vm.set("panResult", "Pan: deltaX: " + args.deltaX.toFixed(3) + " deltaY: " + args.deltaY.toFixed(3));
    console.log("Pan: deltaX: " + args.deltaX.toFixed(3) + " deltaY: " + args.deltaY.toFixed(3));
}
exports.webViewPan = webViewPan;
