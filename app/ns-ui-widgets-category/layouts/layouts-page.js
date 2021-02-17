import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("AbsoluteLayout", "ns-ui-widgets-category/layouts/absolute-layout/absolute-layout-page"),
    new Link("DockLayout", "ns-ui-widgets-category/layouts/dock-layout/dock-layout-page"),
    new Link("FlexboxLayout (flexDirection)", "ns-ui-widgets-category/layouts/flexbox-layout/flexbox-layout-page"),
    new Link("FlexboxLayout (order, flexGrow and flexShrink)", "ns-ui-widgets-category/layouts/flexbox-layout-two/flexbox-layout-page"),
    new Link("FlexboxLayout (flexWrap, justifyContent)", "ns-ui-widgets-category/layouts/flexbox-layout-three/flexbox-layout-page"),
    new Link("GridLayout", "ns-ui-widgets-category/layouts/grid-layout/grid-layout-page"),
    new Link("StackLayout", "ns-ui-widgets-category/layouts/stack-layout/stack-layout-page"),
    new Link("WrapLayout", "ns-ui-widgets-category/layouts/wrap-layout/wrap-layout-page")
];
const navigationLinksTsc = [
    new Link("AbsoluteLayout", "ns-ui-widgets-category/layouts/absolute-layout/absolute-layout-ts-page"),
    new Link("DockLayout", "ns-ui-widgets-category/layouts/dock-layout/dock-layout-ts-page"),
    new Link("FlexboxLayout (flexDirection)", "ns-ui-widgets-category/layouts/flexbox-layout/flexbox-layout-page"),
    new Link("FlexboxLayout (order, flexGrow and flexShrink)", "ns-ui-widgets-category/layouts/flexbox-layout-two/flexbox-layout-page"),
    new Link("FlexboxLayout (flexWrap, justifyContent)", "ns-ui-widgets-category/layouts/flexbox-layout-three/flexbox-layout-page"),
    new Link("GridLayout", "ns-ui-widgets-category/layouts/grid-layout/grid-layout-ts-page"),
    new Link("StackLayout", "ns-ui-widgets-category/layouts/stack-layout/stack-layout-ts-page"),
    new Link("WrapLayout", "ns-ui-widgets-category/layouts/wrap-layout/wrap-layout-ts-page")
];
export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples: false,
        tsclinks: navigationLinksTsc
    });
}

