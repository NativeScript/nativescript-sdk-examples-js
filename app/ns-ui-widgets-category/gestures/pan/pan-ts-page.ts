import { Observable } from "tns-core-modules/data/observable";
import { Label } from "tns-core-modules/ui/label";
import { Page } from "tns-core-modules/ui/page";
// >> gest-pan-ts
import { PanGestureEventData } from "tns-core-modules/ui/gestures";

export function onPan(args: PanGestureEventData) {
    // args is of type PanGestureEventData
    console.log(`${args.eventName} event triggered for ${args.view}`);
    console.log(`deltaX: ${args.deltaX}`);
    console.log(`deltaY: ${args.deltaY}`);
    console.log(`state: ${args.state}`);

    // >> (hide)
    const page = (<Label>args.object).page;
    const vm = page.bindingContext;
    vm.set("deltaX", args.deltaX);
    vm.set("deltaY", args.deltaY);
    // << (hide)
}
// << gest-pan-ts

export function onPageLoaded(args) {
    const page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}
