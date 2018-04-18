const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("AbsoluteLayout", "ui-category/layouts/absolute-layout/absolute-layout-page"),
    new link("DockLayout", "ui-category/layouts/dock-layout/dock-layout-page"),
    new link("FlexboxLayout", "ui-category/layouts/flexbox-layout/flexbox-layout-page"),
    new link("GridLayout", "ui-category/layouts/grid-layout/grid-layout-page"),
    new link("StackLayout", "ui-category/layouts/stack-layout/stack-layout-page"),
    new link("WrapLayout", "ui-category/layouts/wrap-layout/wrap-layout-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
