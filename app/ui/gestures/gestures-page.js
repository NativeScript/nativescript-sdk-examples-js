const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Tap", "/ui/gestures/tap/tap-page"),
    new link("Double Tap", "/ui/gestures/double-tap/double-tap-page"),
    new link("Long Press", "/ui/gestures/long-press/long-press-page"),
    new link("Swipe", "/ui/gestures/swipe/swipe-page"),
    new link("Rotation", "/ui/gestures/rotation/rotation-page"),
    new link("Pan", "/ui/gestures/pan/pan-page"),
    new link("Pinch", "/ui/gestures/pinch/pinch-page"),
    new link("Touch", "/ui/gestures/touch/touch-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
