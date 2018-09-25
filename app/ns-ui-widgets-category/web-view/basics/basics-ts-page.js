"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
var web_view_1 = require("tns-core-modules/ui/web-view");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("webViewSrc", "https://docs.nativescript.org/");
    vm.set("result", "");
    vm.set("tftext", "https://docs.nativescript.org/");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onWebViewLoaded(webargs) {
    var page = webargs.object.page;
    var vm = page.bindingContext;
    var webview = webargs.object;
    vm.set("result", "WebView is still loading...");
    vm.set("enabled", false);
    webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
        var message = "";
        if (!args.error) {
            message = "WebView finished loading of " + args.url;
        }
        else {
            message = "Error loading " + args.url + " : " + args.error;
        }
        vm.set("result", message);
        console.log("WebView message - " + message);
    });
}
exports.onWebViewLoaded = onWebViewLoaded;
function goBack(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var webview = page.getViewById("myWebView");
    if (webview.canGoBack) {
        webview.goBack();
        vm.set("enabled", true);
    }
}
exports.goBack = goBack;
function goForward(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var webview = page.getViewById("myWebView");
    if (webview.canGoForward) {
        webview.goForward();
    }
    else {
        vm.set("enabled", false);
    }
}
exports.goForward = goForward;
function submit(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var textField = args.object;
    var text = textField.text;
    vm.set("enabled", false);
    if (text.substring(0, 4) === "http") {
        vm.set("webViewSrc", text);
        textField.dismissSoftInput();
    }
    else {
        dialogs.alert("Please, add `http://` or `https://` in front of the URL string")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
}
exports.submit = submit;
