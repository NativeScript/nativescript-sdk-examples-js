"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_array_1 = require("tns-core-modules/data/observable-array");
var stack_layout_1 = require("tns-core-modules/ui/layouts/stack-layout");
var repeater_1 = require("tns-core-modules/ui/repeater");
function onPageLoaded(args) {
    var page = args.object;
    var stackLayoutContainer = page.getViewById("stackLayoutId");
    var secondColorsArray = new observable_array_1.ObservableArray(["red", "green", "blue"]);
    var repeater = new repeater_1.Repeater();
    var stackLayout = new stack_layout_1.StackLayout();
    stackLayout.orientation = "horizontal";
    repeater.itemsLayout = stackLayout;
    repeater.items = secondColorsArray;
    stackLayoutContainer.addChild(repeater);
}
exports.onPageLoaded = onPageLoaded;
