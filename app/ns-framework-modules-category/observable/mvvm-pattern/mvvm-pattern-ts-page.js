"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_ts_model_1 = require("./main-view-ts-model");
function onNavigatingTo(args) {
    var page = args.object;
    var mainViewModel = new main_view_ts_model_1.HelloWorldModel();
    page.bindingContext = mainViewModel;
}
exports.onNavigatingTo = onNavigatingTo;
