var ListViewLinksModel = require("../../links-view-model");
var link = require("../../link");
var navigationLinks = [
    new link("Basics", "/ui/activity-indicator/basics/basics-page"),
    new link("Styling", "/ui/activity-indicator/styling/styling-page"),
    new link("Dynamic Creation", "/ui/activity-indicator/code-behind/code-behind-page")
];

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new ListViewLinksModel({ links: navigationLinks, actionBarTitle: args.context.title });
}
exports.onNavigatingTo = onNavigatingTo;
