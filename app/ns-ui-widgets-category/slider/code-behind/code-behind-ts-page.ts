import {Observable} from "tns-core-modules/data/observable";
import {Page} from "tns-core-modules/ui/page";
import {StackLayout} from "tns-core-modules/ui/layouts/stack-layout";
// >> slider-import
import {Slider} from "tns-core-modules/ui/slider";
// << slider-import
// >> creating-slider-code-ts
export function onPageLoaded(args) {
    const page: Page = <Page> args.object;
    const vm = new Observable();
    const stackLayout: StackLayout = <StackLayout> page.getViewById("stackLayoutId");

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

    sliderComponent.on("valueChange", (slargs) => {
        vm.set("slResult", (<Slider>slargs.object).value);
    });

    stackLayout.addChild(sliderComponent);

    page.bindingContext = vm;
}
// << creating-slider-code-ts
