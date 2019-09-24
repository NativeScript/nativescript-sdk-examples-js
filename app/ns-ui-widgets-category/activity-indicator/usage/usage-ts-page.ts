// >> activity-indicator-setting-busy-code-ts
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";

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
