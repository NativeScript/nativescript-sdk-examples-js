const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/activity-indicator/basics/basics-page"),
    new link("Styling", "/ui/activity-indicator/styling/styling-page"),
    new link("Code-Behind", "/ui/activity-indicator/code-behind/code-behind-page")
];

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title });
}
exports.onNavigatingTo = onNavigatingTo;
