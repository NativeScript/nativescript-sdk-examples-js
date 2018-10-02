"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("counter", 0);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onTap(args) {
    var button = args.object;
    var vm = button.page.bindingContext;
    var count = vm.get("counter");
    vm.set("counter", ++count);
    button.text = "Tapped " + count + " times";
}
exports.onTap = onTap;
