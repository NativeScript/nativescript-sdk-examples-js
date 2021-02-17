// >> animation-curve-imports
// AnimationCurveEnum: ease, easeIn, easeInOut, easeOut, linear, spring
import { AnimationCurve } from "@nativescript/core/ui/enums";
import { Animation, Color } from "@nativescript/core";
// << animation-curve-imports
let animation;
let myView;

export function onLoaded(args) {
    const page = args.object;
    myView = page.getViewById("lbl");
}

export function animate(args) {
    // >> animation-properties
    myView.animate({
        backgroundColor: new Color("#414b7d"),
        curve: AnimationCurve.easeOut,
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
    }).then(() => {
        console.log("Animation finished");
    }).catch((e) => {
        console.log(e.message);
    });
    // << animation-properties
}

export function animateTarget(args) {
    // >> animation-target
    const myView = args.object;

    const animationDefinition = {
        target: myView, // provide the view to animate
        curve: AnimationCurve.easeOut,
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

    animation = new Animation([animationDefinition], false);
    animation.play()
        .then(() => {
            console.log("Animation finished");
            console.log("animation.isPlaying: ", animation.isPlaying);
        }).catch((e) => {
            console.log(e.message);
        });
    // << animation-target
}

function cancelAnimation() {
    // >> animation-cancel
    animation.cancel();
    // << animation-cancel
}

function demonstrateSimpleAnimations(args) {
    const view = args.object;

    // >> animating-background-color
    view.backgroundColor = new Color("red");
    view.animate({
        backgroundColor: new Color("green"),
        duration: 2000
    });
    // << animating-background-color

    // >> using-animation-curve-enum
    view.animate({
        translate: {
            x: 0,
            y: 100
        },
        duration: 1000,
        curve: AnimationCurve.easeIn
    });
    // << using-animation-curve-enum

    // >> creating-cubic-bezier
    view.animate({
        translate: {
            x: 0,
            y: 100
        },
        duration: 1000,
        curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
    });
    // << creating-cubic-bezier
}
