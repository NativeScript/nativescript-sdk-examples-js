var ListViewLinksModel = require("../../links-view-model");
var link = require("../../link");
var navigationLinks = [
    new link("Basics", "/ui/button/basics/basics-page"),
    new link("Styling", "/ui/button/styling/styling-page"),
    new link("Dynamic Creation", "/ui/button/dynamic-creation/dynamic-creation-page"),
];
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new ListViewLinksModel({ links: navigationLinks, actionBarTitle: args.context.title });
}
exports.onNavigatingTo = onNavigatingTo;
