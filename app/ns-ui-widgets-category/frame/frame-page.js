import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Page Creation", "ns-ui-widgets-category/frame/frame-creation/frame-creation-page"),
    new Link("Page Reference", "ns-ui-widgets-category/frame/frame-reference/frame-reference-page"),
    new Link("Basic Navigation", "ns-ui-widgets-category/frame/basic-navigation/navigation-page"),
    new Link("Dynamic Navigation", "ns-ui-widgets-category/frame/dynamic-navigation/dynamic-navigation-page"),
    new Link("Navigation Context", "ns-ui-widgets-category/frame/navigation-context/navigation-context-page"),
    new Link("ActionBar visibility", "ns-ui-widgets-category/frame/action-bar-visibility/actionbar-visibility-page")
];
const navigationLinksTsc = [
    new Link("Page Creation", "ns-ui-widgets-category/frame/frame-creation/frame-creation-ts-page"),
    new Link("Page Reference", "ns-ui-widgets-category/frame/frame-reference/frame-reference-ts-page"),
    new Link("Basic Navigation", "ns-ui-widgets-category/frame/basic-navigation/navigation-ts-page"),
    new Link("Dynamic Navigation", "ns-ui-widgets-category/frame/dynamic-navigation/dynamic-navigation-ts-page"),
    new Link("Navigation Context", "ns-ui-widgets-category/frame/navigation-context/navigation-ts-context-page")
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

