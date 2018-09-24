"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("prop", 0);
    vm.set("sbSelectedIndex", 0);
    vm.set("visibility1", true);
    vm.set("visibility2", false);
    vm.set("visibility3", false);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function sbLoaded(args) {
    var segmentedBarComponent = args.object;
    segmentedBarComponent.on("selectedIndexChange", function (sbargs) {
        var page = sbargs.object.page;
        var vm = page.bindingContext;
        var selectedIndex = sbargs.object.selectedIndex;
        vm.set("prop", selectedIndex);
        switch (selectedIndex) {
            case 0:
                vm.set("visibility1", true);
                vm.set("visibility2", false);
                vm.set("visibility3", false);
                break;
            case 1:
                vm.set("visibility1", false);
                vm.set("visibility2", true);
                vm.set("visibility3", false);
                break;
            case 2:
                vm.set("visibility1", false);
                vm.set("visibility2", false);
                vm.set("visibility3", true);
                break;
            default:
                break;
        }
    });
}
exports.sbLoaded = sbLoaded;
