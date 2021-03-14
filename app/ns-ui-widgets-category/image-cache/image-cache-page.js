import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Basics", "ns-ui-widgets-category/image-cache/basics/basics-page")
];
const navigationLinksTsc = [
    new Link("Basics", "ns-ui-widgets-category/image-cache/basics/basics-ts-page")
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

