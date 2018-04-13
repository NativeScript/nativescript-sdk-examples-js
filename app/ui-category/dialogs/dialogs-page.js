const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Alert", "/ui/dialogs/alert/alert-page"),
    new link("Action", "/ui/dialogs/action/action-page"),
    new link("Confirm", "/ui/dialogs/confirm/confirm-page"),
    new link("Login", "/ui/dialogs/login/login-page"),
    new link("Prompt", "/ui/dialogs/prompt/prompt-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
