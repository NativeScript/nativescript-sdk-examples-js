"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var slider_1 = require("tns-core-modules/ui/slider");
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var stackLayout = page.getViewById("stackLayoutId");
    vm.set("slResult", 22);
    var options = {
        sourceProperty: "age",
        targetProperty: "value"
    };
    var sliderComponent = new slider_1.Slider();
    sliderComponent.bind(options, vm);
    vm.set("age", 22);
    sliderComponent.on("valueChange", function (slargs) {
        vm.set("slResult", slargs.object.value);
    });
    stackLayout.addChild(sliderComponent);
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
