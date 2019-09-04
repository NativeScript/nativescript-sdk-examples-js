const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link(
        "Usage",
        "ns-ui-widgets-category/activity-indicator/usage/usage-page"
    ),
    new link(
        "Styling",
        "ns-ui-widgets-category/activity-indicator/styling/styling-page"
    ),
    new link(
        "Code-Behind",
        "ns-ui-widgets-category/activity-indicator/code-behind/code-behind-page"
    ),
    new link("Tips & Tricks", "ns-ui-widgets-category/activity-indicator/tips-and-tricks/tips-and-tricks-page")
];

const navigationLinksTsc = [
    new link(
        "Usage",
        "ns-ui-widgets-category/activity-indicator/usage/usage-ts-page"
    ),
    new link(
        "Code-Behind",
        "ns-ui-widgets-category/activity-indicator/code-behind/code-behind-ts-page"
    ),
    new link("Tips & Tricks", "ns-ui-widgets-category/activity-indicator/tips-and-tricks/tips-and-tricks-ts-page")
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
