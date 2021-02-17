
import { Application } from "@nativescript/core";
import { Observable } from "@nativescript/core";
import { isAndroid } from "@nativescript/core";
import { Page, NavigatedData } from "@nativescript/core";
let vm;

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.actionBar.title = "";
    vm = new Observable();
    vm.set("info", "Using Android Broadcast Receiver \nto check the battery life");
    vm.set("batteryLife", "0");
    vm.set("isAndroid", isAndroid);
    page.bindingContext = vm;
    page.actionBar.title = args.context.title;
}

export function onNavigatedTo(args: NavigatedData) {
    vm.set("actionBarTitle", args.context.actionBarTitle);

    // >> app-class-properties
    // import { Application } from "@nativescript/core";
    let isPaused = Application.android.paused; // e.g. false
    let packageName = Application.android.packageName; // The package ID e.g. org.nativescript.nativescriptsdkexamplesng
    let nativeApp = Application.android.nativeApp; // The native Application reference
    let foregroundActivity = Application.android.foregroundActivity; // The current Activity reference
    let context = Application.android.context; // The current Android context
    // << app-class-properties

    // >> broadcast-receiver-ts
    if (isAndroid) {
        // use tns-platform-declarations to access native APIs (e.g. android.content.Intent)
        let receiverCallback = (androidContext, intent) => {
            const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
            const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
            const percent = (level / scale) * 100.0;
            vm.set("batteryLife", percent.toString());
        };

        Application.android.registerBroadcastReceiver(
            android.content.Intent.ACTION_BATTERY_CHANGED,
            receiverCallback
        );
    }
    // << broadcast-receiver-ts
}

export function onUnloaded() {
    if (isAndroid) {
        // >> broadcast-receiver-remove-ts
        Application.android.unregisterBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED);
        // << broadcast-receiver-remove-ts
    }
}
