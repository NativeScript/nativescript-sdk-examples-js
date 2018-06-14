// >> animation-import
// Main Animation class
const Animation = require("tns-core-modules/ui/animation").Animation;
// << animation-import
let view1;
let view2;
let view3;
let view4;

function onLoaded(args) {
    const page = args.object;

    view1 = page.getViewById("view1");
    view2 = page.getViewById("view2");
    view3 = page.getViewById("view3");
    view4 = page.getViewById("view4");
}
exports.onLoaded = onLoaded;

function animate() {
    // >> animate-multiple-views
    const definitions = [];

    const definition1 = {
        target: view1,
        translate: {
            x: 200,
            y: 0
        },
        duration: 1000
    };
    definitions.push(definition1);

    const definition2 = {
        target: view2,
        translate: {
            x: 0,
            y: 200
        },
        duration: 1000
    };
    definitions.push(definition2);

    const definition3 = {
        target: view3,
        translate: {
            x: -200,
            y: 0
        },
        duration: 1000
    };
    definitions.push(definition3);

    const definition4 = {
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
    // << animate-multiple-views
}

exports.animate = animate;

function reset() {
    view1.translateX = 0;
    view1.translateY = 0;
    view2.translateX = 0;
    view2.translateY = 0;
    view3.translateX = 0;
    view3.translateY = 0;
    view4.translateX = 0;
    view4.translateY = 0;
}
exports.reset = reset;
