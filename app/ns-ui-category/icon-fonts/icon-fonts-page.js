const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Usage", "ns-ui-category/icon-fonts/usage/usage-page"),
    new link("Tips & Tricks", "ns-ui-category/icon-fonts/tips-and-tricks/tips-and-tricks-page")
];
const navigationLinksTsc = [
    new link("Tips & Tricks", "ns-ui-category/icon-fonts/tips-and-tricks/tips-and-tricks-ts-page")
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
