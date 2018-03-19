let observableModule = require("tns-core-modules/data/observable");
// >> slider-require
let sliderModule = require("tns-core-modules/ui/slider");
// << slider-require
// >> slider-value-change-event
function onNavigatingTo(args) {
    let page = args.object;
    // set up the initial values for the slider components
    const vm = new observableModule.Observable();
    vm.set("currentValue", 10);
    vm.set("sliderValue", 10);
    vm.set("fontSize", 20);
    vm.set("firstMinValue", 0);
    vm.set("firstMaxValue", 100);
    // handle value change
    vm.on(observableModule.Observable.propertyChangeEvent, function(propertyChangeData){
        if(propertyChangeData.propertyName == 'sliderValue'){
            vm.set("currentValue", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
// handle value change
function onSliderLoaded(args){
    let sliderComponent = args.object;
    sliderComponent.on("valueChange", (sargs)=>{
        console.log(sargs.object.value);
        let page = sargs.object.page;
        let vm = page.bindingContext;
        vm.set("fontSize", sargs.object.value);
    })
}


exports.onSliderLoaded = onSliderLoaded;
exports.onNavigatingTo = onNavigatingTo;
// << slider-value-change-event