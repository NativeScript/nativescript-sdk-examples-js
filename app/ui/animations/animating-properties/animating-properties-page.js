const AnimationCurve = require("tns-core-modules/ui/enums").AnimationCurve;
const Animation = require("tns-core-modules/ui/animation").Animation;
const AnimationDefinitions = require("tns-core-modules/ui/animation").AnimationDefinitions;

let animation,
    myView;

function onLoaded(args) {
    const page = args.object;
    myView = page.getViewById("lbl");
}
exports.onLoaded = onLoaded;

function animate(args) {
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
exports.animate = animate;

function animateTarget(args) {
    // >> animation-target
    const myView = args.object;

    let animationDefinition = {
        target: myView, // provide the view to animate
        curve: AnimationCurve.easeOut,
        duration: 1000,
        scale: { x: 0.2, y: 0.2 },
        translate: { x: -50, y: -50 }
    };

    animation = new Animation([animationDefinition], false);
    animation.play()
        .then(() => {
            console.log("Animation finished");
            console.log("animation.isPlaying: " + animation.isPlaying);
        }).catch((e) => {
            console.log(e.message);
        });
    // << animation-target
}
exports.animateTarget = animateTarget

function cancelAnimation() {
    // >> animation-cancel
    animation.cancel();
    // << animation-cancel
}