"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("title", "Getting Started TypeScript \nAction Bar Example");
    vm.set("snippet", "<ActionBar title=\"Gettings Started\" class=\"action-bar\"/>");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
