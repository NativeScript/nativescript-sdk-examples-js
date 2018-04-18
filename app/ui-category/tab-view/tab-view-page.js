const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const platformModule = require("tns-core-modules/platform");
const navigationLinks = [
    new link("Basics", "ui-category/tab-view/basics/basics-page"),
    new link("Styling", "ui-category/tab-view/styling/styling-page"),
    new link("Icon Fonts", "ui-category/tab-view/icon-fonts/icon-fonts-page"),
    new link("Code Behind", "ui-category/tab-view/code-behind/code-behind-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    if ((platformModule.isAndroid) && (navigationLinks.filter((e) => e.title === "Tabs Position").length < 1)) {
        navigationLinks.push(new link("Tabs Position", "/ui-category/tab-view/tabs-position/tabs-position-page"));
        navigationLinks.push(new link("Tabs Limit", "/ui-category/tab-view/tabs-limit/tabs-limit-page"));
    }
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
