const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/segmented-bar/basics-segmented-bar/basics-segmented-bar-page"),
    new link("SegmentedBar Views", "/ui/segmented-bar/segmented-bar-views/segmented-bar-views-page"),
    new link("SegmentedBar (Code-behind)", "/ui/segmented-bar/create-segmented-bar/create-segmented-bar-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
