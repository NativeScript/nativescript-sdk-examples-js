const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Vertical", "ns-ui-widgets-category/scroll-view/vertical/vertical-page"),
    new link("Horizontal", "ns-ui-widgets-category/scroll-view/horizontal/horizontal-page"),
    new link("Events", "ns-ui-widgets-category/scroll-view/events/events-page")
];
const navigationLinksTsc = [
    new link("Events", "ns-ui-widgets-category/scroll-view/events/events-page")
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
