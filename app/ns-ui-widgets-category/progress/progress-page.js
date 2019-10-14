const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Usage", "ns-ui-widgets-category/progress/usage/usage-page"),
    new link("Tips and tricks", "ns-ui-widgets-category/progress/tips-and-tricks/tips-and-tricks-page"),
    new link("Code Behind", "ns-ui-widgets-category/progress/code-behind/code-behind-page"),
    new link("Style", "ns-ui-widgets-category/progress/styling/styling-page")
];
const navigationLinksTsc = [
    new link("Usage", "ns-ui-widgets-category/progress/usage/usage-ts-page"),
    new link("Tips and tricks", "ns-ui-widgets-category/progress/tips-and-tricks/tips-and-tricks-ts-page"),
    new link("Code Behind", "ns-ui-widgets-category/progress/code-behind/code-behind-ts-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples:false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
