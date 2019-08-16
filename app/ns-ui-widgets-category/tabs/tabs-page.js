const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");

const navigationLinks = [
    new link("Usage", "ns-ui-widgets-category/tabs/usage/usage-page"),
    new link("Theming", "ns-ui-widgets-category/tabs/theming/theming-page"),
    new link("Events", "ns-ui-widgets-category/tabs/events/events-page"),
    new link("Properties", "ns-ui-widgets-category/tabs/properties/properties-page"),
    new link("Tips & Tricks", "ns-ui-widgets-category/tabs/tips-and-tricks/tips-and-tricks-page")
];
const navigationLinksTsc = [
    new link("Usage", "ns-ui-widgets-category/tabs/usage/usage-ts-page"),
    new link("Theming", "ns-ui-widgets-category/tabs/theming/theming-ts-page"),
    new link("Events", "ns-ui-widgets-category/tabs/events/events-ts-page"),
    new link("Properties", "ns-ui-widgets-category/tabs/properties/properties-ts-page"),
    new link("Tips & Tricks", "ns-ui-widgets-category/tabs/tips-and-tricks/tips-and-tricks-ts-page")
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
