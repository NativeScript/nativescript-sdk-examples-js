// >> slider-value-change-event-ts
import { Slider } from "@nativescript/core";

export function onSliderLoaded(argsloaded) {
    let sliderComponent: Slider = <Slider> argsloaded.object;
    sliderComponent.on("valueChange", function(args) {
        let slider = <Slider>args.object;
        console.log(`Slider new value ${slider.value}`);
    });
}
// << slider-value-change-event-ts
