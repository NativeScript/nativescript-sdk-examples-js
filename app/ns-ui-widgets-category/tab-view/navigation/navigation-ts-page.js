"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
function onLoaded(args) {
    var tabView = args.object;
    var vm = new observable_1.Observable();
    vm.set("tabSelectedIndex", 0);
    vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");
    tabView.bindingContext = vm;
}
exports.onLoaded = onLoaded;
function changeTab(args) {
    var vm = args.object.bindingContext;
    var tabSelectedIndex = vm.get("tabSelectedIndex");
    if (tabSelectedIndex === 0) {
        vm.set("tabSelectedIndex", 1);
    }
    else if (tabSelectedIndex === 1) {
        vm.set("tabSelectedIndex", 2);
    }
    else if (tabSelectedIndex === 2) {
        vm.set("tabSelectedIndex", 0);
    }
}
exports.changeTab = changeTab;
function onSelectedIndexChanged(args) {
    if (args.oldIndex !== -1) {
        var newIndex = args.newIndex;
        var vm = args.object.bindingContext;
        if (newIndex === 0) {
            vm.set("tabSelectedIndexResult", "Profile Tab (tabSelectedIndex = 0 )");
        }
        else if (newIndex === 1) {
            vm.set("tabSelectedIndexResult", "Stats Tab (tabSelectedIndex = 1 )");
        }
        else if (newIndex === 2) {
            vm.set("tabSelectedIndexResult", "Settings Tab (tabSelectedIndex = 2 )");
        }
        dialogs.alert("Selected index has changed ( Old index: " + args.oldIndex + " New index: " + args.newIndex + " )")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
}
exports.onSelectedIndexChanged = onSelectedIndexChanged;
