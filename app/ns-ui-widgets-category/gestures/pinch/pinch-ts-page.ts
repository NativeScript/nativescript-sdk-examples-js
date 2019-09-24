import { Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import {GridLayout} from "tns-core-modules/ui/layouts/grid-layout";
let startScale = 1;
// >> gest-pinch-ts
import { PinchGestureEventData } from "tns-core-modules/ui/gestures";

export function onPinch(args: PinchGestureEventData) {
    console.log("Object that triggered the event: " + args.object);
    console.log("View that triggered the event: " + args.view);
    console.log("Event name: " + args.eventName);
    console.log("Pinch scale: " + args.scale + " state: " + args.state);
    // >> (hide)
    let scale = 0;
    let state = 0;
    let grid = <GridLayout>args.object;
    const page = grid.page;
    const vm = page.bindingContext;
    vm.set("scale", args.scale);
    vm.set("state", args.state);

    if (args.scale && args.scale !== 1) {
        let newScale = startScale * args.scale;
        grid.scaleX = newScale;
        grid.scaleY = newScale;
    }
    // << (hide)
}
// << gest-pinch-ts
export function onPageLoaded(args) {
    const page: Page = args.object;
    const vm = new Observable();
    page.bindingContext = vm;
}
