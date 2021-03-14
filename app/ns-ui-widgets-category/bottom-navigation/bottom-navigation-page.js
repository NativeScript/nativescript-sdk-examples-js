import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Usage", "ns-ui-widgets-category/bottom-navigation/usage/usage-page"),
    new Link("Styling", "ns-ui-widgets-category/bottom-navigation/styling/styling-page")
];
const navigationLinksTsc = [

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

