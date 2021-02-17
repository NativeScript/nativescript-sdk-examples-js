import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Alert", "ns-ui-widgets-category/dialogs/alert-dialog/alert-page"),
    new Link("Action", "ns-ui-widgets-category/dialogs/action-dialog/action-page"),
    new Link("Confirm", "ns-ui-widgets-category/dialogs/confirm-dialog/confirm-page"),
    new Link("Login", "ns-ui-widgets-category/dialogs/login-dialog/login-page"),
    new Link("Prompt", "ns-ui-widgets-category/dialogs/prompt-dialog/prompt-page")
];

const navigationLinksTsc = [
    new Link("Alert", "ns-ui-widgets-category/dialogs/alert-dialog/alert-ts-page"),
    new Link("Action", "ns-ui-widgets-category/dialogs/action-dialog/action-ts-page"),
    new Link("Confirm", "ns-ui-widgets-category/dialogs/confirm-dialog/confirm-ts-page"),
    new Link("Login", "ns-ui-widgets-category/dialogs/login-dialog/login-ts-page"),
    new Link("Prompt", "ns-ui-widgets-category/dialogs/prompt-dialog/prompt-ts-page")
];
export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples: false,
        tsclinks: navigationLinksTsc
    });
}

