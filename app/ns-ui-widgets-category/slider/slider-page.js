import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Usage", "ns-ui-widgets-category/slider/usage/usage-page"),
    new Link("Style", "ns-ui-widgets-category/slider/styling/styling-page"),
    new Link("Code Behind", "ns-ui-widgets-category/slider/code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new Link("Usage", "ns-ui-widgets-category/slider/usage/usage-ts-page"),
    new Link("Code Behind", "ns-ui-widgets-category/slider/code-behind/code-behind-ts-page")
];
export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples:false,
        tsclinks: navigationLinksTsc
    });
}
