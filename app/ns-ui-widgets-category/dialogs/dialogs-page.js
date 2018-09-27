const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Alert", "ns-ui-widgets-category/dialogs/alert/alert-page"),
    new link("Action", "ns-ui-widgets-category/dialogs/action/action-page"),
    new link("Confirm", "ns-ui-widgets-category/dialogs/confirm/confirm-page"),
    new link("Login", "ns-ui-widgets-category/dialogs/login/login-page"),
    new link("Prompt", "ns-ui-widgets-category/dialogs/prompt/prompt-page")
];

const navigationLinksTsc = [
    new link("Alert", "ns-ui-widgets-category/dialogs/alert/alert-ts-page"),
    new link("Action", "ns-ui-widgets-category/dialogs/action/action-ts-page"),
    new link("Confirm", "ns-ui-widgets-category/dialogs/confirm/confirm-ts-page"),
    new link("Login", "ns-ui-widgets-category/dialogs/login/login-ts-page"),
    new link("Prompt", "ns-ui-widgets-category/dialogs/prompt/prompt-ts-page")
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
