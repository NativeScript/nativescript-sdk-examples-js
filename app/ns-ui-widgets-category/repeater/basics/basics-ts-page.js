"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var colors = ["red", "green", "blue"];
var secondColorsArray = new observable_array_1.ObservableArray(["red", "green", "blue"]);
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("myItems", colors);
    vm.set("mySecondItems", secondColorsArray);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onTap(args) {
    var page = args.object.page;
    var repeater = page.getViewById("firstRepeater");
    colors.push("yellow");
    repeater.refresh();
}
exports.onTap = onTap;
function onSecondTap() {
    secondColorsArray.push("yellow");
}
exports.onSecondTap = onSecondTap;
