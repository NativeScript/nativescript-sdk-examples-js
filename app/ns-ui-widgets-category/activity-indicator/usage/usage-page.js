// >> activity-indicator-setting-busy-code
import { Observable } from "@nativescript/core";

export function onNavigatingTo(args) {
    const page = args.object;

    const vm = new Observable();
    vm.set("isBusy", true);
    page.bindingContext = vm;
}

export function indicatorLoaded(args) {
    const activityIndicator = args.object;
    activityIndicator.on("busyChange", (aiargs) => {
        const indicator = aiargs.object;
        console.log(`indicator.busy changed to: ${indicator.busy}`);
    });
}
// << activity-indicator-setting-busy-code
