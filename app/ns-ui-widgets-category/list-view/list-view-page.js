const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/list-view/basics/basics-page"),
    new link("Code Behind", "ns-ui-widgets-category/list-view/code-behind/code-behind-page"),
    new link("Events", "ns-ui-widgets-category/list-view/events/events-page"),
    new link("Multiple Templates", "ns-ui-widgets-category/list-view/multiple-templates/multiple-templates-page"),
    new link("Multiple Templates Selector Function", "ns-ui-widgets-category/list-view/multiple-templates-selector-function/multiple-templates-selector-function-page")
];
const navigationLinksTsc = [
    new link("Basics", "ns-ui-widgets-category/list-view/basics/basics-ts-page"),
    new link("Code Behind", "ns-ui-widgets-category/list-view/code-behind/code-behind-ts-page"),
    new link("Events", "ns-ui-widgets-category/list-view/events/events-ts-page"),
    new link("Multiple Templates Selector Function", "ns-ui-widgets-category/list-view/multiple-templates-selector-function/multiple-templates-selector-function-ts-page")
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
