import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Basics", "ns-ui-widgets-category/repeater/basics/basics-page"),
    new Link("Code Behind", "ns-ui-widgets-category/repeater/code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new Link("Basics", "ns-ui-widgets-category/repeater/basics/basics-ts-page"),
    new Link("Code Behind", "ns-ui-widgets-category/repeater/code-behind/code-behind-ts-page")
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

