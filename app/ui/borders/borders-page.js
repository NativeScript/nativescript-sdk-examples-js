const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/borders/basics/basics-page"),
    new link("Border Radius", "/ui/borders/border-radius/border-radius-page"),
    new link("Code-Behind", "/ui/borders/code-behind/code-behind-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
