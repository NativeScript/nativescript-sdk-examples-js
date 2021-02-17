// >> image-binding-code-ts
import { EventData, Observable } from "@nativescript/core";
import { View } from "@nativescript/core";

export function onNavigatingTo(args: EventData) {
    const view = <View>args.object;

    const vm = new Observable();
    vm.set("imageUri", "~/images/logo.png");
    view.bindingContext = vm;

}
// << image-binding-code-ts
