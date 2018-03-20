var observableModule = require("tns-core-modules/data/observable");
let sliderModule = require("tns-core-modules/ui/slider");
// >> creating-slider-code
function onPageLoaded(args) {
    let page = args.object;
    let vm = new observableModule.Observable();
    let stackLayout = page.getViewById("stackLayoutId");

    vm.set("slResult", 22);
    // creating new Switch and binding the value property
    const options = {
        sourceProperty: "age",
        targetProperty: "value"
    };
    let sliderComponent = new sliderModule.Slider();
    sliderComponent.bind(options, vm);
    // setting slider.value to 22
    vm.set("age", 22);

    sliderComponent.on("valueChange", (args) => {
        vm.set("slResult", args.object.value)
    })


    stackLayout.addChild(sliderComponent);

    page.bindingContext = vm;
}

exports.onPageLoaded = onPageLoaded;
// << creating-slider-code