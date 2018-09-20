const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/styling/basics/basics-page"),
    new link("Gradients", "ns-ui-widgets-category/styling/gradients/gradients-page"),
    new link("Border", "ns-ui-widgets-category/styling/border-basics/basics-page"),
    new link("Border radius", "ns-ui-widgets-category/styling/border-radius/border-radius-page"),
    new link("Border code-behind", "ns-ui-widgets-category/styling/border-code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new link("Basics", "ns-ui-widgets-category/styling/basics/basics-ts-page"),
    new link("Border code-behind", "ns-ui-widgets-category/styling/border-code-behind/code-behind-ts-page")
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
