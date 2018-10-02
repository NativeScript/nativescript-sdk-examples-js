"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("tfHint", "Enter text");
    vm.set("tfText", "");
    vm.set("tfResult", "");
    vm.set("secureState", false);
    vm.set("buttonText", "Enable TextField's secure");
    vm.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
        if (propertyChangeData.propertyName === "tfText") {
            vm.set("tfResult", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function textFieldSecureStateChange(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var secureState = vm.get("secureState");
    vm.set("secureState", !secureState);
    if (secureState) {
        vm.set("buttonText", "Enable TextField's secure");
    }
    else {
        vm.set("buttonText", "Disable TextField's secure");
    }
}
exports.textFieldSecureStateChange = textFieldSecureStateChange;
function showText(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    dialogs.alert("Text: " + vm.get("tfText"))
        .then(function () {
        console.log("Dialog closed!");
    });
}
exports.showText = showText;
