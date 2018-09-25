"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("progressValue", 10);
    vm.set("progressMaxValue", 100);
    setInterval(function () {
        var value = vm.get("progressValue");
        vm.set("progressValue", value + 2);
    }, 300);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onProgressLoaded(args) {
    var sliderComponent = args.object;
    sliderComponent.on("valueChange", function (pargs) {
        console.log("Old Value: " + pargs.oldValue);
        console.log("New Value: " + pargs.value);
    });
}
exports.onProgressLoaded = onProgressLoaded;
