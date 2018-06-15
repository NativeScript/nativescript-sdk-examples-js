const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Create", "ns-framework-modules-category/file-system/create/create-page"),
    new link("Delete", "ns-framework-modules-category/file-system/delete/delete-page"),
    new link("Paths", "ns-framework-modules-category/file-system/paths/paths-page"),
    new link("Read", "ns-framework-modules-category/file-system/read/read-page"),
    new link("Update", "ns-framework-modules-category/file-system/update/update-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
