// tslint:disable:max-line-length
import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
// >> webview-import
import { WebView } from "tns-core-modules/ui/web-view";
// << webview-import
import { isAndroid } from "tns-core-modules/platform";
// >> webview-js-gestures-ts
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    vm.set("webViewSrc", "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>");
    vm.set("touchResult", "Touch: x: _ y: _");
    vm.set("panResult", "Pan: deltaX: _ deltaY: _");
    page.bindingContext = vm;
}
// disabling the WebView's zoom control(required only for Android)
export function onWebViewLoaded(webargs) {
    const webview: WebView = <WebView>webargs.object;
    if (isAndroid) {
        webview.android.getSettings().setDisplayZoomControls(false);
    }
}
// setting up Touch gesture callback method
export function webViewTouch(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    vm.set("touchResult", `Touch: x: ${args.getX().toFixed(3)} y: ${args.getY().toFixed(3)}`);
    console.log(`Touch: x: ${args.getX().toFixed(3)} y: ${args.getY().toFixed(3)}`);
}
// setting up Pan gesture callback method
export function webViewPan(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    vm.set("panResult", `Pan: deltaX: ${args.deltaX.toFixed(3)} deltaY: ${args.deltaY.toFixed(3)}`);
    console.log(`Pan: deltaX: ${args.deltaX.toFixed(3)} deltaY: ${args.deltaY.toFixed(3)}`);
}
// << webview-js-gestures-ts
