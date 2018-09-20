const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Create", "ns-framework-modules-category/file-system/create/create-page"),
    new link("Delete", "ns-framework-modules-category/file-system/delete/delete-page"),
    new link("Paths", "ns-framework-modules-category/file-system/paths/paths-page"),
    new link("Read", "ns-framework-modules-category/file-system/read/read-page"),
    new link("Update", "ns-framework-modules-category/file-system/update/update-page")
];
const navigationLinksTsc = [
    new link("Create", "ns-framework-modules-category/file-system/create/create-ts-page"),
    new link("Delete", "ns-framework-modules-category/file-system/delete/delete-ts-page"),
    new link("Paths", "ns-framework-modules-category/file-system/paths/paths-ts-page"),
    new link("Read", "ns-framework-modules-category/file-system/read/read-ts-page"),
    new link("Update", "ns-framework-modules-category/file-system/update/update-ts-page")
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
