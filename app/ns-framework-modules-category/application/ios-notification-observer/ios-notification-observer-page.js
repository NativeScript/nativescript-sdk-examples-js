const application = require("tns-core-modules/application");
const Observable = require("tns-core-modules/data/observable").Observable;
const platformModule = require("tns-core-modules/platform");
const utilsModule = require("tns-core-modules/utils/utils");
let vm;
let observer;
function onNavigatingTo(args) {
    const page = args.object;
    vm = new Observable();
    vm.set("info", "Using iOS Notification Observer \nto check the battery life");
    vm.set("batteryLife", "0");
    vm.set("isIOS", platformModule.isIOS);
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
}
exports.onNavigatingTo = onNavigatingTo;
function onNavigatedTo(args) {
    vm.set("actionBarTitle", args.context.actionBarTitle);
    // >> app-ios-observer-code
    if (application.ios) {
        utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryMonitoringEnabled = true;
        vm.set("batteryLife", +(utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100).toFixed(1));
        observer = application.ios.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification, (notification) => {
            // tslint:disable:max-line-length
            vm.set("batteryLife", +(utilsModule.ios.getter(UIDevice, UIDevice.currentDevice).batteryLevel * 100).toFixed(1));
        });
    }
    // << app-ios-observer-code
}
exports.onNavigatedTo = onNavigatedTo;
function onUnloaded() {
    if (application.ios) {
        // >> app-ios-observer-remove
        application.ios.removeNotificationObserver(observer, UIDeviceBatteryLevelDidChangeNotification);
        // << app-ios-observer-remove
    }
}
exports.onUnloaded = onUnloaded;
