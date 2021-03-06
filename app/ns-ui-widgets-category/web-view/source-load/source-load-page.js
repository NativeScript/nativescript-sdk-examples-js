// >> web-view-src-local-file
import { Observable, WebView } from "@nativescript/core";
export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    // loading the WebView source while providing a HTML code
    vm.set("firstWebViewSRC", "<!DOCTYPE html><html><head><title>MyTitle</title><meta charset='utf-8' /></head><body><span style='color:#0099CC; text-align: center;'>First WebView</span></body></html>");
    vm.set("resultFirstWebView", "");
    // loading the WebView source from a local file
    vm.set("secondWebViewSRC", "~/ns-ui-widgets-category/web-view/source-load/test.html");
    vm.set("resultSecondWebView", "");
    page.bindingContext = vm;
}

export function onFirstWebViewLoaded(webargs) {
    const page = webargs.object.page;
    const vm = page.bindingContext;
    const webview = webargs.object;
    vm.set("resultFirstWebView", "First WebView is still loading...");
    // handling WebView load finish event
    webview.on(WebView.loadFinishedEvent, (args) => {
        let message = "";
        if (!args.error) {
            message = `First WebView finished loading of ${args.url}`;
        } else {
            message = `Error loading first WebView ${args.url} : ${args.error}`;
        }

        vm.set("resultFirstWebView", message);
        console.log("First WebView message - ", message);
    });
}

export function onSecondWebViewLoaded(webargs) {
    const page = webargs.object.page;
    const vm = page.bindingContext;
    const webview = webargs.object;
    vm.set("resultSecondWebView", "Second WebView is still loading...");

    webview.on(WebView.loadFinishedEvent, (args) => {
        let message = "";
        if (!args.error) {
            message = `Second WebView finished loading of ${args.url}`;
        } else {
            message = `Error loading second WebView  ${args.url} : ${args.error}`;
        }

        vm.set("resultSecondWebView", message);
        console.log("Second WebView message - ", message);
    });
}

// << web-view-src-local-file
