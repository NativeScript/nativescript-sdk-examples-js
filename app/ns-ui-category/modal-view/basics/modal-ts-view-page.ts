// >> modal-view-ts
import { fromObject } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
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
