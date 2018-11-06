"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applicationModule = require("tns-core-modules/application");
var observable_1 = require("tns-core-modules/data/observable");
var enums = require("tns-core-modules/ui/enums");
var vm;
var launchListener;
var suspendListener;
var resumeListener;
var exitListener;
var displayedListener;
var lowMemoryListener;
var orientationChangedListener;
var uncaughtErrorListener;
exports.onNavigatingTo = function (navigatedData) {
    var page = navigatedData.object;
    vm = new observable_1.Observable();
    vm.set("actionBarTitle", navigatedData.context.actionBarTitle);
    vm.set("info", "Refer to the code-behind files \nfor Application Events snippets");
    if (applicationModule.android) {
        var activity = applicationModule.android.foregroundActivity;
        var orientationEnum = activity.getResources().getConfiguration().orientation;
        vm.set("orientation", orientationEnum === 1
            ? enums.DeviceOrientation.portrait
            : enums.DeviceOrientation.landscape);
        vm.set("resumeEvent", "");
        vm.set("resumeEvent", "");
        vm.set("launchEvent", "");
        vm.set("displayedEvent", "");
    }
    else if (applicationModule.ios) {
        vm.set("orientation", "portrait");
    }
    page.bindingContext = vm;
    page.actionBar.title = navigatedData.context.title;
};
exports.onGridLoaded = function (eventData) {
    launchListener = applicationModule.on(applicationModule.launchEvent, function (args) {
        console.log("Root View: ", args.root);
        console.log("The appication was launched!");
        vm.set("resumeEvent", "The appication was launched!");
    });
    suspendListener = applicationModule.on(applicationModule.suspendEvent, function (args) {
        console.log("The appication was suspended!");
        vm.set("suspendEvent", "The appication was suspended!");
    });
    resumeListener = applicationModule.on(applicationModule.resumeEvent, function (args) {
        console.log("The appication was resumed!");
        vm.set("resumeEvent", "The appication was resumed!");
    });
    exitListener = applicationModule.on(applicationModule.exitEvent, function (args) {
        console.log("The appication was closed!");
    });
    displayedListener = applicationModule.on(applicationModule.displayedEvent, function (args) {
        console.log("NativeScript displayedEvent!");
        vm.set("displayedEvent", "The appication is displayed!");
    });
    lowMemoryListener = applicationModule.on(applicationModule.lowMemoryEvent, function (args) {
        console.log("Instance: ", args.object);
    });
    orientationChangedListener = applicationModule.on(applicationModule.orientationChangedEvent, function (args) {
        console.log("Orientation: ", args.newValue);
        vm.set("orientation", args.newValue);
    });
    uncaughtErrorListener = applicationModule.on(applicationModule.uncaughtErrorEvent, function (args) {
        console.log("NativeScript Error: ", args.error);
    });
};
exports.onGridUnloaded = function () {
    applicationModule.off(applicationModule.launchEvent, launchListener);
    applicationModule.off(applicationModule.resumeEvent, resumeListener);
    applicationModule.off(applicationModule.suspendEvent, suspendListener);
    applicationModule.off(applicationModule.exitEvent, exitListener);
    applicationModule.off(applicationModule.displayedEvent, displayedListener);
    applicationModule.off(applicationModule.lowMemoryEvent, lowMemoryListener);
    applicationModule.off(applicationModule.orientationChangedEvent, orientationChangedListener);
    applicationModule.off(applicationModule.uncaughtErrorEvent, uncaughtErrorListener);
};
