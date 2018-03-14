let ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Animation Properties", "/ui/animations/animating-properties/animating-properties-page"),
];

// >> animations-imports
const Animation = require("tns-core-modules/ui/animation").Animation;

// See https://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition 
// for full list of all animation definition properties
const AnimationDefinition = require("tns-core-modules/ui/animation").AnimationDefinition;

// Defines a pair of values (horizontal and vertical) for translate and scale animations.
const Pair = require("tns-core-modules/ui/animation").Pair;

// AnimationCurveEnum: ease, easeIn, easeInOut, easeOut, linear, spring
const AnimationCurveEnum = require("tns-core-modules/ui/enums").AnimationCurve;
// << animations-imports

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new ListViewLinksModel({ links: navigationLinks, actionBarTitle: args.context.title });
}
exports.onNavigatingTo = onNavigatingTo;
