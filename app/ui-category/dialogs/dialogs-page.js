const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Alert", "/ui-category/dialogs/alert/alert-page"),
    new link("Action", "/ui-category/dialogs/action/action-page"),
    new link("Confirm", "/ui-category/dialogs/confirm/confirm-page"),
    new link("Login", "/ui-category/dialogs/login/login-page"),
    new link("Prompt", "/ui-category/dialogs/prompt/prompt-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
