import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Page Creation", "ns-ui-widgets-category/page/page-creation/page-creation-page"),
    new Link("Page Reference", "ns-ui-widgets-category/page/page-reference/page-reference-page"),
    new Link("Page Events", "ns-ui-widgets-category/page/page-events/page-events-page")
];
const navigationLinksTsc = [
    new Link("Page Creation", "ns-ui-widgets-category/page/page-creation/page-creation-ts-page"),
    new Link("Page Reference", "ns-ui-widgets-category/page/page-reference/page-reference-ts-page"),
    new Link("Page Events", "ns-ui-widgets-category/page/page-events/page-events-ts-page")
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

