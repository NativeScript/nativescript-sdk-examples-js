const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ui-category/styling/basics/basics-page"),
    new link("Gradients", "ui-category/styling/gradients/gradients-page"),
    new link("Border", "ui-category/styling/border-basics/basics-page"),
    new link("Border radius", "ui-category/styling/border-radius/border-radius-page"),
    new link("Border code-behind", "ui-category/styling/border-code-behind/code-behind-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
