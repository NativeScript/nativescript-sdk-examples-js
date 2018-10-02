"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applicationModule = require("tns-core-modules/application");
var observable_1 = require("tns-core-modules/data/observable");
var platform_1 = require("tns-core-modules/platform");
var vm;
var receiver;
function onNavigatingTo(args) {
    var page = args.object;
    page.actionBar.title = "";
    vm = new observable_1.Observable();
    vm.set("info", "Using Android Broadcast Receiver \nto check the battery life");
    vm.set("batteryLife", "0");
    vm.set("isAndroid", platform_1.isAndroid);
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
}
exports.onNavigatingTo = onNavigatingTo;
function onNavigatedTo(args) {
    vm.set("actionBarTitle", args.context.actionBarTitle);
    if (platform_1.isAndroid) {
        receiver = applicationModule.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED, function (context, intent) {
            var level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
            var scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
            var percent = (level / scale) * 100.0;
            vm.set("batteryLife", percent.toString());
        });
    }
}
exports.onNavigatedTo = onNavigatedTo;
function onUnloaded() {
    if (platform_1.isAndroid) {
        applicationModule.android.unregisterBroadcastReceiver(receiver);
    }
}
exports.onUnloaded = onUnloaded;
