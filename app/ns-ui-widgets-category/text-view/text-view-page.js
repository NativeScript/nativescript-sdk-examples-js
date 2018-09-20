const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Code behind", "ns-ui-widgets-category/text-view/code-behind/code-behind-page"),
    new link("Basics", "ns-ui-widgets-category/text-view/basics/basics-page")
];
const navigationLinksTsc = [
    new link("Code behind", "ns-ui-widgets-category/text-view/code-behind/code-behind-ts-page"),
    new link("Basics", "ns-ui-widgets-category/text-view/basics/basics-ts-page")
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
