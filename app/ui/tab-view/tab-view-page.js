const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const platformModule = require("tns-core-modules/platform");
const navigationLinks = [
    new link("Basics", "/ui/tab-view/basics/basics-page"),
    new link("Styling", "/ui/tab-view/styling/styling-page"),
    new link("Icon Fonts", "/ui/tab-view/icon-fonts/icon-fonts-page"),
    new link("Code Behind", "/ui/tab-view/code-behind/code-behind-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    if((platformModule.isAndroid) && (navigationLinks.filter(e => e.title === 'Tabs Position').length < 1)){
        navigationLinks.push(new link("Tabs Position", "/ui/tab-view/tabs-position/tabs-position-page"));
    }
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
