const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("BasicWebView", "ns-ui-widgets-category/web-view/basics/basics-page"),
    new link("WebView source", "ns-ui-widgets-category/web-view/source-load/source-load-page"),
    new link("Gestures", "ns-ui-widgets-category/web-view/gestures/gestures-page"),
    new link("Events", "ns-ui-widgets-category/web-view/events/events-page")
];
const navigationLinksTsc = [
    new link("BasicWebView", "ns-ui-widgets-category/web-view/basics/basics-ts-page"),
    new link("WebView source", "ns-ui-widgets-category/web-view/source-load/source-load-ts-page"),
    new link("Gestures", "ns-ui-widgets-category/web-view/gestures/gestures-ts-page"),
    new link("Events", "ns-ui-widgets-category/web-view/events/events-ts-page")
];
function onNavigatingTo(args) {
    const page = args.object;

    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples:false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
