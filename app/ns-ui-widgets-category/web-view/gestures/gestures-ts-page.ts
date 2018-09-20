const Observable = require("tns-core-modules/data/observable").Observable;
// >> webview-require
const webViewModule = require("tns-core-modules/ui/web-view");
// << webview-require
const platformModule = require("tns-core-modules/platform");
// >> webview-js-gestures
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("webViewSrc", "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>");
    vm.set("touchResult", "Touch: x: _ y: _");
    vm.set("panResult", "Pan: deltaX: _ deltaY: _");
    page.bindingContext = vm;
}
// disabling the WebView's zoom control(required only for Android)
function onWebViewLoaded(webargs) {
    const webview = webargs.object;
    if (platformModule.isAndroid) {
        webview.android.getSettings().setDisplayZoomControls(false);
    }
}
// setting up Touch gesture callback method
function webViewTouch(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    vm.set("touchResult", `Touch: x: ${args.getX().toFixed(3)} y: ${args.getY().toFixed(3)}`);
    console.log(`Touch: x: ${args.getX().toFixed(3)} y: ${args.getY().toFixed(3)}`);
}
// setting up Pan gesture callback method
function webViewPan(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    vm.set("panResult", `Pan: deltaX: ${args.deltaX.toFixed(3)} deltaY: ${args.deltaY.toFixed(3)}`);
    console.log(`Pan: deltaX: ${args.deltaX.toFixed(3)} deltaY: ${args.deltaY.toFixed(3)}`);
}

exports.onNavigatingTo = onNavigatingTo;
exports.onWebViewLoaded = onWebViewLoaded;
exports.webViewTouch = webViewTouch;
exports.webViewPan = webViewPan;
// << webview-js-gestures
