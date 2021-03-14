import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Usage", "ns-framework-modules-category/file-system/usage/usage-page"),
    new Link("Delete", "ns-framework-modules-category/file-system/delete/delete-page"),
    new Link("Paths", "ns-framework-modules-category/file-system/paths/paths-page"),
    new Link("Read", "ns-framework-modules-category/file-system/read/read-page"),
    new Link("Update", "ns-framework-modules-category/file-system/update/update-page")
];
const navigationLinksTsc = [
    new Link("Usage", "ns-framework-modules-category/file-system/usage/usage-ts-page"),
    new Link("Delete", "ns-framework-modules-category/file-system/delete/delete-ts-page"),
    new Link("Paths", "ns-framework-modules-category/file-system/paths/paths-ts-page"),
    new Link("Read", "ns-framework-modules-category/file-system/read/read-ts-page"),
    new Link("Update", "ns-framework-modules-category/file-system/update/update-ts-page")
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

