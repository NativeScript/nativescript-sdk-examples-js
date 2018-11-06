"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var viewModel = observable_1.fromObject({
        items: [1, 2, 3],
        test: "Parent binding! (the value came from the `test` property )"
    });
    page.bindingContext = viewModel;
}
exports.onNavigatingTo = onNavigatingTo;
