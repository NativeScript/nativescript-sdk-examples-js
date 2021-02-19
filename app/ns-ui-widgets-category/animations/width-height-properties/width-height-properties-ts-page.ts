// >> animation-properties-width-height-ts
import { Enums, View } from "@nativescript/core";

export function animateWidth(args) {
    let button = args.object;
    let page =  button.page;
    let view = <View>page.getViewById("lbl");

    view.animate({
        width: 320,
        duration: 1000,
        curve: Enums.AnimationCurve.easeIn
    });
}

export function animateHeight(args) {
    let button = args.object;
    let page =  button.page;
    let view = <View>page.getViewById("lbl");

    view.animate({
        height: 400,
        duration: 1000,
        curve: Enums.AnimationCurve.easeIn
    });
}
// << animation-properties-width-height-ts
