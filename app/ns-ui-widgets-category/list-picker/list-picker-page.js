const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/list-picker/basics/basics-page"),
    new link("Code-Behind", "ns-ui-widgets-category/list-picker/code-behind/code-behind-page"),
    new link("Key-Value Pairs", "ns-ui-widgets-category/list-picker/key-value-pairs/key-value-pairs")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
