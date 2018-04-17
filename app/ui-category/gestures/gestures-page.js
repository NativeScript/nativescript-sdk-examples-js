const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Tap", "/ui-category/gestures/tap/tap-page"),
    new link("Double Tap", "/ui-category/gestures/double-tap/double-tap-page"),
    new link("Long Press", "/ui-category/gestures/long-press/long-press-page"),
    new link("Swipe", "/ui-category/gestures/swipe/swipe-page"),
    new link("Rotation", "/ui-category/gestures/rotation/rotation-page"),
    new link("Pan", "/ui-category/gestures/pan/pan-page"),
    new link("Pinch", "/ui-category/gestures/pinch/pinch-page"),
    new link("Touch", "/ui-category/gestures/touch/touch-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
