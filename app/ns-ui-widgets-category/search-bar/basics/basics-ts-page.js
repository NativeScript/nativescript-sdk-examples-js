"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("sbHint", "Search");
    vm.set("sbText", "");
    vm.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
        if (propertyChangeData.propertyName === "sbText") {
            console.log("SearchBar text changed! New value: ", propertyChangeData.value);
        }
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onSubmit(args) {
    var searchbar = args.object;
    console.log("Search submit result: ", searchbar.text);
    dialogs.alert("You are searching for " + searchbar.text)
        .then(function () {
        console.log("Dialog closed!");
    });
}
exports.onSubmit = onSubmit;
function onClear() {
    console.log("clear search-bar text");
    dialogs.alert("clear search-bar text")
        .then(function () {
        console.log("Dialog closed!");
    });
}
exports.onClear = onClear;
