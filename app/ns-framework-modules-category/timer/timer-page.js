import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Interval", "ns-framework-modules-category/timer/setting-interval/interval-page"),
    new Link("Timeout", "ns-framework-modules-category/timer/setting-timeout/timeout-page")
];
const navigationLinksTsc = [
    new Link("Interval", "ns-framework-modules-category/timer/setting-interval/interval-ts-page"),
    new Link("Timeout", "ns-framework-modules-category/timer/setting-timeout/timeout-ts-page")
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

