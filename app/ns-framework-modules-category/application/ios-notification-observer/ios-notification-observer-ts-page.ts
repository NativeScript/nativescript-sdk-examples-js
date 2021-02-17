import * as application from "@nativescript/core";
import { isIOS } from "@nativescript/core";
import { Application, Observable } from "@nativescript/core";

let vm;
let observer;

export function onNavigatingTo(args) {
    const page = args.object;
    vm = new Observable();
    vm.set(
        "info",
        "Using iOS Notification Observer \nto check the battery life"
    );
    vm.set("batteryLife", "0");
    vm.set("isIOS", isIOS);
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
}

export function onNavigatedTo(args) {
    vm.set("actionBarTitle", args.context.actionBarTitle);

    // >> app-class-properties-ios
    // import { ios as Application.ios } from "@nativescript/core";

    // https://developer.apple.com/documentation/uikit/uiapplicationdelegate?language=objc
    let delegate = Application.ios.delegate; // the iOS application delegate

    let nativeApp = Application.ios.nativeApp; // The native iOS app

    // https://developer.apple.com/documentation/uikit/uiwindow/1621581-rootviewcontroller?language=objc
    let rootController = Application.ios.rootController; // the iOS rootViewController

    let window = Application.ios.window; // UIWindow
    // << app-class-properties-ios

    // >> app-ios-observer-code-ts
    if (isIOS) {
        UIDevice.currentDevice.batteryMonitoringEnabled = true;
        vm.set(
            "batteryLife",
            +(UIDevice.currentDevice.batteryLevel * 100).toFixed(1)
        );
        observer = Application.ios.addNotificationObserver(
            UIDeviceBatteryLevelDidChangeNotification,
            notification => {
                vm.set(
                    "batteryLife",
                    +(UIDevice.currentDevice.batteryLevel * 100).toFixed(1)
                );
            }
        );
    }
    // << app-ios-observer-code-ts
}

export function onUnloaded() {
    if (isIOS) {
        // >> app-ios-observer-remove-ts
        Application.ios.removeNotificationObserver(observer, UIDeviceBatteryLevelDidChangeNotification);
        // << app-ios-observer-remove-ts
    }
}
