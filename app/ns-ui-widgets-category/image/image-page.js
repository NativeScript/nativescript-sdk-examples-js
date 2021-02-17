import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Usage", "ns-ui-widgets-category/image/usage/usage-page"),
    new Link("Styling", "ns-ui-widgets-category/image/styling/styling-page")
];
const navigationLinksTsc = [
    new Link("Usage", "ns-ui-widgets-category/image/usage/usage-ts-page"),
    new Link("Styling", "ns-ui-widgets-category/image/styling/styling-ts-page")
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

