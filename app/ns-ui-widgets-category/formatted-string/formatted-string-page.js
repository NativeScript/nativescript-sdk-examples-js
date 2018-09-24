const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/formatted-string/basics/basics-page"),
    new link("Code-Behind", "ns-ui-widgets-category/formatted-string/code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new link("Code-Behind", "ns-ui-widgets-category/formatted-string/code-behind/code-behind-ts-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples: false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
