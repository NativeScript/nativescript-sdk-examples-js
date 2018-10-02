"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("tns-core-modules/ui/enums");
var animation_1 = require("tns-core-modules/ui/animation");
var color_1 = require("tns-core-modules/color");
var animation;
function animate(args) {
    var button = args.object;
    var page = button.page;
    var view = page.getViewById("lbl");
    view.animate({
        backgroundColor: new color_1.Color("#414b7d"),
        curve: enums_1.AnimationCurve.easeOut,
        delay: 300,
        duration: 3000,
        iterations: 3,
        opacity: 0.8,
        rotate: 360,
        scale: {
            x: 2,
            y: 2
        },
        translate: {
            x: 0,
            y: 200
        }
    }).then(function () {
        console.log("Animation finished");
    }).catch(function (e) {
        console.log(e.message);
    });
}
exports.animate = animate;
function animateTarget(args) {
    var view = args.object;
    var animationDefinition = {
        target: view,
        curve: enums_1.AnimationCurve.easeOut,
        duration: 1000,
        scale: {
            x: 0.2,
            y: 0.2
        },
        translate: {
            x: -50,
            y: -50
        }
    };
    animation = new animation_1.Animation([animationDefinition], false);
    animation.play()
        .then(function () {
        console.log("Animation finished");
        console.log("animation.isPlaying: ", animation.isPlaying);
    }).catch(function (e) {
        console.log(e.message);
    });
}
exports.animateTarget = animateTarget;
function cancelAnimation() {
    animation.cancel();
}
exports.cancelAnimation = cancelAnimation;
function demonstrateSimpleAnimations(args) {
    var view = args.object;
    view.backgroundColor = new color_1.Color("red");
    view.animate({
        backgroundColor: new color_1.Color("green"),
        duration: 2000
    });
    view.animate({
        translate: {
            x: 0,
            y: 100
        },
        duration: 1000,
        curve: enums_1.AnimationCurve.easeIn
    });
    view.animate({
        translate: {
            x: 0,
            y: 100
        },
        duration: 1000,
        curve: enums_1.AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
    });
}
exports.demonstrateSimpleAnimations = demonstrateSimpleAnimations;
