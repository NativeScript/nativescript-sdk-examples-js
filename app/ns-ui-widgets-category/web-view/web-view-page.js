import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("BasicWebView", "ns-ui-widgets-category/web-view/basics/basics-page"),
    new Link("WebView source", "ns-ui-widgets-category/web-view/source-load/source-load-page"),
    new Link("Gestures", "ns-ui-widgets-category/web-view/gestures/gestures-page"),
    new Link("Events", "ns-ui-widgets-category/web-view/events/events-page")
];
const navigationLinksTsc = [
    new Link("BasicWebView", "ns-ui-widgets-category/web-view/basics/basics-ts-page"),
    new Link("WebView source", "ns-ui-widgets-category/web-view/source-load/source-load-ts-page"),
    new Link("Gestures", "ns-ui-widgets-category/web-view/gestures/gestures-ts-page"),
    new Link("Events", "ns-ui-widgets-category/web-view/events/events-ts-page")
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

