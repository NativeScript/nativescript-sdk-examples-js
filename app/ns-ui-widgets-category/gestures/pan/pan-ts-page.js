"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onPan(args) {
    console.log(args.eventName + " event triggered for " + args.view);
    console.log("deltaX: " + args.deltaX);
    console.log("deltaY: " + args.deltaY);
    console.log("state: " + args.state);
    var page = args.object.page;
    var vm = page.bindingContext;
    vm.set("deltaX", args.deltaX);
    vm.set("deltaY", args.deltaY);
}
exports.onPan = onPan;
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
