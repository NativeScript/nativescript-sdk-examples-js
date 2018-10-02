"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var timer_1 = require("tns-core-modules/timer");
var color = ["green", "yellow", "red"];
var id;
var status = true;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("buttonText", "Disable color change");
    vm.set("buttoncolor", "gray");
    id = timer_1.setInterval(function () {
        var randNumber = Math.floor(Math.random() * (color.length));
        vm.set("buttoncolor", color[randNumber]);
    }, 1000);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onButtonTap(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    if (status) {
        timer_1.clearInterval(id);
        vm.set("buttonText", "Enable color change");
    }
    else {
        id = timer_1.setInterval(function () {
            var randNumber = Math.floor(Math.random() * (color.length));
            vm.set("buttoncolor", color[randNumber]);
        }, 1000);
        vm.set("buttonText", "Disable color change");
    }
    status = !status;
}
exports.onButtonTap = onButtonTap;
