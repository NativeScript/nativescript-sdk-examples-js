import * as application from "tns-core-modules/application";
import { Observable } from "tns-core-modules/data/observable";
import { isIOS } from "tns-core-modules/platform";
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
    // >> app-ios-observer-code-ts
    if (isIOS) {
        utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryMonitoringEnabled = true;
        vm.set(
            "batteryLife",
            + (utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100).toFixed(1)
        );
        observer = application.ios.addNotificationObserver(
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
        application.ios.removeNotificationObserver(observer, UIDeviceBatteryLevelDidChangeNotification);
        // << app-ios-observer-remove-ts
    }
}
