import { AndroidApplication } from "@nativescript/core";
import { Observable } from "@nativescript/core";
import { isAndroid } from "@nativescript/core";
let vm;

export function onNavigatingTo(args) {
    const page = args.object;
    page.actionBar.title = "";
    vm = new Observable();
    vm.set("info", "Using Android Broadcast Receiver \nto check the battery life");
    vm.set("batteryLife", "0");
    vm.set("isAndroid", isAndroid);
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
}

export function onNavigatedTo(args) {
    vm.set("actionBarTitle", args.context.actionBarTitle);
    // >> broadcast-receiver
    if (isAndroid) {
        // use tns-platform-declarations to acces native APIs (e.g. android.content.Intent)
        const receiverCallback = (androidContext, intent) => {
            const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
            const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
            const percent = (level / scale) * 100.0;
            vm.set("batteryLife", percent.toString());
        };

        AndroidApplication.android.registerBroadcastReceiver(
            android.content.Intent.ACTION_BATTERY_CHANGED,
            receiverCallback
        );
    }
    // << broadcast-receiver
}

export function onUnloaded() {
    if (isAndroid) {
        // >> broadcast-receiver-remove
        AndroidApplication.android.unregisterBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED);
        // << broadcast-receiver-remove
    }
}

