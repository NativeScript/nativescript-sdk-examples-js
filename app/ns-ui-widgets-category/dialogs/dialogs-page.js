const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Alert", "ns-ui-widgets-category/dialogs/alert-dialog/alert-page"),
    new link("Action", "ns-ui-widgets-category/dialogs/action-dialog/action-page"),
    new link("Confirm", "ns-ui-widgets-category/dialogs/confirm-dialog/confirm-page"),
    new link("Login", "ns-ui-widgets-category/dialogs/login-dialog/login-page"),
    new link("Prompt", "ns-ui-widgets-category/dialogs/prompt-dialog/prompt-page")
];

const navigationLinksTsc = [
    new link("Alert", "ns-ui-widgets-category/dialogs/alert-dialog/alert-ts-page"),
    new link("Action", "ns-ui-widgets-category/dialogs/action-dialog/action-ts-page"),
    new link("Confirm", "ns-ui-widgets-category/dialogs/confirm-dialog/confirm-ts-page"),
    new link("Login", "ns-ui-widgets-category/dialogs/login-dialog/login-ts-page"),
    new link("Prompt", "ns-ui-widgets-category/dialogs/prompt-dialog/prompt-ts-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples: false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
