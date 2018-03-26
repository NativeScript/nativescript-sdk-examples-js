const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Vertical", "/ui/scroll-view/vertical/vertical-page"),
    new link("Horizontal", "/ui/scroll-view/horizontal/horizontal-page"),
    new link("Events", "/ui/scroll-view/events/events-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
