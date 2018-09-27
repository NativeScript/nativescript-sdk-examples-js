const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/list-picker/basics/basics-page"),
    new link("Code-Behind", "ns-ui-widgets-category/list-picker/code-behind/code-behind-page"),
    new link("Key-Value Pairs", "ns-ui-widgets-category/list-picker/key-value-pairs/key-value-pairs-page")
];
const navigationLinksTsc = [
    new link("Basics", "ns-ui-widgets-category/list-picker/basics/basics-ts-page"),
    new link("Code-Behind", "ns-ui-widgets-category/list-picker/code-behind/code-behind-ts-page"),
    new link("Key-Value Pairs", "ns-ui-widgets-category/list-picker/key-value-pairs/key-value-pairs-ts-page")
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
