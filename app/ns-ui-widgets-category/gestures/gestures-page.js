const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Tap", "ns-ui-widgets-category/gestures/tap/tap-page"),
    new link("Double Tap", "ns-ui-widgets-category/gestures/double-tap/double-tap-page"),
    new link("Long Press", "ns-ui-widgets-category/gestures/long-press/long-press-page"),
    new link("Swipe", "ns-ui-widgets-category/gestures/swipe/swipe-page"),
    new link("Rotation", "ns-ui-widgets-category/gestures/rotation/rotation-page"),
    new link("Pan", "ns-ui-widgets-category/gestures/pan/pan-page"),
    new link("Pinch", "ns-ui-widgets-category/gestures/pinch/pinch-page"),
    new link("Touch", "ns-ui-widgets-category/gestures/touch/touch-page")
];
const navigationLinksTsc = [
    new link("Tap", "ns-ui-widgets-category/gestures/tap/tap-ts-page"),
    new link("Double Tap", "ns-ui-widgets-category/gestures/double-tap/double-tap-ts-page"),
    new link("Long Press", "ns-ui-widgets-category/gestures/long-press/long-press-ts-page"),
    new link("Swipe", "ns-ui-widgets-category/gestures/swipe/swipe-ts-page"),
    new link("Rotation", "ns-ui-widgets-category/gestures/rotation/rotation-ts-page"),
    new link("Pan", "ns-ui-widgets-category/gestures/pan/pan-ts-page"),
    new link("Pinch", "ns-ui-widgets-category/gestures/pinch/pinch-ts-page"),
    new link("Touch", "ns-ui-widgets-category/gestures/touch/touch-ts-page")
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
