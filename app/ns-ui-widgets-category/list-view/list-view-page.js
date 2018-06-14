const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/list-view/basics/basics-page"),
    new link("Code Behind", "ns-ui-widgets-category/list-view/code-behind/code-behind-page"),
    new link("Events", "ns-ui-widgets-category/list-view/events/events-page"),
    new link("Multiple Templates", "ns-ui-widgets-category/list-view/multiple-templates/multiple-templates-page"),
    new link("Multiple Templates Selector Function", "ns-ui-widgets-category/list-view/multiple-templates-selector-function/multiple-templates-selector-function-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
