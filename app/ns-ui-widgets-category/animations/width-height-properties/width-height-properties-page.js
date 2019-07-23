// >> animation-properties-width-height
const AnimationCurve = require("tns-core-modules/ui/enums").AnimationCurve;

function animateWidth(args) {
    const button = args.object;
    const page = button.page;
    const myView = page.getViewById("lbl");

    myView.animate({
        width:320,
        duration: 1000,
        curve: AnimationCurve.easeIn
    });
}
exports.animateWidth = animateWidth;

function animateHeight(args) {
    const button = args.object;
    const page = button.page;
    const myView = page.getViewById("lbl");

    myView.animate({
        height:400,
        duration: 1000,
        curve: AnimationCurve.easeIn
    });
}
exports.animateHeight = animateHeight;
// << animation-properties-width-height
