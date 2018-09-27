const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("AbsoluteLayout", "ns-ui-widgets-category/layouts/absolute-layout/absolute-layout-page"),
    new link("DockLayout", "ns-ui-widgets-category/layouts/dock-layout/dock-layout-page"),
    new link("FlexboxLayout (flexDirection)", "ns-ui-widgets-category/layouts/flexbox-layout/flexbox-layout-page"),
    new link("FlexboxLayout (order, flexGrow and flexShrink)", "ns-ui-widgets-category/layouts/flexbox-layout-two/flexbox-layout-page"),
    new link("FlexboxLayout (flexWrap, justifyContent)", "ns-ui-widgets-category/layouts/flexbox-layout-three/flexbox-layout-page"),
    new link("GridLayout", "ns-ui-widgets-category/layouts/grid-layout/grid-layout-page"),
    new link("StackLayout", "ns-ui-widgets-category/layouts/stack-layout/stack-layout-page"),
    new link("WrapLayout", "ns-ui-widgets-category/layouts/wrap-layout/wrap-layout-page")
];
const navigationLinksTsc = [
    new link("AbsoluteLayout", "ns-ui-widgets-category/layouts/absolute-layout/absolute-layout-ts-page"),
    new link("DockLayout", "ns-ui-widgets-category/layouts/dock-layout/dock-layout-ts-page"),
    new link("FlexboxLayout (flexDirection)", "ns-ui-widgets-category/layouts/flexbox-layout/flexbox-layout-page"),
    new link("FlexboxLayout (order, flexGrow and flexShrink)", "ns-ui-widgets-category/layouts/flexbox-layout-two/flexbox-layout-page"),
    new link("FlexboxLayout (flexWrap, justifyContent)", "ns-ui-widgets-category/layouts/flexbox-layout-three/flexbox-layout-page"),
    new link("GridLayout", "ns-ui-widgets-category/layouts/grid-layout/grid-layout-ts-page"),
    new link("StackLayout", "ns-ui-widgets-category/layouts/stack-layout/stack-layout-ts-page"),
    new link("WrapLayout", "ns-ui-widgets-category/layouts/wrap-layout/wrap-layout-ts-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples: false,
        tsclinks: navigationLinksTsc
    });
}
exports.onNavigatingTo = onNavigatingTo;
