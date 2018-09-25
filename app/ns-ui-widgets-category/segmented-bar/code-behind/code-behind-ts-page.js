"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var segmented_bar_1 = require("tns-core-modules/ui/segmented-bar");
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var stackLayout = page.getViewById("stackLayoutId");
    vm.set("sbResult", 0);
    var options = {
        sourceProperty: "sbindex",
        targetProperty: "selectedIndex"
    };
    var segmentedBar = new segmented_bar_1.SegmentedBar();
    var items = [];
    var item1 = new segmented_bar_1.SegmentedBarItem();
    item1.title = "Item1";
    items.push(item1);
    var item2 = new segmented_bar_1.SegmentedBarItem();
    item2.title = "Item2";
    items.push(item2);
    var item3 = new segmented_bar_1.SegmentedBarItem();
    item3.title = "Item3";
    items.push(item3);
    segmentedBar.items = items;
    segmentedBar.bind(options, vm);
    vm.set("sbindex", 0);
    segmentedBar.on("selectedIndexChange", function (sbargs) {
        vm.set("sbResult", sbargs.object.selectedIndex);
    });
    stackLayout.insertChild(segmentedBar, 0);
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
