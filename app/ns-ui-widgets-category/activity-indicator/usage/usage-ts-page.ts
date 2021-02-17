// >> activity-indicator-setting-busy-code-ts
import { EventData, Observable } from "@nativescript/core";
import { Page } from "@nativescript/core";
import { ActivityIndicator } from "@nativescript/core";

export function onNavigatingTo(args: EventData) {
    const view = args.object as Page;
    const vm = new Observable();
    vm.set("isBusy", true);
    view.bindingContext = vm;
}

export function indicatorLoaded(args: EventData) {
    let activityIndicator = args.object as ActivityIndicator;
    activityIndicator.on("busyChange", (aiargs: EventData) => {
        let indicator = aiargs.object as ActivityIndicator;
        console.log("indicator.busy changed to: " + indicator.busy);
    });
}
// << activity-indicator-setting-busy-code-ts
