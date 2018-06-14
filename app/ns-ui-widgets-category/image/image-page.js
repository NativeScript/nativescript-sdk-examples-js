const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/image/basics/basics-page"),
    new link("Binding", "ns-ui-widgets-category/image/binding/binding-page"),
    new link("Image Source", "ns-ui-widgets-category/image/image-source/image-source-page"),
    new link("Stretching", "ns-ui-widgets-category/image/stretching/stretching-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
