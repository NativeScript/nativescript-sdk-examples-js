// >> animation-properties-width-height
import { AnimationCurve } from "@nativescript/core/ui/enums";

export function animateWidth(args) {
    const button = args.object;
    const page = button.page;
    const myView = page.getViewById("lbl");

    myView.animate({
        width:320,
        duration: 1000,
        curve: AnimationCurve.easeIn
    });
}

export function animateHeight(args) {
    const button = args.object;
    const page = button.page;
    const myView = page.getViewById("lbl");

    myView.animate({
        height:400,
        duration: 1000,
        curve: AnimationCurve.easeIn
    });
}
// << animation-properties-width-height
