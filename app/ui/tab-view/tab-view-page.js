const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Basics", "/ui/tab-view/basics-tab-view/basics-tab-view-page"),
    new link("TabView Styling/Binding", "/ui/tab-view/tab-view-styling-binding/tab-view-styling-binding-page"),
    new link("TabView Icon Fonts", "/ui/tab-view/tab-view-icon-fonts/tab-view-icon-fonts-page"),
    new link("TabView Code-Behind", "/ui/tab-view/create-tab-view/create-tab-view-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
