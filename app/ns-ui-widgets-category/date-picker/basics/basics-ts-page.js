"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var TODAY = new Date();
    vm.set("date", TODAY);
    vm.set("minDate", new Date(1975, 0, 29));
    vm.set("maxDate", new Date(2045, 4, 12));
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onDatePickerLoaded(data) {
    var datePicker = data.object;
    datePicker.on("dateChange", function (args) {
        console.dir(args);
    });
    datePicker.on("dayChange", function (args) {
        console.dir(args);
    });
    datePicker.on("monthChange", function (args) {
        console.dir(args);
    });
    datePicker.on("yearChange", function (args) {
        console.dir(args);
    });
}
exports.onDatePickerLoaded = onDatePickerLoaded;
