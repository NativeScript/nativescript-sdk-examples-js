"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("hourResult", "Hour: ...");
    vm.set("minuteResult", "Minute: ...");
    vm.set("timeResult", "Time: ...");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onPickerLoaded(args) {
    var timePicker = args.object;
    timePicker.hour = 10;
    timePicker.minute = 25;
    timePicker.on("timeChange", function (argstm) {
        console.log("Picked TIME: ", argstm.value);
        console.log("Previous TIME: ", argstm.oldValue);
        var page = argstm.object.page;
        var vm = page.bindingContext;
        vm.set("hourResult", "Hour: " + argstm.object.hour);
        vm.set("minuteResult", "Minute: " + argstm.object.minute);
        vm.set("timeResult", "TIme: " + argstm.object.time);
    });
}
exports.onPickerLoaded = onPickerLoaded;
