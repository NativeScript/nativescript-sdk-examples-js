
const AnimationCurveEnum = require("tns-core-modules/ui/enums").AnimationCurve;
let myView;

function onLoaded(args) {
    const page = args.object;
    myFirstView = page.getViewById("myFirstView");
    mySecondView = page.getViewById("mySecondView");
    myThirdView = page.getViewById("myThirdView");
    myForthView = page.getViewById("myForthView");
    myFifthView = page.getViewById("myFifthView");
}
exports.onLoaded = onLoaded;
// >> rotating-example
function animate() {
    // myFirstView.originX = 0.5; // Default value
    // myFirstView.originY = 0.5; // Default value
    myFirstView.animate({
        rotate: 360,
        duration: 3000
    }).then(() => {
        myFirstView.rotate = 0;
    }).catch((e) => {
        console.log(e.message);
    });

    mySecondView.originX = 1;
    mySecondView.animate({
        rotate: 360,
        duration: 3000
    }).then(() => {
        mySecondView.rotate = 0;
    }).catch((e) => {
        console.log(e.message);
    });

    myThirdView.originX = 0;
    myThirdView.animate({
        rotate: 360,
        duration: 3000
    }).then(() => {
        myThirdView.rotate = 0;
    }).catch((e) => {
        console.log(e.message);
    });

    myForthView.originY = 1;
    myForthView.animate({
        rotate: 360,
        duration: 3000
    }).then(() => {
        myForthView.rotate = 0;
    }).catch((e) => {
        console.log(e.message);
    });

    myFifthView.originY = 0;
    myFifthView.animate({
        rotate: 360,
        duration: 3000
    }).then(() => {
        myFifthView.rotate = 0;
    }).catch((e) => {
        console.log(e.message);
    });
}
exports.animate = animate;
// << rotating-example
