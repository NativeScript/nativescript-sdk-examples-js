const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Usage", "ns-ui-widgets-category/scroll-view/usage/usage-page"),
    new link("Tips and tricks", "ns-ui-widgets-category/scroll-view/tips-and-tricks/tips-and-tricks-page")
];
const navigationLinksTsc = [
    new link("Tips and tricks", "ns-ui-widgets-category/scroll-view/tips-and-tricks/tips-and-tricks-ts-page")
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
