const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Page Creation", "ns-ui-widgets-category/page/page-creation/page-creation-page"),
    new link("Page Reference", "ns-ui-widgets-category/page/page-reference/page-reference-page"),
    new link("Page Events", "ns-ui-widgets-category/page/page-events/page-events-page")
];
const navigationLinksTsc = [
    new link("Page Creation", "ns-ui-widgets-category/page/page-creation/page-creation-ts-page"),
    new link("Page Reference", "ns-ui-widgets-category/page/page-reference/page-reference-ts-page"),
    new link("Page Events", "ns-ui-widgets-category/page/page-events/page-events-ts-page")
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
