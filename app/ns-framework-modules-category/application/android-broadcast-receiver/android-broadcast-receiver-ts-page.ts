
import * as applicationModule from "tns-core-modules/application";
import { Observable } from "tns-core-modules/data/observable";
import { isAndroid } from "tns-core-modules/platform";
import { Page, NavigatedData } from "tns-core-modules/ui/page";

let vm;
let receiver;
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
    // >> broadcast-receiver-ts
    if (isAndroid) {
        // use tns-platform-dclarations to access native APIs (e.g. android.content.Intent)
        receiver = applicationModule.android.registerBroadcastReceiver(
            android.content.Intent.ACTION_BATTERY_CHANGED,
            (context, intent) => {
                const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
                const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
                const percent = (level / scale) * 100.0;
                vm.set("batteryLife", percent.toString());
            });
    }
    // << broadcast-receiver-ts
}

export function onUnloaded() {
    if (isAndroid) {
        // >> broadcast-receiver-remove-ts
        applicationModule.android.unregisterBroadcastReceiver(receiver);
        // << broadcast-receiver-remove-ts
    }
}
