const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Usage", "ns-ui-widgets-category/bottom-navigation/usage/usage-page"),
    new link("Usage", "ns-ui-widgets-category/bottom-navigation/styling/styling-page"),
    new link("Events", "ns-ui-widgets-category/bottom-navigation/events/events-page"),
    new link("Properties", "ns-ui-widgets-category/bottom-navigation/properties/properties-page"),
    new link("Tips & Tricks", "ns-ui-widgets-category/bottom-navigation/tips-and-tricks/tips-and-tricks-page")
];
const navigationLinksTsc = [
    new link("Usage", "ns-ui-widgets-category/bottom-navigation/usage/usage-ts-page"),
    new link("Usage", "ns-ui-widgets-category/bottom-navigation/styling/styling-ts-page"),
    new link("Events", "ns-ui-widgets-category/bottom-navigation/events/events-ts-page"),
    new link("Properties", "ns-ui-widgets-category/bottom-navigation/properties/properties-ts-page"),
    new link("Tips & Tricks", "ns-ui-widgets-category/bottom-navigation/tips-and-tricks/tips-and-tricks-ts-page")
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
