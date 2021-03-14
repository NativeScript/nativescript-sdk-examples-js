import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Basics", "ns-ui-widgets-category/list-view/basics/basics-page"),
    new Link("Code Behind", "ns-ui-widgets-category/list-view/code-behind/code-behind-page"),
    new Link("Events", "ns-ui-widgets-category/list-view/events/events-page"),
    new Link("Multiple Templates", "ns-ui-widgets-category/list-view/multiple-templates/multiple-templates-page"),
    new Link("Multiple Templates Selector Function", "ns-ui-widgets-category/list-view/multiple-templates-selector-function/multiple-templates-selector-function-page")
];
const navigationLinksTsc = [
    new Link("Basics", "ns-ui-widgets-category/list-view/basics/basics-ts-page"),
    new Link("Code Behind", "ns-ui-widgets-category/list-view/code-behind/code-behind-ts-page"),
    new Link("Events", "ns-ui-widgets-category/list-view/events/events-ts-page"),
    new Link("Multiple Templates Selector Function", "ns-ui-widgets-category/list-view/multiple-templates-selector-function/multiple-templates-selector-function-ts-page")
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

