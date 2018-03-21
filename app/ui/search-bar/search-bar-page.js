const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/search-bar/basics-search-bar/basics-search-bar-page"),
    new link("SeachBar sample", "/ui/search-bar/clear-search-bar/clear-search-bar-page"),
    new link("SeachBar (Code-behind)", "/ui/search-bar/create-search-bar/create-search-bar-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
