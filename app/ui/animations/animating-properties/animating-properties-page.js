const AnimationCurve = require("tns-core-modules/ui/enums").AnimationCurve;
const Animation = require("tns-core-modules/ui/animation").Animation;

function onLoaded(args) {
    const page = args.object;
    const myView = page.getViewById("lbl");

    // >> animation-properties
    myView.animate({
        backgroundColor: "#414b7d",
        curve: AnimationCurve.easeOut,
        delay: 300,
        duration: 3000,
        iterations: 3,
        opacity: 0.8,
        rotate: 360,
        scale: { x: 2, y: 2 },
        translate: { x: 0, y: 200 }
    }).then(() => {
        console.log("Animation finished");
    }).catch((e) => {
        console.log(e.message);
    })
    // << animation-properties
}
exports.onLoaded = onLoaded;

function animateTarget(args) {
    // >> animation-constructor
    const myView = args.object;

    let animation = new Animation([{
        target: myView, // provide the view to animate
        curve: AnimationCurve.easeOut,
        duration: 1000,
        iterations: 1,
        rotate: 360,
        scale: { x: 0.2 y: 0.2 },
        translate: { x: -50, y: -50 }
    }], false);

    animation.play()
        .then(() => {
            console.log("Animation finished");
        }).catch((e) => {
            console.log(e.message);
        });
    // << animation-constructor
}
exports.animateTarget = animateTarget;