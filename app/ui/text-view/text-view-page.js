var ListViewLinksModel = require("../../links-view-model");
var link = require("../../link");
var navigationLinks = [
    new link("Create TextView", "/ui/text-view/create-text-view/create-text-view-page"),
    new link("TextView Basics", "/ui/text-view/basics-text-view/basics-text-view-page"),
];
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new ListViewLinksModel({ links: navigationLinks, actionBarTitle: args.context.title });
}
exports.onNavigatingTo = onNavigatingTo;
