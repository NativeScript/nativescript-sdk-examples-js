"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var view = args.object;
    var vm = new observable_1.Observable();
    vm.set("imageUri", "~/images/logo.png");
    view.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
