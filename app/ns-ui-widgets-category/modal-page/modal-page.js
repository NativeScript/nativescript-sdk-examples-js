const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/modal-page/basics/basics-page"),
    new link("Modal page navigation", "ns-ui-widgets-category/modal-page/modal-navigation/main-page"),
    new link("Modal page with ActionBar", "ns-ui-widgets-category/modal-page/custom-actionbar/main-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
