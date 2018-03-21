const observableModule = require("tns-core-modules/data/observable");
// >> slider-require
const sliderModule = require("tns-core-modules/ui/slider");
// << slider-require
// >> creating-slider-code
function onPageLoaded(args) {
    const page = args.object;
    const vm = new observableModule.Observable();
    const stackLayout = page.getViewById("stackLayoutId");

    vm.set("slResult", 22);
    // creating new Switch and binding the value property
    const options = {
        sourceProperty: "age",
        targetProperty: "value"
    };
    const sliderComponent = new sliderModule.Slider();
    sliderComponent.bind(options, vm);
    // setting slider.value to 22
    vm.set("age", 22);

    sliderComponent.on("valueChange", (args) => {
        vm.set("slResult", args.object.value);
    });

    stackLayout.addChild(sliderComponent);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-slider-code
