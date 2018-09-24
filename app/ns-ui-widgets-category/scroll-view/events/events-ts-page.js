"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("status", "not scrolling");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onScroll(args) {
    var scrollview = args.object;
    var page = scrollview.page;
    var vm = page.bindingContext;
    vm.set("status", "scrolling");
    setTimeout(function () {
        vm.set("status", "not scrolling");
    }, 300);
    console.log("scrollX:  " + args.scrollX);
    console.log("scrollY: " + args.scrollY);
}
exports.onScroll = onScroll;
