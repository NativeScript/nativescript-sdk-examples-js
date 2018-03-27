const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/segmented-bar/basics/basics-page"),
    new link("SegmentedBar Views", "/ui/segmented-bar/views/views-page"),
    new link("Code behind", "/ui/segmented-bar/code-behind/code-behind-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
