"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var color_1 = require("tns-core-modules/color");
var counter = 1;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("counter", counter);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function increase(args) {
    var button = args.object;
    var vm = button.page.bindingContext;
    button.backgroundColor = new color_1.Color("#3078FE");
    setTimeout(function () {
        vm.set("counter", counter++);
        button.backgroundColor = new color_1.Color("#30BCFF");
    }, 1000);
}
exports.increase = increase;
function decrease(args) {
    var button = args.object;
    var vm = button.page.bindingContext;
    button.backgroundColor = new color_1.Color("#3078FE");
    setTimeout(function () {
        vm.set("counter", counter--);
        button.backgroundColor = new color_1.Color("#30BCFF");
    }, 1000);
}
exports.decrease = decrease;
