import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Tap", "ns-ui-widgets-category/gestures/tap/tap-page"),
    new Link("Double Tap", "ns-ui-widgets-category/gestures/double-tap/double-tap-page"),
    new Link("Long Press", "ns-ui-widgets-category/gestures/long-press/long-press-page"),
    new Link("Swipe", "ns-ui-widgets-category/gestures/swipe/swipe-page"),
    new Link("Rotation", "ns-ui-widgets-category/gestures/rotation/rotation-page"),
    new Link("Pan", "ns-ui-widgets-category/gestures/pan/pan-page"),
    new Link("Pinch", "ns-ui-widgets-category/gestures/pinch/pinch-page"),
    new Link("Touch", "ns-ui-widgets-category/gestures/touch/touch-page")
];
const navigationLinksTsc = [
    new Link("Tap", "ns-ui-widgets-category/gestures/tap/tap-ts-page"),
    new Link("Double Tap", "ns-ui-widgets-category/gestures/double-tap/double-tap-ts-page"),
    new Link("Long Press", "ns-ui-widgets-category/gestures/long-press/long-press-ts-page"),
    new Link("Swipe", "ns-ui-widgets-category/gestures/swipe/swipe-ts-page"),
    new Link("Rotation", "ns-ui-widgets-category/gestures/rotation/rotation-ts-page"),
    new Link("Pan", "ns-ui-widgets-category/gestures/pan/pan-ts-page"),
    new Link("Pinch", "ns-ui-widgets-category/gestures/pinch/pinch-ts-page"),
    new Link("Touch", "ns-ui-widgets-category/gestures/touch/touch-ts-page")
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

