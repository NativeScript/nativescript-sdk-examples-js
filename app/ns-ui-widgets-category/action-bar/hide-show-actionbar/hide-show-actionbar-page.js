// >> action-bar-hide-show-js
import { Observable } from "@nativescript/core";
let value = false;

export function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();
    vm.set("abHidden", value);
    page.bindingContext = vm;
}


export function onTap(args) {
    const page = args.object.page;
    const vm = page.bindingContext;
    value = !value;
    vm.set("abHidden", value);
}
// << action-bar-hide-show-js
