// >> activity-indicator-setting-busy-code-ts
import { EventData, Observable } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";

export function onNavigatingTo(args: EventData) {
    const view = args.object as View;
    const vm = new Observable();

    vm.set("isLoading", true);
    // >> (hide)
    vm.set("snippet", "<ActivityIndicator busy='{{ isLoading }}'/>");
    // << (hide)
    view.bindingContext = vm;
}
// << activity-indicator-setting-busy-code-ts
