"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("title", "NativeScript is Awesome");
    page.bindingContext = vm;
    var label = page.getViewById("lbl");
    label.text = "NativeScript is Awesome";
    label.textWrap = true;
    label.textAlignment = "center";
}
exports.onNavigatingTo = onNavigatingTo;
