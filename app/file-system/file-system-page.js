const ListViewLinksModel = require("../links-view-model");
const link = require("../link");
const navigationLinks = [
    new link("Create", "file-system/create/create-page"),
    new link("Delete", "file-system/delete/delete-page"),
    new link("Paths", "file-system/paths/paths-page"),
    new link("Read", "file-system/read/read-page"),
    new link("Update", "file-system/update/update-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
