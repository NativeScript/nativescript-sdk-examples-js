const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/tab-view/basics/basics-page"),
    new link("Styling", "/ui/tab-view/styling/styling-page"),
    new link("Icon Fonts", "/ui/tab-view/icon-fonts/icon-fonts-page"),
    new link("Code Behind", "/ui/tab-view/code-behind/code-behind-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
