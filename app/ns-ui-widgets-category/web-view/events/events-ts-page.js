"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var firstUrl = "https://google.com/";
var secondUrl = "https://www.nativescript.org/";
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("webViewSrc", secondUrl);
    vm.set("isItemVisible", true);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onLoadStarted(args) {
    var page = args.object;
    var vm = page.bindingContext;
    vm.set("isItemVisible", true);
    var message;
    if (!args.error) {
        console.log("--------------------------------------");
        console.log("Load Start");
        console.log("EventName: " + args.eventName);
        console.log("NavigationType: " + args.navigationType);
        console.log("Url: " + args.url);
        console.log("--------------------------------------");
        message = "WebView started loading of " + args.url;
    }
    else {
        console.log("--------------------------------------");
        console.log("EventName: " + args.eventName);
        console.log("Error: " + args.error);
        console.log("--------------------------------------");
        message = "Error loading  " + args.url + " : " + args.error;
    }
    console.log(message);
}
exports.onLoadStarted = onLoadStarted;
function onLoadFinished(args) {
    var page = args.object;
    var vm = page.bindingContext;
    var message;
    if (!args.error) {
        console.log("--------------------------------------");
        console.log("Load Finished");
        console.log("EventName: " + args.eventName);
        console.log("NavigationType: " + args.navigationType);
        console.log("Url: " + args.url);
        console.log("--------------------------------------");
        message = "WebView finished loading of  " + args.url;
    }
    else {
        console.log("--------------------------------------");
        console.log("EventName: " + args.eventName);
        console.log("Error: " + args.error);
        console.log("--------------------------------------");
        message = "Error loading " + args.url + " : " + args.error;
    }
    console.log(message);
    setTimeout(function () {
        vm.set("isItemVisible", false);
    }, 500);
}
exports.onLoadFinished = onLoadFinished;
function loadFirst(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    vm.set("webViewSrc", firstUrl);
}
exports.loadFirst = loadFirst;
function loadSecond(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    vm.set("webViewSrc", secondUrl);
}
exports.loadSecond = loadSecond;
function onReload(args) {
    var page = args.object.page;
    var webview = page.getViewById("webview");
    webview.reload();
}
exports.onReload = onReload;
