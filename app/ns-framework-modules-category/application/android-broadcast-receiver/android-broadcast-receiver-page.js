
const applicationModule = require("tns-core-modules/application");
const Observable = require("tns-core-modules/data/observable").Observable;
const platformModule = require("tns-core-modules/platform");
let vm;

function onNavigatingTo(args) {
    const page = args.object;
    page.actionBar.title = "";
    vm = new Observable();
    vm.set("info", "Using Android Broadcast Receiver \nto check the battery life");
    vm.set("batteryLife", "0");
    vm.set("isAndroid", platformModule.isAndroid);
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
}
exports.onNavigatingTo = onNavigatingTo;
function onNavigatedTo(args) {
    vm.set("actionBarTitle", args.context.actionBarTitle);
    // >> broadcast-receiver
    if (platformModule.isAndroid) {
        // use tns-platform-declarations to acces native APIs (e.g. android.content.Intent)
        const receiverCallback = (androidContext, intent) => {
            const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
            const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
            const percent = (level / scale) * 100.0;
            vm.set("batteryLife", percent.toString());
        };

        applicationModule.android.registerBroadcastReceiver(
            android.content.Intent.ACTION_BATTERY_CHANGED,
            receiverCallback
        );
    }
    // << broadcast-receiver
}
exports.onNavigatedTo = onNavigatedTo;
function onUnloaded() {
    if (platformModule.isAndroid) {
        // >> broadcast-receiver-remove
        applicationModule.android.unregisterBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED);
        // << broadcast-receiver-remove
    }
}
exports.onUnloaded = onUnloaded;
