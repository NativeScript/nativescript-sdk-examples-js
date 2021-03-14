import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Basics", "ns-ui-widgets-category/placeholder/basics/basics-page"),
    new Link("Platform files", "ns-ui-widgets-category/placeholder/platform-files/platform-files-page"),
    new Link("Code-behind", "ns-ui-widgets-category/placeholder/code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new Link("Basics", "ns-ui-widgets-category/placeholder/basics/basics-ts-page"),
    new Link("Platform files", "ns-ui-widgets-category/placeholder/platform-files/platform-files-ts-page"),
    new Link("Code-behind", "ns-ui-widgets-category/placeholder/code-behind/code-behind-ts-page")
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

