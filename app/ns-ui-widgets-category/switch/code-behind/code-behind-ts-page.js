"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var switch_1 = require("tns-core-modules/ui/switch");
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("swResult", "false");
    var stackLayout = page.getViewById("stackLayoutId");
    var mySwitch = new switch_1.Switch();
    var options = {
        sourceProperty: "isChecked",
        targetProperty: "checked"
    };
    mySwitch.bind(options, vm);
    mySwitch.on("checkedChange", function (args) {
        console.log(args.object.checked);
        vm.set("swResult", args.object.checked);
    });
    vm.set("isChecked", true);
    stackLayout.addChild(mySwitch);
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
