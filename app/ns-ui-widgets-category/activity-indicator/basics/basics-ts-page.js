"use strict";
exports.__esModule = true;
// >> activity-indicator-setting-busy-code-ts
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var view = args.object;
    var vm = new observable_1.Observable();
    vm.set("isLoading", true);
    // >> (hide)
    vm.set("snippet", "<ActivityIndicator busy='{{ isLoading }}'/>");
    // << (hide)
    view.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
// << activity-indicator-setting-busy-code-ts
