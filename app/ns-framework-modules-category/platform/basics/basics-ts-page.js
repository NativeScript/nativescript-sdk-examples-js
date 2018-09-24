"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
var platform_1 = require("tns-core-modules/platform");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("deviceInformationmodel", platform_1.device.model);
    vm.set("deviceInformationdeviceType", platform_1.device.deviceType);
    vm.set("deviceInformationos", platform_1.device.os);
    vm.set("deviceInformationosVersion", platform_1.device.osVersion);
    vm.set("deviceInformationsdkVersion", platform_1.device.sdkVersion);
    vm.set("deviceInformationlanguage", platform_1.device.language);
    vm.set("deviceInformationmanufacturer", platform_1.device.manufacturer);
    vm.set("deviceInformationuuid", platform_1.device.uuid);
    vm.set("screenInformationheightDIPs", platform_1.screen.mainScreen.heightDIPs);
    vm.set("screenInformationheightPixels", platform_1.screen.mainScreen.heightPixels);
    vm.set("screenInformationscale", platform_1.screen.mainScreen.scale);
    vm.set("screenInformationwidthDIPs", platform_1.screen.mainScreen.widthDIPs);
    vm.set("screenInformationwidthPixels", platform_1.screen.mainScreen.widthPixels);
    vm.set("deviceInfoButton", "Show device info");
    vm.set("screenInfoButton", "Show screen info");
    vm.set("isItemVisible", false);
    vm.set("isItemVisibleScreenInfo", false);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function checkPlatformType(args) {
    var message = "";
    if (platform_1.isAndroid) {
        message = "You are using Android device";
    }
    else if (platform_1.isIOS) {
        message = "You are using IOS device";
    }
    dialogs.alert(message)
        .then(function () {
        console.log("Dialog closed!");
    });
}
exports.checkPlatformType = checkPlatformType;
function deviceInfo(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var isItemVisible = vm.get("isItemVisible");
    if (isItemVisible) {
        vm.set("deviceInfoButton", "Show device info");
    }
    else {
        vm.set("deviceInfoButton", "Hide device info");
    }
    vm.set("isItemVisible", !isItemVisible);
}
exports.deviceInfo = deviceInfo;
function screenInfo(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var isItemVisibleScreenInfo = vm.get("isItemVisibleScreenInfo");
    if (isItemVisibleScreenInfo) {
        vm.set("screenInfoButton", "Show screen info");
    }
    else {
        vm.set("screenInfoButton", "Hide screen info");
    }
    vm.set("isItemVisibleScreenInfo", !isItemVisibleScreenInfo);
}
exports.screenInfo = screenInfo;
