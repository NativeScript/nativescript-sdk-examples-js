const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/date-picker/basics/basics-page"),
    new link("Code-Behind", "/ui/date-picker/code-behind/code-behind-page"),
    new link("Styling", "/ui/date-picker/styling/styling-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
