import ListViewLinksModel from "../../links-view-model";
import Link from "../../link";
const navigationLinks = [
    new Link("Animated Properties", "ns-ui-widgets-category/animations/animating-properties/animating-properties-page"),
    new Link("Chained Animations", "ns-ui-widgets-category/animations/chaining-animations/chaining-animations-page"),
    new Link("Animating Multiple Views", "ns-ui-widgets-category/animations/multiple-views-animation/multiple-views-page"),
    new Link("Properties originX and originY", "ns-ui-widgets-category/animations/origin-properties/property-origin-page"),
    new Link("Properties width and height", "ns-ui-widgets-category/animations/width-height-properties/width-height-properties-page")
];

const navigationLinksTsc = [
    new Link("Animated Properties", "ns-ui-widgets-category/animations/animating-properties/animating-properties-ts-page"),
    new Link("Chained Animations", "ns-ui-widgets-category/animations/chaining-animations/chaining-animations-ts-page"),
    new Link("Animating Multiple Views", "ns-ui-widgets-category/animations/multiple-views-animation/multiple-views-ts-page"),
    new Link("Properties originX and originY", "ns-ui-widgets-category/animations/origin-properties/property-origin-ts-page"),
    new Link("Properties width and height", "ns-ui-widgets-category/animations/width-height-properties/width-height-properties-ts-page")
];

// >> animations-imports
// Full list of animating properties at https://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition
import { AnimationDefinition } from "@nativescript/core";

// Defines a pair of values (horizontal and vertical) for translate and scale animations.
import Pair from "@nativescript/core/ui/animation";
// << animations-imports

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title,
        showTypeScriptExamples: false,
        tsclinks: navigationLinksTsc
    });
}

