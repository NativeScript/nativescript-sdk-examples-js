import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Basics", "ns-ui-widgets-category/segmented-bar/basics/basics-page"),
    new Link("SegmentedBar Views", "ns-ui-widgets-category/segmented-bar/views/views-page"),
    new Link("Code behind", "ns-ui-widgets-category/segmented-bar/code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new Link("Basics", "ns-ui-widgets-category/segmented-bar/basics/basics-ts-page"),
    new Link("SegmentedBar Views", "ns-ui-widgets-category/segmented-bar/views/views-ts-page"),
    new Link("Code behind", "ns-ui-widgets-category/segmented-bar/code-behind/code-behind-ts-page")
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

