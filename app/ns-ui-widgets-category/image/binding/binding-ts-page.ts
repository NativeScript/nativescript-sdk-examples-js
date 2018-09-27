import { EventData, Observable } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";

export function onNavigatingTo(args: EventData) {
    const view = <View>args.object;
    // >> image-binding-code-ts
    const vm = new Observable();
    vm.set("imageUri", "~/images/logo.png");
    view.bindingContext = vm;
    // << image-binding-code-ts
}
