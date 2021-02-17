import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Code behind", "ns-ui-widgets-category/text-view/code-behind/code-behind-page"),
    new Link("Usage", "ns-ui-widgets-category/text-view/usage/usage-page")
];
const navigationLinksTsc = [
    new Link("Code behind", "ns-ui-widgets-category/text-view/code-behind/code-behind-ts-page"),
    new Link("Usage", "ns-ui-widgets-category/text-view/usage/usage-ts-page")
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

