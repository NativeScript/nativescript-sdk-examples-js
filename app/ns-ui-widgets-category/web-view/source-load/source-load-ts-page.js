"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var web_view_1 = require("tns-core-modules/ui/web-view");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("firstWebViewSRC", "<!DOCTYPE html><html><head><title>MyTitle</title><meta charset='utf-8' /></head><body><span style='color:#0099CC; text-align: center;'>First WebView</span></body></html>");
    vm.set("resultFirstWebView", "");
    vm.set("secondWebViewSRC", "~/ns-ui-widgets-category/web-view/source-load/test.html");
    vm.set("resultSecondWebView", "");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onFirstWebViewLoaded(webargs) {
    var page = webargs.object.page;
    var vm = page.bindingContext;
    var webview = webargs.object;
    vm.set("resultFirstWebView", "First WebView is still loading...");
    webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
        var message = "";
        if (!args.error) {
            message = "First WebView finished loading of " + args.url;
        }
        else {
            message = "Error loading first WebView " + args.url + " : " + args.error;
        }
        vm.set("resultFirstWebView", message);
        console.log("First WebView message - ", message);
    });
}
exports.onFirstWebViewLoaded = onFirstWebViewLoaded;
function onSecondWebViewLoaded(webargs) {
    var page = webargs.object.page;
    var vm = page.bindingContext;
    var webview = webargs.object;
    vm.set("resultSecondWebView", "Second WebView is still loading...");
    webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
        var message = "";
        if (!args.error) {
            message = "Second WebView finished loading of " + args.url;
        }
        else {
            message = "Error loading second WebView  " + args.url + " : " + args.error;
        }
        vm.set("resultSecondWebView", message);
        console.log("Second WebView message - ", message);
    });
}
exports.onSecondWebViewLoaded = onSecondWebViewLoaded;
