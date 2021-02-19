// >> modal-view-ts
import { fromObject, Page } from "@nativescript/core";

let closeCallback;

export function onShownModally(args) {
    const context = args.context;
    closeCallback = args.closeCallback;
    const page: Page = <Page>args.object;
    page.bindingContext = fromObject(context);
}

export function onLoginButtonTap(args) {
    const page: Page = <Page>args.object.page;
    const bindingContext = page.bindingContext;
    const username = bindingContext.get("username");
    const password = bindingContext.get("password");
    closeCallback(username, password);
}
// << modal-view-ts
