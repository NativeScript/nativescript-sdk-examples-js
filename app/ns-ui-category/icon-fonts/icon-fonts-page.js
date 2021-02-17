import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Usage", "ns-ui-category/icon-fonts/usage/usage-page"),
    new Link("Tips & Tricks", "ns-ui-category/icon-fonts/tips-and-tricks/tips-and-tricks-page")
];
const navigationLinksTsc = [
    new Link("Tips & Tricks", "ns-ui-category/icon-fonts/tips-and-tricks/tips-and-tricks-ts-page")
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

