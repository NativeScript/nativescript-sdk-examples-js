import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Usage", "ns-ui-widgets-category/scroll-view/usage/usage-page"),
    new Link("Tips and tricks", "ns-ui-widgets-category/scroll-view/tips-and-tricks/tips-and-tricks-page")
];
const navigationLinksTsc = [
    new Link("Tips and tricks", "ns-ui-widgets-category/scroll-view/tips-and-tricks/tips-and-tricks-ts-page")
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

