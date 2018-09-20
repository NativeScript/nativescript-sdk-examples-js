const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/placeholder/basics/basics-page"),
    new link("Platform files", "ns-ui-widgets-category/placeholder/platform-files/platform-files-page")
];
const navigationLinksTsc = [
    new link("Basics", "ns-ui-widgets-category/placeholder/basics/basics-ts-page"),
    new link("Platform files", "ns-ui-widgets-category/placeholder/platform-files/platform-files-ts-page")
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
