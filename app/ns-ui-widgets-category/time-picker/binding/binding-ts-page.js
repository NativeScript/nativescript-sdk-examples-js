"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("tphour", 16);
    vm.set("tpminute", 15);
    vm.set("tpMaxHour", 18);
    vm.set("tpMaxMinute", 48);
    vm.set("tpMinHour", 10);
    vm.set("tpMinMinute", 10);
    vm.set("tpminuteInterval", 5);
    vm.set("timeResult", "_");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onPickerLoaded(eventData) {
    var timePicker = eventData.object;
    timePicker.on("timeChange", function (args) {
        console.log("Picked TIME: ", args.value);
        var page = args.object.page;
        var vm = page.bindingContext;
        vm.set("timeResult", args.value);
    });
}
exports.onPickerLoaded = onPickerLoaded;
