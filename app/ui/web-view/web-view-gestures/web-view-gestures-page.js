// >> webview-js-gestures
let Observable = require("tns-core-modules/data/observable").Observable;
let webViewModule = require("tns-core-modules/ui/web-view");
let platformModule = require("tns-core-modules/platform");

function onNavigatingTo(args) {
    let page = args.object;
    let vm = new Observable();
    vm.set("webViewSrc", "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>");
    vm.set("touchResult", "Touch: x: _"  + " y: _");
    vm.set("panResult", "Pan: deltaX: _" + " deltaY: _");
    page.bindingContext = vm;
}

function onWebViewLoaded(webargs){
    let page = webargs.object.page;
    let vm = page.bindingContext;
    let webview = webargs.object;
    if(platformModule.isAndroid){
        webview.android.getSettings().setDisplayZoomControls(false);
    }
}

function webViewTouch(args){
    let page = args.object.page;
    let vm = page.bindingContext;
    vm.set("touchResult", "Touch: x: " + args.getX().toFixed(3) + " y: " + args.getY().toFixed(3));
    console.log("Touch: x: " + args.getX().toFixed(3) + " y: " + args.getY().toFixed(3));
}

function webViewPan(args){
    let page = args.object.page;
    let vm = page.bindingContext;
    vm.set("panResult", "Pan: deltaX: " + args.deltaX.toFixed(3) + " deltaY: " + args.deltaY.toFixed(3));
    console.log("Pan: deltaX: " + args.deltaX.toFixed(3) + " deltaY: " + args.deltaY.toFixed(3));
}

exports.onNavigatingTo = onNavigatingTo;
exports.onWebViewLoaded = onWebViewLoaded;
exports.webViewTouch = webViewTouch;
exports.webViewPan = webViewPan;
// << webview-js-gestures