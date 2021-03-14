import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Basics", "ns-ui-category/modal-view/basics/basics-page"),
    new Link("Modal view navigation", "ns-ui-category/modal-view/modal-navigation/main-page"),
    new Link("Modal view with ActionBar", "ns-ui-category/modal-view/custom-actionbar/main-page")
];
const navigationLinksTsc = [
    new Link("Basics", "ns-ui-category/modal-view/basics/basics-ts-page"),
    new Link("Modal page navigation", "ns-ui-category/modal-view/modal-navigation/main-ts-page"),
    new Link("Modal page with ActionBar", "ns-ui-category/modal-view/custom-actionbar/main-ts-page")
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

