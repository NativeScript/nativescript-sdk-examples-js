import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Get", "ns-framework-modules-category/http/get/get-page"),
    new Link("Post", "ns-framework-modules-category/http/post/post-page")
];
const navigationLinksTsc = [
    new Link("Get", "ns-framework-modules-category/http/get/get-ts-page"),
    new Link("Post", "ns-framework-modules-category/http/post/post-ts-page")
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

