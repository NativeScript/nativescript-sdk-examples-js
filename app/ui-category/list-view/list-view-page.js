const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ui-category/list-view/basics/basics-page"),
    new link("Code Behind", "ui-category/list-view/code-behind/code-behind-page"),
    new link("Events", "ui-category/list-view/events/events-page"),
    new link("Multiple Templates", "ui-category/list-view/multiple-templates/multiple-templates-page"),
    new link("Multiple Templates Selector Function", "ui-category/list-view/multiple-templates-selector-function/multiple-templates-selector-function-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
