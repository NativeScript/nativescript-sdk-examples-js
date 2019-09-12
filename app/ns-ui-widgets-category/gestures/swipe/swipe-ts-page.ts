import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import {GridLayout} from "tns-core-modules/ui/layouts/grid-layout"
// >> gest-swipe-ts
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";

export function onSwipe(args: SwipeGestureEventData) {
    console.log("Swipe!");
    console.log("Object that triggered the event: " + args.object);
    console.log("View that triggered the event: " + args.view);
    console.log("Event name: " + args.eventName);
    console.log("Swipe Direction: " + args.direction);
    // >> (hide)
    let grid = <GridLayout>args.object;
    const page = grid.page;
    const vm = page.bindingContext;
    vm.set("direction", args.direction);
    // << (hide)
}
// << gest-swipe-ts
export function onPageLoaded(args) {
    const page:Page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}
