// >> animation-curve-imports-ts
// AnimationCurve enumeration: ease, easeIn, easeInOut, easeOut, linear, spring
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation";
import { Color } from "tns-core-modules/color";
// << animation-curve-imports-ts
import { View } from "tns-core-modules/ui/core/view";
let animation: Animation;

export function animate(args) {
    let button = args.object;
    let page =  button.page;
    let view = <View>page.getViewById("lbl");

    // >> animation-properties-ts
    view.animate({
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
    // << animation-properties-ts
}

export function animateTarget(args) {
    // >> animation-target-ts
    const view = args.object;

    const animationDefinition: AnimationDefinition = {
        target: view, // provide the view to animate
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
    // << animation-target-ts
}

export function cancelAnimation() {
    // >> animation-cancel-ts
    animation.cancel();
    // << animation-cancel-ts
}

export function demonstrateSimpleAnimations(args) {
    const view = args.object;
    // >> animating-background-color-ts
    view.backgroundColor = new Color("red");
    view.animate({
        backgroundColor: new Color("green"),
        duration: 2000
    });
    // << animating-background-color-ts

    // >> using-animation-curve-enum-ts
    view.animate({
        translate: {
            x: 0,
            y: 100
        },
        duration: 1000,
        curve: AnimationCurve.easeIn
    });
    // << using-animation-curve-enum-ts

    // >> creating-cubic-bezier-ts
    view.animate({
        translate: {
            x: 0,
            y: 100
        },
        duration: 1000,
        curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
    });
    // << creating-cubic-bezier-ts
}
