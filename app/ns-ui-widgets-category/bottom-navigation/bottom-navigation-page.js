const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/bottom-navigation/basics/basics-page")
    // new link("Styling", "ns-ui-widgets-category/tab-view/styling/styling-page"),
    // new link("Title Icon Fonts", "ns-ui-widgets-category/tab-view/title-icon-fonts/title-icon-fonts-page"),
    // new link("Code Behind", "ns-ui-widgets-category/tab-view/code-behind/code-behind-page"),
    // new link("Navigation", "ns-ui-widgets-category/tab-view/navigation/navigation")
];
const navigationLinksTsc = [
    new link("Basics", "ns-ui-widgets-category/bottom-navigation/basics/basics-ts-page")
    // new link("Navigation", "ns-ui-widgets-category/tab-view/navigation/navigation-ts-page")
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
