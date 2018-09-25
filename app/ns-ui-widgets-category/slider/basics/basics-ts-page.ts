import { Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Slider } from "tns-core-modules/ui/slider";
// >> slider-value-change-event-ts
export function onNavigatingTo(args) {
    const page: Page = <Page>args.object;
    // set up the initial values for the slider components
    const vm = new Observable();
    vm.set("currentValue", 10);
    vm.set("sliderValue", 10);
    vm.set("fontSize", 20);
    vm.set("firstMinValue", 0);
    vm.set("firstMaxValue", 100);
    // handle value change
    vm.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
        if (propertyChangeData.propertyName === "sliderValue") {
            vm.set("currentValue", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
// handle value change
export function onSliderLoaded(args) {
    const sliderComponent: Slider = <Slider>args.object;
    sliderComponent.on("valueChange", (sargs) => {
        const page = (<Slider>sargs.object).page;
        const vm = page.bindingContext;
        vm.set("fontSize", (<Slider>sargs.object).value);
    });
}
// << slider-value-change-event-ts
