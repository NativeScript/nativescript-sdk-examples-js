const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const platformModule = require("tns-core-modules/platform");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/tab-view/basics/basics-page"),
    new link("Styling", "ns-ui-widgets-category/tab-view/styling/styling-page"),
    new link("Icon Fonts", "ns-ui-widgets-category/tab-view/icon-fonts/icon-fonts-page"),
    new link("Code Behind", "ns-ui-widgets-category/tab-view/code-behind/code-behind-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    if ((platformModule.isAndroid) && (navigationLinks.filter((e) => e.title === "Tabs Position").length < 1)) {
        navigationLinks.push(new link("Tabs Position", "/ns-ui-widgets-category/tab-view/tabs-position/tabs-position-page"));
        navigationLinks.push(new link("Tabs Limit", "/ns-ui-widgets-category/tab-view/tabs-limit/tabs-limit-page"));
    }
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
