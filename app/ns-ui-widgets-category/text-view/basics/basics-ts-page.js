"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("tvHint", "Enter text");
    vm.set("tvText", "");
    vm.set("tvResult", "");
    vm.set("editState", true);
    vm.set("buttonText", "Disable TextView");
    vm.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
        if (propertyChangeData.propertyName === "tvText") {
            vm.set("tvResult", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function textViewEditStateChange(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var editState = vm.get("editState");
    vm.set("editState", !editState);
    if (editState) {
        vm.set("buttonText", "Enable TextView");
    }
    else {
        vm.set("buttonText", "Disable TextView");
    }
}
exports.textViewEditStateChange = textViewEditStateChange;
function showText(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    dialogs.alert("Text: " + vm.get("tvText"))
        .then(function () {
        console.log("Dialog closed!");
    });
}
exports.showText = showText;
function onTextViewLoaded(args) {
    var textView = args.object;
    textView.on("textChange", function (argstv) {
        console.dir(argstv);
    });
}
exports.onTextViewLoaded = onTextViewLoaded;
