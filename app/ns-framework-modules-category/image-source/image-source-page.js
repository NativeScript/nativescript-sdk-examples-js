import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Load image", "ns-framework-modules-category/image-source/load-image/load-image-page"),
    new Link("Save image", "ns-framework-modules-category/image-source/save-image/save-image-page")
];
const navigationLinksTsc = [
    new Link("Load image", "ns-framework-modules-category/image-source/load-image/load-image-ts-page"),
    new Link("Save image", "ns-framework-modules-category/image-source/save-image/save-image-ts-page")
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

