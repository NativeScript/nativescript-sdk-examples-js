import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Custom Trace Writer", "ns-framework-modules-category/trace/custom-trace-writer/custom-trace-writer-page"),
    new Link("Trace Specific Categories", "ns-framework-modules-category/trace/trace-specific-categories/trace-specific-categories-page")
];
const navigationLinksTsc = [
    new Link("Custom Trace Writer", "ns-framework-modules-category/trace/custom-trace-writer/custom-trace-writer-ts-page"),
    new Link("Trace Specific Categories", "ns-framework-modules-category/trace/trace-specific-categories/trace-specific-categories-ts-page")
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

