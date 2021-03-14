// >> label-text-binding
import { Observable } from "@nativescript/core";

export function onNavigatingTo(args) {

    const page = args.object;
    const vm = new Observable();
    vm.set("title", "NativeScript is Awesome");
    page.bindingContext = vm;

}

// << label-text-binding
