const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Page Creation", "ns-ui-widgets-category/frame/frame-creation/frame-creation-page"),
    new link("Page Reference", "ns-ui-widgets-category/frame/frame-reference/frame-reference-page"),
    new link("Basic Navigation", "ns-ui-widgets-category/frame/basic-navigation/navigation-page"),
    new link("Dynamic Navigation", "ns-ui-widgets-category/frame/dynamic-navigation/dynamic-navigation-page"),
    new link("Navigation Context", "ns-ui-widgets-category/frame/navigation-context/navigation-context-page"),
    new link("ActionBar visibility", "ns-ui-widgets-category/frame/action-bar-visibility/actionbar-visibility-page")
];
const navigationLinksTsc = [
    new link("Page Creation", "ns-ui-widgets-category/frame/frame-creation/frame-creation-ts-page"),
    new link("Page Reference", "ns-ui-widgets-category/frame/frame-reference/frame-reference-ts-page"),
    new link("Basic Navigation", "ns-ui-widgets-category/frame/basic-navigation/navigation-ts-page"),
    new link("Dynamic Navigation", "ns-ui-widgets-category/frame/dynamic-navigation/dynamic-navigation-ts-page"),
    new link("Navigation Context", "ns-ui-widgets-category/frame/navigation-context/navigation-ts-context-page")
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
