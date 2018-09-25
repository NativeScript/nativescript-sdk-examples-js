import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { WebView } from "tns-core-modules/ui/web-view/web-view";
const firstUrl = "https://google.com/";
const secondUrl = "https://www.nativescript.org/";
// >> webview-ts-events
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    const vm = new Observable();
    vm.set("webViewSrc", secondUrl);
    vm.set("isItemVisible", true);
    page.bindingContext = vm;
}

export function onLoadStarted(args) {
    const page: Page = <Page>args.object;
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
export function onLoadFinished(args) {
    const page = (<Page>args.object);
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

export function loadFirst(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    vm.set("webViewSrc", firstUrl);
}

export function loadSecond(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    vm.set("webViewSrc", secondUrl);
}

export function onReload(args) {
    const page: Page = <Page>args.object.page;
    const webview: WebView = <WebView>page.getViewById("webview");
    webview.reload();
}
// << webview-ts-events
