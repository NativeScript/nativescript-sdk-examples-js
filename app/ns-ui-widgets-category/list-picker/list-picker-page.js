const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Usage", "ns-ui-widgets-category/list-picker/usage/usage-page"),
    new link("Code-Behind", "ns-ui-widgets-category/list-picker/code-behind/code-behind-page"),
    new link("Tips and Tricks", "ns-ui-widgets-category/list-picker/tips-and-tricks/tips-and-tricks-page")
];
const navigationLinksTsc = [
    new link("Usage", "ns-ui-widgets-category/list-picker/usage/usage-ts-page"),
    new link("Code-Behind", "ns-ui-widgets-category/list-picker/code-behind/code-behind-ts-page"),
    new link("Tips and Tricks", "ns-ui-widgets-category/list-picker/tips-and-tricks/tips-and-tricks-ts-page")
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
