const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Usage", "ns-ui-widgets-category/label/usage/usage-page"),
    new link("Code-Behind", "ns-ui-widgets-category/label/code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new link("Usage", "ns-ui-widgets-category/label/usage/usage-ts-page"),
    new link("Code-Behind", "ns-ui-widgets-category/label/code-behind/code-behind-ts-page")
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
