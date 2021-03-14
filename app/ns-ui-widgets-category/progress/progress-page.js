import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Usage", "ns-ui-widgets-category/progress/usage/usage-page"),
    new Link("Tips and tricks", "ns-ui-widgets-category/progress/tips-and-tricks/tips-and-tricks-page"),
    new Link("Code Behind", "ns-ui-widgets-category/progress/code-behind/code-behind-page"),
    new Link("Style", "ns-ui-widgets-category/progress/styling/styling-page")
];
const navigationLinksTsc = [
    new Link("Usage", "ns-ui-widgets-category/progress/usage/usage-ts-page"),
    new Link("Tips and tricks", "ns-ui-widgets-category/progress/tips-and-tricks/tips-and-tricks-ts-page"),
    new Link("Code Behind", "ns-ui-widgets-category/progress/code-behind/code-behind-ts-page")
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

