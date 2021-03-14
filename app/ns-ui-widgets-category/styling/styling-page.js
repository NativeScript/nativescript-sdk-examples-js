import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Basics", "ns-ui-widgets-category/styling/basics/basics-page"),
    new Link("Gradients", "ns-ui-widgets-category/styling/gradients/gradients-page"),
    new Link("Border", "ns-ui-widgets-category/styling/border-basics/basics-page"),
    new Link("Border radius", "ns-ui-widgets-category/styling/border-radius/border-radius-page"),
    new Link("Border code-behind", "ns-ui-widgets-category/styling/border-code-behind/code-behind-page")
];
const navigationLinksTsc = [
    new Link("Basics", "ns-ui-widgets-category/styling/basics/basics-ts-page"),
    new Link("Border code-behind", "ns-ui-widgets-category/styling/border-code-behind/code-behind-ts-page")
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

