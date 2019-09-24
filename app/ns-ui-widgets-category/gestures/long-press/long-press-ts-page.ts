import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
// >> gest-long-press-ts
import { GestureEventData } from "tns-core-modules/ui/gestures";

export function onLongPress(args: GestureEventData) {
    console.log("Object that triggered the event: " + args.object);
    console.log("View that triggered the event: " + args.view);
    console.log("Event name: " + args.eventName);
    // >> (hide)
    let grid = <GridLayout>args.object;
    grid.rotate = 0;
    grid.animate({
        rotate: 360,
        duration: 2000
    });
    // << (hide)
}
// << gest-long-press-ts
