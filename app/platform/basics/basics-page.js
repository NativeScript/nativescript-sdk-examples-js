const Observable = require("tns-core-modules/data/observable").Observable;
const dialogs = require("tns-core-modules/ui/dialogs");
// >> require-platform
const platformModule = require("tns-core-modules/platform");
// << require-platform

// >> get-screen-device-info
function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("deviceInformationmodel", platformModule.device.model);
    vm.set("deviceInformationdeviceType", platformModule.device.deviceType);
    vm.set("deviceInformationos", platformModule.device.os);
    vm.set("deviceInformationosVersion", platformModule.device.osVersion);
    vm.set("deviceInformationsdkVersion", platformModule.device.sdkVersion);
    vm.set("deviceInformationlanguage", platformModule.device.language);
    vm.set("deviceInformationmanufacturer", platformModule.device.manufacturer);
    vm.set("deviceInformationuuid", platformModule.device.uuid);
    vm.set("screenInformationheightDIPs", platformModule.screen.mainScreen.heightDIPs);
    vm.set("screenInformationheightPixels", platformModule.screen.mainScreen.heightPixels);
    vm.set("screenInformationscale", platformModule.screen.mainScreen.scale);
    vm.set("screenInformationwidthDIPs", platformModule.screen.mainScreen.widthDIPs);
    vm.set("screenInformationwidthPixels", platformModule.screen.mainScreen.widthPixels);

    vm.set("deviceInfoButton", "Show device info");
    vm.set("screenInfoButton", "Show screen info");
    vm.set("isItemVisible", false);
    vm.set("isItemVisibleScreenInfo", false);
    page.bindingContext = vm;
}


function checkPlatformType(args) {
    let message = "";
    if (platformModule.isAndroid) {
        message = "You are using Android device";
    } else if (platformModule.isIOS) {
        message = "You are using IOS device";
    }
    dialogs.alert(message)
    .then(() => {
        console.log("Dialog closed!");
    });
}

function deviceInfo(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    const isItemVisible = vm.get("isItemVisible");
    if (isItemVisible) {
        vm.set("deviceInfoButton", "Show device info");
    } else {
        vm.set("deviceInfoButton", "Hide device info");
    }
    vm.set("isItemVisible", !isItemVisible);
}

function screenInfo(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    const isItemVisibleScreenInfo = vm.get("isItemVisibleScreenInfo");
    if (isItemVisibleScreenInfo) {
        vm.set("screenInfoButton", "Show screen info");
    } else {
        vm.set("screenInfoButton", "Hide screen info");
    }
    vm.set("isItemVisibleScreenInfo", !isItemVisibleScreenInfo);
}
// << get-screen-device-info
exports.onNavigatingTo = onNavigatingTo;
exports.checkPlatformType = checkPlatformType;
exports.deviceInfo = deviceInfo;
exports.screenInfo = screenInfo;
