const observableModule = require("tns-core-modules/data/observable");
// >> slider-value-change-event
function onNavigatingTo(args) {
    const page = args.object;
    // set up the initial values for the slider components
    const vm = new observableModule.Observable();
    vm.set("currentValue", 10);
    vm.set("sliderValue", 10);
    vm.set("fontSize", 20);
    vm.set("firstMinValue", 0);
    vm.set("firstMaxValue", 100);
    // handle value change
    vm.on(observableModule.Observable.propertyChangeEvent, (propertyChangeData) => {
        if (propertyChangeData.propertyName === "sliderValue") {
            vm.set("currentValue", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
// handle value change
function onSliderLoaded(args) {
    const sliderComponent = args.object;
    sliderComponent.on("valueChange", (sargs) => {
        const page = sargs.object.page;
        const vm = page.bindingContext;
        vm.set("fontSize", sargs.object.value);
    });
}

exports.onSliderLoaded = onSliderLoaded;
exports.onNavigatingTo = onNavigatingTo;
// << slider-value-change-event
