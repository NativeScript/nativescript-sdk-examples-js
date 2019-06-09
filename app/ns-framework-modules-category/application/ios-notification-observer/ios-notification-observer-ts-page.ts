import * as application from "tns-core-modules/application";
import { Observable } from "tns-core-modules/data/observable";
import { isIOS } from "tns-core-modules/platform";
import { ios as iosApp } from "tns-core-modules/application";
import * as utilsModule from "tns-core-modules/utils/utils";

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
    // import { ios as iosApp } from "tns-core-modules/application";

    // https://developer.apple.com/documentation/uikit/uiapplicationdelegate?language=objc
    let delegate = iosApp.delegate; // the iOS application delegate

    let nativeApp = iosApp.nativeApp; // The native iOS app

    // https://developer.apple.com/documentation/uikit/uiwindow/1621581-rootviewcontroller?language=objc
    let rootController = iosApp.rootController; // the iOS rootViewController

    let window = iosApp.window; // UIWindow
    // << app-class-properties-ios

    // >> app-ios-observer-code-ts
    if (isIOS) {
        utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryMonitoringEnabled = true;
        vm.set(
            "batteryLife",
            + (utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100).toFixed(1)
        );
        observer = iosApp.addNotificationObserver(
            UIDeviceBatteryLevelDidChangeNotification,
            notification => {
                vm.set(
                    "batteryLife",
                    + (utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100).toFixed(1)
                );
            }
        );
    }
    // << app-ios-observer-code-ts
}

export function onUnloaded() {
    if (isIOS) {
        // >> app-ios-observer-remove-ts
        iosApp.removeNotificationObserver(observer, UIDeviceBatteryLevelDidChangeNotification);
        // << app-ios-observer-remove-ts
    }
}
