// >> action-bar-hide-show-ts
import { Button, EventData, GestureEventData, Observable, Page } from "@nativescript/core";

let value: boolean = false;

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    const vm = new Observable();
    vm.set("abHidden", value);
    page.bindingContext = vm;
}

export function onTap(args: GestureEventData) {
    const page = (<Button>args.object).page;
    const vm = page.bindingContext;
    value = !value;
    vm.set("abHidden", value);
}
// << action-bar-hide-show-ts
