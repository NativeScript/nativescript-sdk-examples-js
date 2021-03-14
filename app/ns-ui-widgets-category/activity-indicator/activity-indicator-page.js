import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link(
        "Usage",
        "ns-ui-widgets-category/activity-indicator/usage/usage-page"
    ),
    new Link(
        "Code-Behind",
        "ns-ui-widgets-category/activity-indicator/code-behind/code-behind-page"
    ),
    new Link("Tips & Tricks", "ns-ui-widgets-category/activity-indicator/tips-and-tricks/tips-and-tricks-page"),
    new Link(
        "Styling",
        "ns-ui-widgets-category/activity-indicator/styling/styling-page"
    )
];

const navigationLinksTsc = [
    new Link(
        "Usage",
        "ns-ui-widgets-category/activity-indicator/usage/usage-ts-page"
    ),
    new Link(
        "Code-Behind",
        "ns-ui-widgets-category/activity-indicator/code-behind/code-behind-ts-page"
    ),
    new Link("Tips & Tricks", "ns-ui-widgets-category/activity-indicator/tips-and-tricks/tips-and-tricks-ts-page")
];

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples: false,
        tsclinks: navigationLinksTsc
    });
}

