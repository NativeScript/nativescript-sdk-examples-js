const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/scroll-view/vertical-scroll-view/vertical-scroll-view-page"),
    new link("Horizontal", "/ui/scroll-view/horizontal-scroll-view/horizontal-scroll-view-page"),
    new link("Scroll Event", "/ui/scroll-view/scroll-view-event/scroll-view-event-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
