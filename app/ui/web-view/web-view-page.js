var ListViewLinksModel = require("../../links-view-model");
var link = require("../../link");
var navigationLinks = [
    new link("BasicWebView", "/ui/web-view/basic-web-view/basic-web-view-page"),
    new link("WebViewHtml", "/ui/web-view/web-view-html/web-view-html-page"),
    new link("WebViewGestures", "/ui/web-view/web-view-gestures/web-view-gestures-page"),
];
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new ListViewLinksModel({ links: navigationLinks, actionBarTitle: args.context.title });
}
exports.onNavigatingTo = onNavigatingTo;
