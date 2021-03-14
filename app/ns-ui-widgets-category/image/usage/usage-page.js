// >> image-binding-code
import { Observable } from "@nativescript/core";

export function onNavigatingTo(args) {
    const view = args.object;

    const vm = new Observable();
    vm.set("imageUri", "~/images/logo.png");
    view.bindingContext = vm;

}

// << image-binding-code
