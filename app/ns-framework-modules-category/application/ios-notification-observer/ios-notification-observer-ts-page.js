"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("tns-core-modules/application");
var observable_1 = require("tns-core-modules/data/observable");
var platform_1 = require("tns-core-modules/platform");
var utilsModule = require("tns-core-modules/utils/utils");
var vm;
var observer;
function onNavigatingTo(args) {
    var page = args.object;
    vm = new observable_1.Observable();
    vm.set("info", "Using iOS Notification Observer \nto check the battery life");
    vm.set("batteryLife", "0");
    vm.set("isIOS", platform_1.isIOS);
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
}
exports.onNavigatingTo = onNavigatingTo;
function onNavigatedTo(args) {
    vm.set("actionBarTitle", args.context.actionBarTitle);
    if (platform_1.isIOS) {
        utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryMonitoringEnabled = true;
        vm.set("batteryLife", +(utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100).toFixed(1));
        observer = application.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification, function (notification) {
            vm.set("batteryLife", +(utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100).toFixed(1));
        });
    }
}
exports.onNavigatedTo = onNavigatedTo;
function onUnloaded() {
    if (platform_1.isIOS) {
        application.ios.removeNotificationObserver(observer, UIDeviceBatteryLevelDidChangeNotification);
    }
}
exports.onUnloaded = onUnloaded;
