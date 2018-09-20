const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const platformModule = require("tns-core-modules/platform");
const navigationLinks = [
    new link("Basics", "ns-ui-widgets-category/tab-view/basics/basics-page"),
    new link("Styling", "ns-ui-widgets-category/tab-view/styling/styling-page"),
    new link("Title Icon Fonts", "ns-ui-widgets-category/tab-view/title-icon-fonts/title-icon-fonts-page"),
    new link("Code Behind", "ns-ui-widgets-category/tab-view/code-behind/code-behind-page"),
    new link("Navigation", "ns-ui-widgets-category/tab-view/navigation/navigation")
];
const navigationLinksTsc = [
    new link("Code Behind", "ns-ui-widgets-category/tab-view/code-behind/code-behind-ts-page"),
    new link("Navigation", "ns-ui-widgets-category/tab-view/navigation/navigation-ts-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    if ((platformModule.isAndroid) && (navigationLinks.filter((e) => e.title === "Tabs Position Android").length < 1)) {
        navigationLinks.push(new link("Tabs Position Android", "/ns-ui-widgets-category/tab-view/tabs-position-android/tabs-position-android-page"));
        navigationLinks.push(new link("Offscreen Tab Limit Android", "/ns-ui-widgets-category/tab-view/offscreen-tab-limit-android/offscreen-tab-limit-android-page"));
    }
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples:false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
