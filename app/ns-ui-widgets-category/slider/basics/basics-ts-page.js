"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("currentValue", 10);
    vm.set("sliderValue", 10);
    vm.set("fontSize", 20);
    vm.set("firstMinValue", 0);
    vm.set("firstMaxValue", 100);
    vm.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
        if (propertyChangeData.propertyName === "sliderValue") {
            vm.set("currentValue", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onSliderLoaded(args) {
    var sliderComponent = args.object;
    sliderComponent.on("valueChange", function (sargs) {
        var page = sargs.object.page;
        var vm = page.bindingContext;
        vm.set("fontSize", sargs.object.value);
    });
}
exports.onSliderLoaded = onSliderLoaded;
