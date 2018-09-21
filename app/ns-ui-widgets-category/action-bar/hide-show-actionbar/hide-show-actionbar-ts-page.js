"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var value = false;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("abHidden", value);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onTap(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    value = !value;
    vm.set("abHidden", value);
}
exports.onTap = onTap;
