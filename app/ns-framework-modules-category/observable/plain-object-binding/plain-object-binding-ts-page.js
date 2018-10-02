"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var list = [];
    for (var i = 0; i < 15; i++) {
        list.push(new Date());
    }
    var viewModel = observable_1.fromObject({
        items: list
    });
    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
