import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Usage", "ns-ui-widgets-category/formatted-string/usage/usage-page"),
    new Link("Code-Behind", "ns-ui-widgets-category/formatted-string/code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new Link("Code-Behind", "ns-ui-widgets-category/formatted-string/code-behind/code-behind-ts-page")
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

