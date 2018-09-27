// >> animation-import-ts
// Main Animation class
// ALL animating properties at https://docs.nativescript.org/api-reference/interfaces/_ui_animation_.animationdefinition
import {
    Animation,
    AnimationDefinition,
    Pair // Pair: Defines a pair of values (horizontal and vertical) for translate and scale animations.
} from "tns-core-modules/ui/animation";
// << animation-import-ts
let view1, view2, view3, view4;

export function onLoaded(args) {
    const page = args.object;

    view1 = page.getViewById("view1");
    view2 = page.getViewById("view2");
    view3 = page.getViewById("view3");
    view4 = page.getViewById("view4");
}

export function animate() {
    // >> animate-multiple-views-ts
    const definitions: Array<AnimationDefinition> = [];

    const definition1: AnimationDefinition = {
        target: view1,
        translate: {
            x: 200,
            y: 0
        },
        duration: 1000
    };
    definitions.push(definition1);

    const definition2: AnimationDefinition = {
        target: view2,
        translate: {
            x: 0,
            y: 200
        },
        duration: 1000
    };
    definitions.push(definition2);

    const definition3: AnimationDefinition = {
        target: view3,
        translate: {
            x: -200,
            y: 0
        },
        duration: 1000
    };
    definitions.push(definition3);

    const definition4: AnimationDefinition = {
        target: view4,
        translate: {
            x: 0,
            y: -200
        },
        duration: 1000
    };
    definitions.push(definition4);

    const animationSet = new Animation(definitions);

    animationSet.play()
        .then(() => {
            console.log("Animation finished");
        }).catch((e) => {
            console.log(e.message);
        });
    // << animate-multiple-views-ts
}

export function reset() {
    view1.translateX = 0;
    view1.translateY = 0;
    view2.translateX = 0;
    view2.translateY = 0;
    view3.translateX = 0;
    view3.translateY = 0;
    view4.translateX = 0;
    view4.translateY = 0;
}
