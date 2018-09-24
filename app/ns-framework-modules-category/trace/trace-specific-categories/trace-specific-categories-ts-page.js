"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trace_1 = require("tns-core-modules/trace");
var timer_1 = require("tns-core-modules/timer");
var dialogs = require("tns-core-modules/ui/dialogs");
function onNavigatingTo(args) {
    trace_1.disable();
    trace_1.setCategories(trace_1.categories.concat(trace_1.categories.Binding, trace_1.categories.Layout, trace_1.categories.Style, trace_1.categories.ViewHierarchy, trace_1.categories.VisualTreeEvents));
    trace_1.enable();
    trace_1.addCategories(trace_1.categories.Navigation);
    timer_1.setTimeout(function () {
        console.log("-----------------------------------------------------");
        console.log("New trace category has been added");
        console.log("Category: NativeLifecycle");
        console.log("-----------------------------------------------------");
        dialogs.alert("NativeLifecycle trace category has been added.")
            .then(function () {
            console.log("Dialog closed!");
        });
        trace_1.addCategories(trace_1.categories.NativeLifecycle);
    }, 2000);
    trace_1.write("I (heart) NativeScript!", trace_1.categories.Debug);
}
exports.onNavigatingTo = onNavigatingTo;
function checkIsDebugCategorySet() {
    if (trace_1.isCategorySet(trace_1.categories.Debug)) {
        dialogs.alert("Debug category has been set")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
    else {
        dialogs.alert("Debug category has not been set")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
}
exports.checkIsDebugCategorySet = checkIsDebugCategorySet;
function checkIsDebugVisualTreeEventsSet() {
    if (trace_1.isCategorySet(trace_1.categories.VisualTreeEvents)) {
        dialogs.alert("VisualTreeEvents category has been set")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
    else {
        dialogs.alert("VisualTreeEvents category has not been set")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
}
exports.checkIsDebugVisualTreeEventsSet = checkIsDebugVisualTreeEventsSet;
function enableTracing() {
    if (trace_1.isEnabled() === false) {
        trace_1.enable();
        dialogs.alert("Trace has been enabled")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
    else {
        dialogs.alert("Trace has been already enabled")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
}
exports.enableTracing = enableTracing;
function disableTracing() {
    if (trace_1.isEnabled()) {
        trace_1.disable();
        dialogs.alert("Trace has been disabled")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
    else {
        dialogs.alert("Trace has been already disabled")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
}
exports.disableTracing = disableTracing;
