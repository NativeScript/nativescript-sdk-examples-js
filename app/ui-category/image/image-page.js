const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui-category/image/basics/basics-page"),
    new link("Binding", "/ui-category/image/binding/binding-page"),
    new link("Image Source", "/ui-category/image/image-source/image-source-page"),
    new link("Stretching", "/ui-category/image/stretching/stretching-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
