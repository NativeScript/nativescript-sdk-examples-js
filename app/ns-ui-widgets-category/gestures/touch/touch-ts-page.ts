import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import {GridLayout} from "tns-core-modules/ui/layouts/grid-layout";
// >> gest-touch-ts
import {
    TouchGestureEventData
} from "tns-core-modules/ui/gestures";

export function onTouch(args: TouchGestureEventData) {
    console.log("Object that triggered the event: " + args.object);
    console.log("View that triggered the event: " + args.view);
    console.log("Event name: " + args.eventName);
    console.log("Touch action (up, down, cancel or move)" + args.action);
    console.log("Touch point: [" + args.getX() + ", " + args.getY() + "]");
    console.log("activePointers: " + args.getActivePointers().length);
    // >> (hide)
    let grid = <GridLayout>args.object;
    const page = grid.page;
    const vm = page.bindingContext;
    vm.set("coordX", args.getX());
    vm.set("coordY", args.getY());
    // << (hide)
}
// << gest-touch-ts
export function onPageLoaded(args) {
    const page: Page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}
