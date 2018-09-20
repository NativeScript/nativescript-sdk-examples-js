const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/search-bar/basics/basics-page"),
    new link("Events", "ns-ui-widgets-category/search-bar/events/events-page"),
    new link("Code Behind", "ns-ui-widgets-category/search-bar/code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new link("Basics", "ns-ui-widgets-category/search-bar/basics/basics-ts-page"),
    new link("Events", "ns-ui-widgets-category/search-bar/events/events-ts-page"),
    new link("Code Behind", "ns-ui-widgets-category/search-bar/code-behind/code-behind-ts-page")
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
