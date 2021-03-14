import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Get", "ns-framework-modules-category/fetch/get/get-page"),
    new Link("Post", "ns-framework-modules-category/fetch/post/post-page")
];
const navigationLinksTsc = [
    new Link("Get", "ns-framework-modules-category/fetch/get/get-ts-page"),
    new Link("Post", "ns-framework-modules-category/fetch/post/post-ts-page")
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

