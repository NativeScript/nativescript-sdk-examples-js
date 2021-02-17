// >> setting-url-webview-ts
import {Observable} from "@nativescript/core";
import { Dialogs } from "@nativescript/core";
import {WebView, LoadEventData} from "@nativescript/core";
import { Page } from "@nativescript/core";
import { TextField } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page: Page = <Page> args.object;
    const vm = new Observable();
    vm.set("webViewSrc", "https://docs.nativescript.org/");
    vm.set("result", "");
    vm.set("tftext", "https://docs.nativescript.org/");
    page.bindingContext = vm;
}
// handling WebView load finish event
export function onWebViewLoaded(webargs) {
    const page: Page = <Page> webargs.object.page;
    const vm = page.bindingContext;
    const webview: WebView = <WebView> webargs.object;
    vm.set("result", "WebView is still loading...");
    vm.set("enabled", false);

    webview.on(WebView.loadFinishedEvent, (args: LoadEventData) => {
        let message = "";
        if (!args.error) {
            message = `WebView finished loading of ${args.url}`;
        } else {
            message = `Error loading ${args.url} : ${args.error}`;
        }

        vm.set("result", message);
        console.log(`WebView message - ${message}`);
    });
}
// going to the previous page if such is available
export function goBack(args) {
    const page: Page = <Page> args.object.page;
    const vm = page.bindingContext;
    const webview: WebView = <WebView> page.getViewById("myWebView");
    if (webview.canGoBack) {
        webview.goBack();
        vm.set("enabled", true);
    }
}
// going forward if a page is available
export function goForward(args) {
    const page: Page = <Page> args.object.page;
    const vm = page.bindingContext;
    const webview: WebView = <WebView> page.getViewById("myWebView");
    if (webview.canGoForward) {
        webview.goForward();
    } else {
        vm.set("enabled", false);
    }
}
// changing WebView source
export function submit(args) {
    const page: Page = <Page> args.object.page;
    const vm = page.bindingContext;
    const textField: TextField = <TextField> args.object;
    const text = textField.text;
    vm.set("enabled", false);
    if (text.substring(0, 4) === "http") {
        vm.set("webViewSrc", text);
        textField.dismissSoftInput();
    } else {
        dialogs.alert("Please, add `http://` or `https://` in front of the URL string")
        .then(() => {
            console.log("Dialog closed!");
        });
    }
}
// << setting-url-webview-ts
