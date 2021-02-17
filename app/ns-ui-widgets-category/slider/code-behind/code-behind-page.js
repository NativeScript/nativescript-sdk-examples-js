import { Observable, Slider } from "@nativescript/core";
// >> slider-require
// << slider-require
// >> creating-slider-code
export function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("slResult", 22);
    // creating new Switch and binding the value property
    const options = {
        sourceProperty: "age",
        targetProperty: "value"
    };
    const sliderComponent = new Slider();
    sliderComponent.bind(options, vm);
    // setting slider.value to 22
    vm.set("age", 22);

    sliderComponent.on("valueChange", (args) => {
        vm.set("slResult", args.object.value);
    });

    stackLayout.addChild(sliderComponent);

    page.bindingContext = vm;
}


// << creating-slider-code
