const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/segmented-bar/basics/basics-page"),
    new link("SegmentedBar Views", "ns-ui-widgets-category/segmented-bar/views/views-page"),
    new link("Code behind", "ns-ui-widgets-category/segmented-bar/code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new link("Basics", "ns-ui-widgets-category/segmented-bar/basics/basics-ts-page"),
    new link("SegmentedBar Views", "ns-ui-widgets-category/segmented-bar/views/views-ts-page"),
    new link("Code behind", "ns-ui-widgets-category/segmented-bar/code-behind/code-behind-ts-page")
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
