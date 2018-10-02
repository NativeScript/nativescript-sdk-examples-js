"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = observable_1.fromObject({
        items: [
            { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
            { id: 3, name: "Piqué", role: "Defender" },
            { id: 4, name: "I. Rakitic", role: "Midfielder" }
        ],
        index: 2,
        selectedItem: ""
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onListPickerLoaded(args) {
    var listPicker = args.object;
    var vm = listPicker.page.bindingContext;
    listPicker.on("selectedIndexChange", function (lpargs) {
        vm.set("index", listPicker.selectedIndex);
        console.log("ListPicker selected value: " + listPicker.selectedValue);
        console.log("ListPicker selected index: " + listPicker.selectedIndex);
    });
}
exports.onListPickerLoaded = onListPickerLoaded;
