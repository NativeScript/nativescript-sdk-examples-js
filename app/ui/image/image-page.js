const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/image/basics/basics-page"),
    new link("Binding", "/ui/image/binding/binding-page"),
    new link("Image Source", "/ui/image/image-source/image-source-page"),
    new link("Stretching", "/ui/image/stretching/stretching-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
