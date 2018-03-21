const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/switch/basics-switch/basics-switch-page"),
    new link("Switch Styling", "/ui/switch/switch-styling/switch-styling-page"),
    new link("Switch (Code-Behind)", "/ui/switch/create-switch/create-switch-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
