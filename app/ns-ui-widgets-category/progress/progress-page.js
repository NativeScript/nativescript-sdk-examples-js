const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/progress/basics/basics-page"),
    new link("Code Behind", "ns-ui-widgets-category/progress/code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new link("Basics", "ns-ui-widgets-category/progress/basics/basics-ts-page"),
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
