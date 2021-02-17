import { Application } from "@nativescript/core";
import { Observable } from "@nativescript/core";
import { isIOS } from "@nativescript/core";
import { Utils } from "@nativescript/core";
let vm;
let observer;
export function onNavigatingTo(args) {
    const page = args.object;
    vm = new Observable();
    vm.set("info", "Using iOS Notification Observer \nto check the battery life");
    vm.set("batteryLife", "0");
    vm.set("isIOS", isIOS);
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
}

export function onNavigatedTo(args) {
    vm.set("actionBarTitle", args.context.actionBarTitle);
    // >> app-ios-observer-code
    if (Application.ios) {
        Utils.ios.getter(UIDevice, UIDevice.currentDevice).batteryMonitoringEnabled = true;
        vm.set("batteryLife", +(Utils.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100).toFixed(1));
        observer = Application.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification, (notification) => {
            // tslint:disable:max-line-length
            vm.set("batteryLife", +(Utils.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100).toFixed(1));
        });
    }
    // << app-ios-observer-code
}
export function onUnloaded() {
    if (Application.ios) {
        // >> app-ios-observer-remove
        Application.ios.removeNotificationObserver(observer, UIDeviceBatteryLevelDidChangeNotification);
        // << app-ios-observer-remove
    }
}
