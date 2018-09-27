const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Animated Properties", "ns-ui-widgets-category/animations/animating-properties/animating-properties-page"),
    new link("Chained Animations", "ns-ui-widgets-category/animations/chaining-animations/chaining-animations-page"),
    new link("Animating Multiple Views", "ns-ui-widgets-category/animations/multiple-views-animation/multiple-views-page"),
    new link("Properties originX and originY", "ns-ui-widgets-category/animations/origin-properties/property-origin-page")
];

const navigationLinksTsc = [
    new link("Animated Properties", "ns-ui-widgets-category/animations/animating-properties/animating-properties-ts-page"),
    new link("Chained Animations", "ns-ui-widgets-category/animations/chaining-animations/chaining-animations-ts-page"),
    new link("Animating Multiple Views", "ns-ui-widgets-category/animations/multiple-views-animation/multiple-views-ts-page"),
    new link("Properties originX and originY", "ns-ui-widgets-category/animations/origin-properties/property-origin-ts-page")
];

// >> animations-imports
// Full list of animating properties at https://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition
const AnimationDefinition = require("tns-core-modules/ui/animation").AnimationDefinition;

// Defines a pair of values (horizontal and vertical) for translate and scale animations.
const Pair = require("tns-core-modules/ui/animation").Pair;
// << animations-imports

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
