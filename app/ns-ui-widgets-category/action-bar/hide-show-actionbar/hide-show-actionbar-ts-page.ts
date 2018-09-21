// >> action-bar-hide-show-ts
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from "tns-core-modules/ui/page";
import { GestureEventData } from "tns-core-modules/ui/gestures";

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
