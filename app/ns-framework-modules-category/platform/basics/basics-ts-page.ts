import { Observable } from "tns-core-modules/data/observable";
const dialogs = require("tns-core-modules/ui/dialogs");
import { Page } from "tns-core-modules/ui/page";
// >> import-platform
import { device, screen, isAndroid, isIOS } from "tns-core-modules/platform";
// << import-platform

// >> get-screen-device-info-ts
export function onNavigatingTo(args) {
    const page = <Page>args.object;
    const vm = new Observable();
    vm.set("deviceInformationmodel", device.model);
    vm.set("deviceInformationdeviceType", device.deviceType);
    vm.set("deviceInformationos", device.os);
    vm.set("deviceInformationosVersion", device.osVersion);
    vm.set("deviceInformationsdkVersion", device.sdkVersion);
    vm.set("deviceInformationlanguage", device.language);
    vm.set("deviceInformationmanufacturer", device.manufacturer);
    vm.set("deviceInformationuuid", device.uuid);
    vm.set("screenInformationheightDIPs", screen.mainScreen.heightDIPs);
    vm.set("screenInformationheightPixels", screen.mainScreen.heightPixels);
    vm.set("screenInformationscale", screen.mainScreen.scale);
    vm.set("screenInformationwidthDIPs", screen.mainScreen.widthDIPs);
    vm.set("screenInformationwidthPixels", screen.mainScreen.widthPixels);

    vm.set("deviceInfoButton", "Show device info");
    vm.set("screenInfoButton", "Show screen info");
    vm.set("isItemVisible", false);
    vm.set("isItemVisibleScreenInfo", false);
    page.bindingContext = vm;
}


export function checkPlatformType(args) {
    let message = "";
    if (isAndroid) {
        message = "You are using Android device";
    } else if (isIOS) {
        message = "You are using IOS device";
    }
    dialogs.alert(message)
        .then(() => {
            console.log("Dialog closed!");
        });
}

export function deviceInfo(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    const isItemVisible = vm.get("isItemVisible");
    if (isItemVisible) {
        vm.set("deviceInfoButton", "Show device info");
    } else {
        vm.set("deviceInfoButton", "Hide device info");
    }
    vm.set("isItemVisible", !isItemVisible);
}

export function screenInfo(args) {
    const page: Page = <Page>args.object.page;
    const vm = page.bindingContext;
    const isItemVisibleScreenInfo = vm.get("isItemVisibleScreenInfo");
    if (isItemVisibleScreenInfo) {
        vm.set("screenInfoButton", "Show screen info");
    } else {
        vm.set("screenInfoButton", "Hide screen info");
    }
    vm.set("isItemVisibleScreenInfo", !isItemVisibleScreenInfo);
}
// << get-screen-device-info-ts
