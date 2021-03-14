import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Usage", "ns-ui-widgets-category/text-field/usage/usage-page"),
    new Link("Styling", "ns-ui-widgets-category/text-field/styling/styling-page"),
    new Link("Code Behind", "ns-ui-widgets-category/text-field/code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new Link("Usage", "ns-ui-widgets-category/text-field/usage/usage-ts-page"),
    new Link("Code Behind", "ns-ui-widgets-category/text-field/code-behind/code-behind-ts-page")
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

