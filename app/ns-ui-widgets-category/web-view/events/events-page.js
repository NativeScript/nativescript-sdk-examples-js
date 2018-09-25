const Observable = require("tns-core-modules/data/observable").Observable;
const firstUrl = "https://google.com/";
const secondUrl = "https://www.nativescript.org/";
// >> webview-js-events
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("webViewSrc", secondUrl);
    vm.set("isItemVisible", true);
    page.bindingContext = vm;
}

function onLoadStarted(args) {
    const page = args.object;
    const vm = page.bindingContext;
    vm.set("isItemVisible", true);
    let message;
    if (!args.error) {
        // >> (hide)
        console.log("--------------------------------------");
        console.log("Load Start");
        console.log(`EventName: ${args.eventName}`);
        console.log(`NavigationType: ${args.navigationType}`);
        console.log(`Url: ${args.url}`);
        console.log("--------------------------------------");
        // << (hide)
        message = `WebView started loading of ${args.url}`;
    } else {
        // >> (hide)
        console.log("--------------------------------------");
        console.log(`EventName: ${args.eventName}`);
        console.log(`Error: ${args.error}`);
        console.log("--------------------------------------");
        // << (hide)
        message = `Error loading  ${args.url} : ${args.error}`;
    }
    console.log(message);

}
function onLoadFinished(args) {
    const page = args.object;
    const vm = page.bindingContext;
    let message;
    if (!args.error) {
        // >> (hide)
        console.log("--------------------------------------");
        console.log("Load Finished");
        console.log(`EventName: ${args.eventName}`);
        console.log(`NavigationType: ${args.navigationType}`);
        console.log(`Url: ${args.url}`);
        console.log("--------------------------------------");
        // << (hide)
        message = `WebView finished loading of  ${args.url}`;
    } else {
        // >> (hide)
        console.log("--------------------------------------");
        console.log(`EventName: ${args.eventName}`);
        console.log(`Error: ${args.error}`);
        console.log("--------------------------------------");
        // << (hide)
        message = `Error loading ${args.url} : ${args.error}`;
    }
    console.log(message);
    // >> (hide)
    setTimeout(() => {
        vm.set("isItemVisible", false);
    }, 500);
    // << (hide)
}

function loadFirst(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    vm.set("webViewSrc", firstUrl);
}

function loadSecond(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    vm.set("webViewSrc", secondUrl);
}

function onReload(args) {
    const page = args.object.page;
    webview = page.getViewById("webview");
    webview.reload();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onLoadStarted = onLoadStarted;
exports.onLoadFinished = onLoadFinished;
exports.loadFirst = loadFirst;
exports.loadSecond = loadSecond;
exports.onReload = onReload;
// << webview-js-events
