const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Get", "ns-framework-modules-category/http/get/get-page"),
    new link("Post", "ns-framework-modules-category/http/post/post-page")
];
const navigationLinksTsc = [
    new link("Get", "ns-framework-modules-category/http/get/get-ts-page"),
    new link("Post", "ns-framework-modules-category/http/post/post-ts-page")
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
