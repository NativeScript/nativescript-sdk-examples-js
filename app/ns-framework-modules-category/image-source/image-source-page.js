const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Load image", "ns-framework-modules-category/image-source/load-image/load-image-page"),
    new link("Save image", "ns-framework-modules-category/image-source/save-image/save-image-page")
];
const navigationLinksTsc = [
    new link("Load image", "ns-framework-modules-category/image-source/load-image/load-image-ts-page"),
    new link("Save image", "ns-framework-modules-category/image-source/save-image/save-image-ts-page")
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
