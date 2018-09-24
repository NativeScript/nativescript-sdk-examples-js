"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("prop", 0);
    vm.set("sbSelectedIndex", 0);
    vm.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
        if (propertyChangeData.propertyName === "sbSelectedIndex") {
            vm.set("prop", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
