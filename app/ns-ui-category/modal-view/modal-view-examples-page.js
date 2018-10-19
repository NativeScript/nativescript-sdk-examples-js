const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "ns-ui-category/modal-view/basics/basics-page"),
    new link("Modal view navigation", "ns-ui-category/modal-view/modal-navigation/main-page"),
    new link("Modal view with ActionBar", "ns-ui-category/modal-view/custom-actionbar/main-page")
];
const navigationLinksTsc = [
    new link("Basics", "ns-ui-category/modal-view/basics/basics-ts-page"),
    new link("Modal page navigation", "ns-ui-category/modal-view/modal-navigation/main-ts-page"),
    new link("Modal page with ActionBar", "ns-ui-category/modal-view/custom-actionbar/main-ts-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples:false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
