"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("secondSwitchState", "ON");
    var mySwitch = page.getViewById("my-switch");
    mySwitch.on("checkedChange", function (swargs) {
        console.log("checkedChange ", swargs.object.checked);
        if (swargs.object.checked) {
            vm.set("secondSwitchState", "ON");
        }
        else {
            vm.set("secondSwitchState", "OFF");
        }
    });
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
