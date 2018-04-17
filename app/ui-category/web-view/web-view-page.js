const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("BasicWebView", "/ui-category/web-view/basics/basics-page"),
    new link("WebView source", "/ui-category/web-view/source-load/source-load-page"),
    new link("Gestures", "/ui-category/web-view/gestures/gestures-page")
];
function onNavigatingTo(args) {
    const page = args.object;

    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
